<template>
    <div>
        <q-toolbar class="text-white shadow-2 bg-primary" style="height: 75px">
            <div class="col-6 col-md-2">
                <q-btn flat label="Amber Realty" />
            </div>

            <div class="col text-right nav-bar-dropdown">
                <BaseDrawer />
            </div>

            <div class="col-8 text-center nav-bar-content">
                <q-btn-toggle
                    v-model="model"
                    flat
                    stretch
                    toggle-color="yellow"
                    :options="options"
                />
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
                { label: 'Home', value: 'home' },
                { label: 'About Us', value: 'about_us' },
                { label: 'Property', value: 'property' },
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

@media (max-width: 768px) {
    .nav-bar-content {
        display: none;
    }

    .nav-bar-dropdown {
        display: inline-block;
    }
}
</style>
