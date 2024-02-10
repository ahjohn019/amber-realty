<template>
    <q-layout view="hHh Lpr lff" container style="height: 100vh">
        <nav-bar
            :drawer="drawer"
            @updateDrawerSelectionData="updateDrawerSelection"
        />
        <Suspense>
            <q-page-container class="dashboard-container">
                <q-page class="overflow-hidden">
                    <q-drawer
                        v-model="updateDrawerSelectionData"
                        show-if-above
                        :width="200"
                        :breakpoint="1024"
                        bordered
                    >
                        <q-scroll-area class="fit">
                            <side-bar class="admin-sidebar" />
                        </q-scroll-area>
                    </q-drawer>

                    <slot name="content"></slot>
                </q-page>
            </q-page-container>
        </Suspense>
    </q-layout>
</template>

<script>
import NavBar from '@admin/components/dashboard/NavBar.vue';
import SideBar from '@admin/components/dashboard/SideBar.vue';
import { ref } from 'vue';

export default {
    components: {
        NavBar,
        SideBar,
    },

    setup() {
        const drawer = ref(false);
        const updateDrawerSelectionData = ref(false);

        const updateDrawerSelection = (toggle) => {
            updateDrawerSelectionData.value = toggle;
        };

        return {
            drawer,
            updateDrawerSelection,
            updateDrawerSelectionData,
        };
    },
};
</script>

<style>
.dashboard-container {
    background-color: var(--background);
}

@media (max-width: 768px) {
    .admin-sidebar {
        display: none;
    }
}

@media (min-width: 769px) {
    .admin-sidebar {
        display: block;
    }
}
</style>
