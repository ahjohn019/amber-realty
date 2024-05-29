<script setup>
import { ref } from 'vue';
import BaseDrawer from './BaseDrawer.vue';

const options = ref([]);
options.value = [
    {
        label: 'Home',
        value: 'home',
        to: '/',
        exact: true,
        activeClass: 'active-link',
    },
    {
        label: 'About Us',
        value: 'about_us',
        to: '/about-us',
        exact: false,
        activeClass: 'active-link',
    },
];
</script>

<template>
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar
            class="bg-secondary shadow-2 text-black"
            style="height: 85px"
        >
            <div class="col-4 col-md-2">
                <router-link to="/" exact>
                    <img :src="mainLogo" alt="" width="85" />
                </router-link>
            </div>
            <div class="col-4 nav-bar-dropdown text-center uppercase font-bold">
                <div :class="$q.screen.lt.sm ? 'text-sm' : 'text-2xl'">
                    amber realty
                </div>
                <div style="text-wrap: nowrap">E-(3)1482</div>
            </div>
            <div class="col-8 text-center nav-bar-content">
                <router-link
                    v-for="(option, key) in options"
                    :key="key"
                    :to="option.to"
                    :exact="option.exact"
                    :active-class="option.activeClass"
                >
                    <q-btn flat :label="option.label" />
                </router-link>
            </div>
            <div class="col-4 text-right nav-bar-dropdown">
                <BaseDrawer />
            </div>
        </q-toolbar>
    </q-header>
</template>

<style>
.q-btn {
    font-weight: bold;
}

.nav-bar-dropdown {
    display: none;
}

.active-link {
    color: #ac0e14;
    font-weight: bold;
}

@media (max-width: 768px) {
    .nav-bar-content {
        display: none;
    }

    .nav-bar-dropdown {
        display: inline-block;
    }
}
</style>
