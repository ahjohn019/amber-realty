<script setup>
import { ref } from 'vue';

const baseDrawerMenu = ref({});
const toggleDrawer = ref(false);

baseDrawerMenu.value = [
    { title: 'Home', value: 'home', route: '/' },
    { title: 'About Us', value: 'about_us', route: '/about-us' },
];

const toggleDrawerMobile = () => {
    toggleDrawer.value = !toggleDrawer.value;
};
</script>

<template>
    <q-toolbar class="justify-end">
        <q-btn flat @click="toggleDrawerMobile" round dense icon="menu" />
    </q-toolbar>

    <q-drawer
        v-model="toggleDrawer"
        :width="200"
        :breakpoint="768"
        overlay
        bordered
        side="right"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
        <q-scroll-area class="fit">
            <q-list>
                <q-item clickable v-close-popup>
                    <q-item-section clickable @click="toggleDrawerMobile()">
                        <q-item-label>
                            <q-icon name="close" size="24px"
                        /></q-item-label>
                    </q-item-section>
                </q-item>
                <q-item
                    v-for="(menu, idx) in baseDrawerMenu"
                    :key="idx"
                    clickable
                    v-close-popup
                    class="font-bold"
                >
                    <q-item-section clickable>
                        <router-link :to="menu.route" activeClass="text-red">
                            <q-item-label>{{ menu.title }}</q-item-label>
                        </router-link>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>
