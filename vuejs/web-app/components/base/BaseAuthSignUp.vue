<script setup>
import { ref } from 'vue';
import { usePropertyWebStore } from '@store_web/auth/index.js';

const emit = defineEmits(['loginSelection', 'infoMessage']);

const handleLogin = () => {
    emit('loginSelection', 'login');
};
const webProperty = usePropertyWebStore();
const signUpFormData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    device_name: 'web',
});
const errors = ref({});

const handleSignUpProcess = async () => {
    try {
        const response = await webProperty.handleSignUpProcess(
            signUpFormData.value
        );

        emit('infoMessage', { message: 'success', type: 'signup' });

        return response;
    } catch (error) {
        errors.value = {
            ...errors.value,
            name: error.response.data.errors?.name?.[0] ?? null,
            email: error.response.data.errors?.email?.[0] ?? null,
            password: error.response.data.errors?.password?.[0] ?? null,
            credential: error.response.data?.data ?? null,
        };
    }
};
</script>

<template>
    <q-card-section class="gap-4">
        <q-input
            outlined
            dense
            label="Name"
            v-model="signUpFormData.name"
            :hint="errors.name"
        />
        <q-input
            outlined
            dense
            label="Email"
            v-model="signUpFormData.email"
            type="email"
            :hint="errors.email"
        />
        <q-input
            outlined
            dense
            label="Password"
            type="password"
            v-model="signUpFormData.password"
        />
        <q-input
            outlined
            dense
            label="Password Confirmation"
            type="password"
            v-model="signUpFormData.password_confirmation"
            :hint="errors.password ?? errors.credential"
        />
        <q-btn color="primary" label="Sign Up" @click="handleSignUpProcess" />

        <q-separator color="grey-4" />

        <div>
            Already Sign Up ?
            <span class="text-blue-700 cursor-pointer" @click="handleLogin()"
                >Login</span
            >
        </div>
    </q-card-section>
</template>
