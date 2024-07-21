<script setup>
import { usePropertyAuthWebStore } from '@store_web/auth/index.js';
import { ref } from 'vue';

const emit = defineEmits([
    'signUpSelection',
    'forgetPasswordSelection',
    'infoMessage',
]);
const webProperty = usePropertyAuthWebStore();
const loginFormData = ref({
    email: '',
    password: '',
    device_name: 'web',
});

const errors = ref({});

const handleSignUp = () => {
    emit('signUpSelection', 'signup');
};

const handleForgetPassword = () => {
    emit('forgetPasswordSelection', 'forgetpassword');
};

const handleLoginProcess = async () => {
    try {
        const response = await webProperty.handleLoginProcess(
            loginFormData.value
        );

        emit('infoMessage', { message: 'success', type: 'login' });

        return response;
    } catch (error) {
        errors.value = {
            ...errors.value,
            email: error.response.data.errors?.email?.[0] ?? null,
            password: error.response.data.errors?.password?.[0] ?? null,
            credential: error.response.data?.data ?? null,
        };
    }
};
</script>

<template>
    <q-card-section class="gap-6">
        <q-input
            outlined
            dense
            label="Email"
            type="email"
            v-model="loginFormData.email"
            :hint="errors.email"
        />

        <q-input
            outlined
            dense
            label="Password"
            type="password"
            v-model="loginFormData.password"
            :hint="errors.password ?? errors.credential"
        />

        <q-btn color="primary" label="Login" @click="handleLoginProcess" />

        <q-separator color="grey-4" />

        <div>
            Dont have an account ?
            <span class="text-blue-700 cursor-pointer" @click="handleSignUp"
                >Sign Up</span
            >
        </div>

        <q-separator color="grey-4" />

        <div
            class="text-blue-700 cursor-pointer"
            @click="handleForgetPassword()"
        >
            Forget password ?
        </div>
    </q-card-section>
</template>

<style>
.q-field__messages.col {
    color: red;
    font-size: 0.75rem;
}
</style>
