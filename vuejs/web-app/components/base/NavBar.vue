<template>
    <div class="fixed z-10 w-full">
        <q-toolbar class="bg-secondary shadow-2" style="height: 85px">
            <div class="col-6 col-md-2">
                <router-link to="/" exact>
                    <img :src="mainLogo" alt="" width="85" />
                </router-link>
            </div>

            <div class="col text-right nav-bar-dropdown">
                <BaseDrawer />
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
        </q-toolbar>
    </div>
</template>

<script>
import { ref } from 'vue';
import BaseDrawer from './BaseDrawer.vue';

export default {
    components: {
        BaseDrawer,
    },
    setup() {
        return {
            model: ref('home'),

            options: [
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
                {
                    label: 'Property',
                    value: 'property',
                    to: '/property',
                    exact: false,
                    activeClass: 'active-link',
                },
            ],
        };
    },
};
</script>

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
