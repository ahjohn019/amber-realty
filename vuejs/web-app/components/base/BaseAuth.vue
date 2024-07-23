<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseAuthLogin from './BaseAuthLogin.vue';
import BaseAuthSignUp from './BaseAuthSignUp.vue';
import { usePropertyAuthWebStore } from '@store_web/auth/index.js';

const authAlert = ref(false);
const signUpDescriptions = ref([]);
const loginClass = ref(true);
const signUpClass = ref(false);
const modalInfo = ref(true);
const webProperty = usePropertyAuthWebStore();
const getAuthToken = webProperty.fetchSessionToken();
const authCheck = ref(false);

const authSelection = () => {
    authAlert.value = true;
};

const router = useRouter();

signUpDescriptions.value = [
    { icon: 'done', title: 'Save Searches' },
    { icon: 'group', title: 'Shortlist' },
    { icon: 'handshake', title: 'Transaction Insights' },
];

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
    }
};

const fetchProfile = async () => {
    try {
        const response = await webProperty.fetchProfile(getAuthToken);

        if (response) {
            authCheck.value = true;
        }

        return response;
    } catch (error) {}
};

const handleLogout = async () => {
    try {
        const response = await webProperty.handleLogoutProcess(getAuthToken);

        if (response) {
            authCheck.value = false;
            router.go(0);
        }

        return response;
    } catch (error) {}
};

fetchProfile();
</script>

<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn
            flat
            label="Login"
            color="black"
            @click="authSelection"
            v-if="!authCheck"
        />

        <q-btn-dropdown flat color="black" label="Profile" v-if="authCheck">
            <q-list>
                <q-item clickable v-close-popup>
                    <q-item-section>
                        <router-link
                            to="/profile"
                            activeClass="font-bold text-red"
                        >
                            <q-item-label>Dashboard</q-item-label>
                        </router-link>
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="handleLogout">
                    <q-item-section>
                        <q-item-label>Logout</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>

        <q-dialog
            v-model="authAlert"
            :class="$q.screen.lt.md ? 'hidden' : ''"
            v-if="modalInfo"
        >
            <q-card
                class="auth__background__main h-[650px] w-full relative bg-white"
                :class="$q.screen.lt.lg ? '!max-w-[85vw]' : '!max-w-[50vw]'"
            >
                <q-card-section
                    class="auth__background__two absolute h-full w-full"
                ></q-card-section>
                <BaseAuthLogin
                    class="absolute bg-white right-[2.5rem] top-[18%] w-1/2 flex flex-col !shadow-xl !rounded-lg text-center font-bold h-[450px] justify-center"
                    @signUpSelection="handleAuthComponent"
                    @infoMessage="handleInfoMessage"
                    v-if="loginClass"
                />

                <BaseAuthSignUp
                    class="absolute bg-white right-[2.5rem] top-[18%] w-1/2 flex flex-col !shadow-xl !rounded-lg text-center font-bold h-[450px] justify-center"
                    @loginSelection="handleAuthComponent"
                    @infoMessage="handleInfoMessage"
                    v-if="signUpClass"
                />

                <q-card-section
                    class="text-white absolute top-[15%] left-[5%] font-bold"
                >
                    <q-list class="q-gutter-sm">
                        <q-item>
                            <q-img
                                src="images/amber_realty_logo.png"
                                fit="contain"
                                class="rounded-lg h-[100px]"
                            >
                            </q-img>
                        </q-item>

                        <q-item class="text-4xl pb-6">
                            <q-item-section>Why Sign-Up ?</q-item-section>
                        </q-item>

                        <q-item
                            v-for="(description, key) in signUpDescriptions"
                            :key="key"
                        >
                            <q-item-section avatar>
                                <q-avatar
                                    color="primary"
                                    text-color="white"
                                    :icon="description.icon"
                                />
                            </q-item-section>
                            <q-item-section class="uppercase">{{
                                description.title
                            }}</q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<style>
.auth__background__two {
    background-image: url('../../../../../../images/house_background_one.jpg');
    clip-path: polygon(0 0, 100% 0, 100% 15%, 40% 100%, 0 100%, 0 16%);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.5);
}
</style>
