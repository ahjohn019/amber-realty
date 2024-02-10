<template>
    <q-header class="border-b bg-white text-black py-2">
        <div class="row items-center mx-4 md:mx-10 justify-between">
            <div
                class="col col-lg-1 text-sm md:text-2xl lg:text-center"
                :class="$q.screen.lt.md ? 'hidden' : ''"
            >
                <q-toolbar>
                    <q-btn flat @click="drawerToggle" round dense icon="menu" />
                    <q-toolbar-title
                        ><router-link to="/">
                            <img
                                :src="mainLogo"
                                alt=""
                                width="100"
                            /> </router-link
                    ></q-toolbar-title>
                </q-toolbar>
            </div>
            <div
                class="col row text-right"
                :class="$q.screen.lt.md ? 'hidden' : ''"
            >
                <div class="col-12 row">
                    <div class="col-12">
                        <q-btn-dropdown
                            class="text-black"
                            color="white"
                            dropdown-icon="expand_more"
                        >
                            <template v-slot:label>
                                <div class="row items-center no-wrap">
                                    <div class="col text-center">
                                        <div class="font-bold">
                                            {{ adminProfileData.name }}
                                        </div>
                                        <div class="lowercase text-gray-500">
                                            {{ adminProfileData.email }}
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <q-list>
                                <q-item
                                    v-for="item in navBarDropDown"
                                    :key="item"
                                    clickable
                                    v-close-popup
                                    @click="handleDropdownMenu(item.handler)"
                                >
                                    <q-item-section>
                                        <q-item-label>{{
                                            item.label
                                        }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </div>
                </div>
            </div>

            <div class="col" :class="$q.screen.lt.md ? '' : 'hidden'">
                <DrawerMobile />
            </div>
        </div>
    </q-header>
</template>

<script>
import DrawerMobile from '@admin/components/dashboard/DrawerMobile.vue';
import { useAdminAuthStore } from '@store_admin/base/auth.js';
import { onMounted, ref } from 'vue';

export default {
    components: {
        DrawerMobile,
    },

    props: ['drawer'],

    setup(props, { emit }) {
        let drawerSelection = props.drawer;

        const drawerToggle = () => {
            drawerSelection = !drawerSelection;
            handleDrawerSelection(drawerSelection);
        };

        const handleDrawerSelection = (drawerSelection) => {
            emit('updateDrawerSelectionData', drawerSelection);
        };

        const adminStore = useAdminAuthStore();
        const getAuthToken = adminStore.fetchSessionToken();
        const adminProfileData = ref({
            email: '',
            name: '',
        });
        const navBarDropDown = ref([
            { label: 'Log Out', value: 'logout', handler: 'handlerLogout' },
        ]);
        const searchKeywordAdmin = ref('');

        const handleLogout = async () => {
            try {
                await adminStore.handleLogout(getAuthToken);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchProfile = async () => {
            try {
                const fetchAdminProfile = await adminStore.fetchProfile(
                    getAuthToken
                );

                adminProfileData.value.email = fetchAdminProfile.email;
                adminProfileData.value.name = fetchAdminProfile.name;
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        const handleDropdownMenu = (funcName) => {
            const functionList = {
                handlerLogout: handleLogout,
            };

            const selectedFunction = functionList[funcName];

            if (selectedFunction) {
                selectedFunction();
            }
        };

        onMounted(() => {
            fetchProfile();
            drawerToggle();
        });

        return {
            handleLogout,
            adminProfileData,
            navBarDropDown,
            handleDropdownMenu,
            searchKeywordAdmin,
            drawerSelection,
            drawerToggle,
            handleDrawerSelection,
        };
    },
};
</script>

<style>
.q-btn:before {
    box-shadow: none !important;
}

.q-btn-dropdown__arrow-container {
    font-size: 32px !important;
}

.nav-profile-details .q-field__control {
    color: var(--primary);
}

@media (max-width: 768px) {
    .nav-profile-details {
        display: none;
    }

    .nav-profile-sidebar {
        display: block;
    }
}

@media (min-width: 769px) {
    .nav-profile-details {
        display: block;
    }

    .nav-profile-sidebar {
        display: none;
    }
}
</style>
