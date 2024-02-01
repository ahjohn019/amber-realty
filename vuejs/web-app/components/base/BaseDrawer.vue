<template>
    <div class="q-pa-md">
        <q-btn-dropdown color="primary" dropdown-icon="menu" unelevated>
            <q-list>
                <q-item
                    v-for="(menu, idx) in baseDrawerMenu"
                    :key="idx"
                    clickable
                    v-close-popup
                >
                    <q-item-section clickable @click="onItemClick(menu.route)">
                        <q-item-label>{{ menu.title }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const baseDrawerMenu = ref({});

        baseDrawerMenu.value = [
            { title: 'Home', value: 'home', route: '/' },
            { title: 'About Us', value: 'about_us', route: '/about-us' },
            // { title: 'Property', value: 'property', route: '/property' },
        ];

        return {
            onItemClick(routeName) {
                router.push(routeName);
                window.scrollTo(0, 0);
            },
            baseDrawerMenu,
        };
    },
};
</script>
