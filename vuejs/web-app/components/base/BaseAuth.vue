<script setup>
import { ref } from 'vue';

const authAlert = ref(true);

const authSelection = () => {
    authAlert.value = true;
};

const handleSignUp = () => {
    console.log('sign up');
};

const handleForgetPassword = () => {
    console.log('forget password');
};
</script>

<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn flat label="Login" color="black" @click="authSelection()" />

        <q-dialog v-model="authAlert" :class="$q.screen.lt.md ? 'hidden' : ''">
            <q-card
                class="auth__background__main h-[650px] w-full relative bg-white"
                :class="$q.screen.lt.lg ? '!max-w-[85vw]' : '!max-w-[55vw]'"
            >
                <q-card-section
                    class="auth__background__two absolute h-full w-full"
                ></q-card-section>
                <q-card-section
                    class="absolute bg-white right-[2.5rem] top-[25%] w-1/2 flex flex-col gap-4 !shadow-lg text-center font-bold"
                >
                    <q-input outlined dense label="Email" />
                    <q-input outlined dense label="Password" />
                    <q-btn color="primary" label="Login" />

                    <q-separator color="grey-4" />

                    <div>
                        Dont have an account ?
                        <span
                            class="text-blue-700 cursor-pointer"
                            @click="handleSignUp()"
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
                <q-card-section
                    class="text-white absolute top-[22%] left-[5%] font-bold"
                >
                    <q-list class="q-gutter-md">
                        <q-item class="text-4xl pb-6">
                            <q-item-section>Why Sign-Up ?</q-item-section>
                        </q-item>

                        <q-item>
                            <q-item-section avatar>
                                <q-avatar
                                    color="primary"
                                    text-color="white"
                                    icon="done"
                                />
                            </q-item-section>
                            <q-item-section class="uppercase"
                                >Saved Searches</q-item-section
                            >
                        </q-item>
                        <q-item>
                            <q-item-section avatar>
                                <q-avatar
                                    color="primary"
                                    text-color="white"
                                    icon="group"
                                />
                            </q-item-section>
                            <q-item-section class="uppercase"
                                >Shortlist</q-item-section
                            >
                        </q-item>
                        <q-item>
                            <q-item-section avatar>
                                <q-avatar
                                    color="primary"
                                    text-color="white"
                                    icon="handshake"
                                />
                            </q-item-section>
                            <q-item-section class="uppercase"
                                >Transaction Insights</q-item-section
                            >
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
