<template>
    <div>
        <q-toolbar class="text-white shadow-2 bg-primary" style="height: 75px">
            <div class="col-6 col-md-2">
                <router-link to="/" exact>
                    <q-btn flat label="Amber Realty" />
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
            <div class="col-2 text-right nav-bar-content">
                <q-btn
                    label="Schedule A Visit"
                    class="text-black bg-secondary"
                />
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
                    to: '/about',
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
    color: #ffd278;
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
