<?php

namespace App\Http\Controllers\Web;

use App\Library\PermissionTag;
use App\Http\Services\AuthService;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\Web\LoginFormRequest;
use App\Http\Requests\Web\RegisterFormRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Web\ResetPasswordRequest;
use App\Http\Requests\Admin\ForgotPasswordRequest;
use App\Http\Requests\Web\AuthPasswordUpdateFormRequest;
use App\Http\Requests\Web\UpdateUserFormRequest;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;

class AuthController extends Controller
{
    //
    public function login(LoginFormRequest $request)
    {
        try {
            $payload = $request->validated();

            $payload['credentials'] = [
                'email' => $payload['email'],
                'password' => $payload['password'],
            ];

            return DB::transaction(function () use ($payload) {
                $token = AuthService::login($payload);

                if (!auth()->user()->hasPermissionTo(PermissionTag::ACCESS_USER_SETTINGS)) {
                    return self::failedResponse('Unauthorized', 'You are not allowed to use the user system.');
                }

                return self::successResponse('Success', [
                    'token' => $token->plainTextToken,
                    'user' => auth()->user(),
                ])->header('Authorization', $token->plainTextToken);
            });
        } catch (\Throwable $th) {
            return self::failedResponse('Unauthorized', $th->getMessage(), Response::HTTP_UNAUTHORIZED);
        }
    }

    public function authProfile()
    {
        return self::successResponse('Success', auth()->user());
    }

    public function register(RegisterFormRequest $request)
    {
        try {
            $payload = $request->validated();
            $result = AuthService::createUser($payload);

            return self::successResponse('Success', $result);
        } catch (\Throwable $th) {
            return self::failedResponse('Unauthorized', $th->getMessage(), Response::HTTP_UNAUTHORIZED);
        }
    }

    public function logout()
    {
        $result = AuthService::logout([]);

        return self::successResponse('Success', $result);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        $result = AuthService::resetPassword($request->validated());

        return self::successResponse('Success', $result);
    }

    public function updatePassword(AuthPasswordUpdateFormRequest $request)
    {
        $payload = $request->validated();

        $authUser = auth()->user();

        // check current password
        if (!Hash::check($request['current_password'], $authUser->password)) {
            throw new BadRequestException('Current Password is invalid.');
        }

        // see if old and new password are equal
        if (Hash::check($request['password'], $authUser->password)) {
            throw new BadRequestException('New password cannot be the same as current password.');
        }

        $result = AuthService::updateUser($authUser, [
            'password' => Hash::make($payload['password']),
        ]);

        return self::successResponse('Success', [
            'status' => ($result != null),
        ]);
    }

    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $payload = $request->validated();

        $result = AuthService::forgotPassword($payload['email']);

        return self::successResponse('Success', [
            'email' => $result,
        ]);
    }

    public function updateProfile(UpdateUserFormRequest $request)
    {
        $authUser = auth()->user();
        $payload = $request->validated();

        $result = AuthService::updateUser($authUser, [
            'name' => $payload['name'],
            'email' => $payload['email']
        ]);

        return self::successResponse('Success', [
            'name' => $result->name,
            'email' => $result->email,
        ]);
    }
}
