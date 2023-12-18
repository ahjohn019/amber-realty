<template>
    <div class="q-pa-md">
        <q-btn-dropdown color="primary" dropdown-icon="menu" unelevated>
            <q-list>
                <q-item
                    v-for="(menu, idx) in baseDrawerMenu"
                    :key="idx"
                    clickable
                    v-close-popup
                    @click="onItemClick"
                >
                    <q-item-section>
                        <q-item-label>{{ menu.title }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const baseDrawerMenu = ref({});

        baseDrawerMenu.value = [
            { title: 'Home', value: 'home' },
            { title: 'About Us', value: 'about_us' },
            { title: 'Property', value: 'property' },
            { title: 'Schedule A Visit', value: 'schedule_visit' },
        ];

        return {
            onItemClick() {
                console.log('Clicked on an Item');
            },
            baseDrawerMenu,
        };
    },
};
</script>
