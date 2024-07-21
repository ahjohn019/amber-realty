<script setup>
import { ref } from 'vue';
import BaseAuthLogin from './BaseAuthLogin.vue';
import BaseAuthSignUp from './BaseAuthSignUp.vue';
import { useRouter } from 'vue-router';
import { usePropertyAuthWebStore } from '@store_web/auth/index.js';

const alert = ref(false);
const maximizedToggle = ref(true);
const loginClass = ref(true);
const signUpClass = ref(false);
const modalInfo = ref(true);
const router = useRouter();
const authCheck = ref(false);
const webProperty = usePropertyAuthWebStore();
const getAuthToken = webProperty.fetchSessionToken();

const handleAuthComponent = (value) => {
    switch (value) {
        case 'signup':
            loginClass.value = false;
            signUpClass.value = true;
            break;

        default:
            loginClass.value = true;
            signUpClass.value = false;
            break;
    }
};

const handleInfoMessage = (value) => {
    const responses = {
        login: {
            text: 'Login Successfully',
            icon: 'success',
        },
        signup: {
            text: 'Sign Up Successfully',
            icon: 'success',
        },
    };
    const response = responses[value.type];

    if (response && value.message === 'success') {
        modalInfo.value = false;
        router.go(0);
    }
};

const fetchProfile = async () => {
    try {
        const response = await webProperty.fetchProfile(getAuthToken);

        if (response) {
            authCheck.value = true;
        }

        console.log('response', response);

        return response;
    } catch (error) {}
};

const handleLogout = async () => {
    try {
        const response = await webProperty.handleLogoutProcess(getAuthToken);

        if (response) {
            authCheck.value = false;
        }

        return response;
    } catch (error) {}
};

fetchProfile();
</script>
<template>
    <q-item
        clickable
        v-close-popup
        class="font-bold"
        @click="alert = true"
        v-if="!authCheck"
    >
        <q-item-section clickable>
            <q-item-label>Login</q-item-label>
        </q-item-section>
    </q-item>
    <q-item clickable v-close-popup class="font-bold" v-if="authCheck">
        <q-item-section clickable>
            <router-link to="/profile" activeClass="text-red">
                <q-item-label>Profile</q-item-label>
            </router-link>
        </q-item-section>
    </q-item>
    <q-item
        clickable
        v-close-popup
        class="font-bold"
        @click="handleLogout"
        v-if="authCheck"
    >
        <q-item-section clickable>
            <q-item-label>Logout</q-item-label>
        </q-item-section>
    </q-item>
    <q-dialog v-model="alert" :maximized="maximizedToggle">
        <q-card>
            <q-bar>
                <q-space />

                <q-btn
                    dense
                    flat
                    icon="minimize"
                    @click="maximizedToggle = false"
                    :disable="!maximizedToggle"
                >
                    <q-tooltip
                        v-if="maximizedToggle"
                        class="bg-white text-primary"
                        >Minimize</q-tooltip
                    >
                </q-btn>
                <q-btn
                    dense
                    flat
                    icon="crop_square"
                    @click="maximizedToggle = true"
                    :disable="maximizedToggle"
                >
                    <q-tooltip
                        v-if="!maximizedToggle"
                        class="bg-white text-primary"
                        >Maximize</q-tooltip
                    >
                </q-btn>
                <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>

            <q-card-section class="q-pt-none" v-if="loginClass">
                <BaseAuthLogin
                    class="flex flex-col text-center justify-center h-[94vh]"
                    @signUpSelection="handleAuthComponent"
                    @infoMessage="handleInfoMessage"
                />
            </q-card-section>

            <q-card-section class="q-pt-none" v-if="signUpClass">
                <BaseAuthSignUp
                    class="flex flex-col text-center justify-center h-[94vh]"
                    @loginSelection="handleAuthComponent"
                    @infoMessage="handleInfoMessage"
                />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
