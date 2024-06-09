<script setup>
import { ref } from 'vue';
import { usePropertyWebStore } from '@store_web/auth/index.js';

const webProperty = usePropertyWebStore();
const getAuthToken = webProperty.fetchSessionToken();

const changePasswordForm = ref({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const errors = ref({});

const handleChangePassword = async () => {
    try {
        const response = await webProperty.updatePassword(
            getAuthToken,
            changePasswordForm.value
        );

        return response;
    } catch (error) {
        errors.value = {
            ...errors.value,
            current_password_invalid: error.response.data?.message ?? null,
            current_password:
                error.response.data.errors?.current_password[0] ?? null,
            password: error.response.errors?.password ?? null,
        };
    }
};
</script>

<template>
    <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Change Password</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
            <q-input
                outlined
                dense
                label="Current Password"
                v-model="changePasswordForm.current_password"
                type="password"
                :hint="
                    errors.current_password ?? errors.current_password_invalid
                "
            />
        </q-card-section>

        <q-card-section>
            <q-input
                outlined
                dense
                label="New Password"
                v-model="changePasswordForm.password"
                type="password"
                :hint="errors.current_password"
            />
        </q-card-section>

        <q-card-section>
            <q-input
                outlined
                dense
                label="Confirm Password"
                v-model="changePasswordForm.password_confirmation"
                type="password"
                :hint="errors.message"
            />
        </q-card-section>

        <q-card-section>
            <q-btn
                unelevated
                color="primary"
                label="Save Password"
                @click="handleChangePassword"
            />
        </q-card-section>
    </q-card>
</template>
