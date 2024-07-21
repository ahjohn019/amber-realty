<script setup>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import ChangePasswordForm from '@web/components/profile/ChangePasswordForm.vue';
import ShortListPost from '@web/components/profile/ShortListPost.vue';
import { usePropertyAuthWebStore } from '@store_web/auth/index.js';
import { ref } from 'vue';

const webAuthProperty = usePropertyAuthWebStore();
const getAuthToken = webAuthProperty.fetchSessionToken();
const tabs = ref('edit_profile');
const userProfile = ref({
    name: '',
    email: '',
    saved_property: '',
});
const changePasswordModal = ref(false);
const errors = ref({});

const fetchProfile = async () => {
    try {
        const response = await webAuthProperty.fetchProfile(getAuthToken);

        userProfile.value = {
            ...userProfile.value,
            name: response?.name ?? null,
            email: response?.email ?? null,
            saved_property: response?.saved_property ?? null,
        };

        return response;
    } catch (error) {}
};

const updateProfile = async () => {
    try {
        const response = await webAuthProperty.updateProfile(
            getAuthToken,
            userProfile.value
        );

        return response;
    } catch (error) {
        errors.value = {
            ...errors.value,
            name: error.response.data.errors?.name?.[0] ?? null,
            email: error.response.data.errors?.email?.[0] ?? null,
        };
    }
};

fetchProfile();
</script>

<template>
    <BaseLayout>
        <template #content>
            <div class="container mx-auto md:w-[992px]">
                <div
                    class="profile__header"
                    :class="$q.screen.lt.md ? '' : 'mt-6'"
                >
                    <div class="relative bg-primary h-[150px] z-10">
                        <div
                            class="flex items-center"
                            :class="
                                $q.screen.lt.md
                                    ? 'justify-center h-full'
                                    : 'absolute top-[27.5%] left-[1.25rem]'
                            "
                        >
                            <q-avatar size="120px" class="relative">
                                <img
                                    src="https://cdn.quasar.dev/img/avatar.png"
                                />
                            </q-avatar>
                            <div class="pl-[45px]">
                                <div class="text-2xl text-white">
                                    {{ userProfile?.name }}
                                </div>
                                <div class="text-white">Member</div>
                            </div>
                        </div>
                    </div>
                    <div class="profile__down relative top-[5%]">
                        <q-card>
                            <q-tabs
                                v-model="tabs"
                                dense
                                class="bg-grey-2 text-black font-bold h-[3.25rem]"
                                active-color="primary"
                                indicator-color="purple"
                                align="justify"
                            >
                                <q-tab
                                    name="edit_profile"
                                    label="Edit Profile"
                                />
                                <q-tab
                                    name="my_shortlists"
                                    label="My Shortlists"
                                />
                                <!-- <q-tab
                                    name="shared_posts"
                                    label="My Shared Posts"
                                /> -->
                            </q-tabs>

                            <q-tab-panels v-model="tabs" animated>
                                <q-tab-panel name="edit_profile">
                                    <div class="row gap-y-2">
                                        <div
                                            class="col-12 col-md-6 p-2 flex flex-col gap-2"
                                        >
                                            <label
                                                for="name"
                                                class="uppercase font-semibold"
                                                >Name</label
                                            >
                                            <q-input
                                                outlined
                                                dense
                                                v-model="userProfile.name"
                                                :hint="errors.name"
                                            />
                                        </div>
                                        <div
                                            class="col-12 col-md-6 p-2 flex flex-col gap-2"
                                        >
                                            <label
                                                for="email"
                                                class="uppercase font-semibold"
                                                >Email</label
                                            >
                                            <q-input
                                                outlined
                                                dense
                                                type="email"
                                                v-model="userProfile.email"
                                                :hint="errors.email"
                                            />
                                        </div>
                                        <div
                                            class="col-12 p-2 flex justify-center gap-2"
                                        >
                                            <q-btn
                                                label="Change Password"
                                                color="primary"
                                                @click="
                                                    changePasswordModal = true
                                                "
                                            />
                                            <q-btn
                                                unelevated
                                                color="primary"
                                                label="Save Profile"
                                                @click="updateProfile"
                                            />
                                        </div>
                                    </div>

                                    <q-dialog v-model="changePasswordModal">
                                        <ChangePasswordForm />
                                    </q-dialog>
                                </q-tab-panel>

                                <q-tab-panel name="my_shortlists">
                                    <ShortListPost
                                        :userProfileProperty="
                                            userProfile.saved_property
                                        "
                                    />
                                </q-tab-panel>

                                <!-- <q-tab-panel name="shared_posts">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </q-tab-panel> -->
                            </q-tab-panels>
                        </q-card>
                    </div>
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<style>
.q-tab__label {
    font-weight: bold;
}
</style>
