<template>
    <div class="grid place-items-center h-screen login-main-page">
        <div class="row mx-auto admin-login-page px-6 gap-8">
            <div class="col-12">
                <img :src="mainLogo" alt="" width="100" class="mx-auto" />
            </div>
            <div class="col-12">
                <q-input
                    outlined
                    dense
                    v-model="formData.email"
                    label="Login"
                    type="email"
                    filled
                >
                    <template v-slot:prepend>
                        <q-icon name="person" />
                    </template>
                </q-input>
            </div>
            <div class="col-12">
                <q-input
                    outlined
                    dense
                    v-model="formData.password"
                    label="Password"
                    type="password"
                    filled
                >
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
            </div>
            <div class="col-12">
                <q-btn
                    label="login"
                    class="text-white bg-primary !w-full"
                    rounded
                    @click="submitAdminLogin"
                />
            </div>
            <div class="col-12 flex items-center justify-between">
                <div class="admin-login-checkbox">
                    <q-checkbox v-model="forget_password" label="Remember Me" />
                </div>
                <div>
                    <a href="#" target="_blank">Forgot Password?</a>
                </div>
            </div>
        </div>

        <wave-component />
    </div>
</template>

<script>
import { ref } from 'vue';
import WaveComponent from '@admin/components/login/waveComponent.vue';
import { useAdminAuthStore } from '@store_admin/base/auth.js';

export default {
    components: {
        WaveComponent,
    },

    setup() {
        const adminStore = useAdminAuthStore();
        // const formData = ref({
        //     email: 'admin_one@example.com',
        //     password: '1111aaaa',
        //     device_name: 'web',
        // });

        const formData = ref({
            email: '',
            password: '',
            device_name: 'web',
        });

        const submitAdminLogin = async () => {
            await adminStore.handleLogin(formData.value);
        };

        return {
            submitAdminLogin,
            forget_password: ref(''),
            formData,
        };
    },
};
</script>

<style>
.admin-login-page {
    max-width: 640px;
}

.admin-login-checkbox .q-checkbox .q-checkbox__inner--truthy {
    color: var(--primary);
}
.login-main-page {
    background-color: var(--background);
}
</style>
