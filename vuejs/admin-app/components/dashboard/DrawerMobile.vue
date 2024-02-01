<template>
    <q-toolbar class="justify-end">
        <q-btn flat @click="toggleDrawerMobile" round dense icon="menu" />
    </q-toolbar>

    <q-drawer
        v-model="toggleDrawer"
        :width="200"
        :breakpoint="500"
        overlay
        bordered
        side="right"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
        <q-scroll-area class="fit">
            <q-list>
                <q-item clickable v-ripple to="/">
                    <q-item-section class="items-center">
                        <q-avatar size="100px">
                            <img :src="mainLogo" />
                        </q-avatar>
                    </q-item-section>
                </q-item>
                <q-separator />
                <template v-for="(menuItem, index) in menuList" :key="index">
                    <q-item
                        clickable
                        :active="menuItem.title === 'Outbox'"
                        @click="handleItemClick(menuItem)"
                        :to="menuItem.route"
                        v-ripple
                    >
                        <q-item-section avatar>
                            <q-icon :name="menuItem.icon" />
                        </q-item-section>
                        <q-item-section>
                            {{ menuItem.text }}
                        </q-item-section>
                    </q-item>
                    <q-separator
                        :key="'sep' + index"
                        v-if="menuItem.separator"
                    />
                </template>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script>
import { ref } from 'vue';
import { useAdminAuthStore } from '@store_admin/base/auth.js';

const menuList = [
    // {
    //     icon: 'grid_view',
    //     title: 'dashboard',
    //     text: 'Dashboard',
    //     route: '/',
    //     separator: true,
    // },
    {
        icon: 'description',
        title: 'property',
        text: 'Property',
        route: '/',
        separator: true,
    },
    {
        icon: 'logout',
        title: 'logout',
        text: 'Logout',
    },
    // {
    //     icon: 'tune',
    //     title: 'settings',
    //     text: 'Settings',
    //     route: null,
    // },
];

export default {
    setup() {
        const toggleDrawer = ref(false);

        const link = ref('dashboard');

        const adminStore = useAdminAuthStore();
        const getAuthToken = adminStore.fetchSessionToken();

        // Expose the parent method
        const toggleDrawerMobile = () => {
            toggleDrawer.value = !toggleDrawer.value;
        };

        const handleItemClick = (sideBarItem) => {
            link.value = sideBarItem.title;

            if (link.value === 'logout') {
                handleLogout();
            }
        };

        const handleLogout = async () => {
            try {
                await adminStore.handleLogout(getAuthToken);
            } catch (error) {
                console.log(error);
            }
        };

        return {
            toggleDrawerMobile,
            handleItemClick,
            handleLogout,
            toggleDrawer,
            menuList,
        };
    },
};
</script>
