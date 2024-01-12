<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (Throwable $e) {
            if ($e instanceof AuthenticationException) {
                return response()->json([
                    'errors' => $e->getMessage(),
                    'messages' => $e->getMessage(),
                    'code' => Response::HTTP_UNAUTHORIZED
                ]);
            }

            if ($e instanceof ValidationException) {
                $errors = $e->validator->errors()->all();

                return response()->json([
                    'errors' => $e->validator->errors(),
                    'messages' => $errors,
                    'code' => Response::HTTP_UNPROCESSABLE_ENTITY
                ]);
            }
        });
    }
}
