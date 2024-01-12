<template>
    <BasePage>
        <template #content>
            <div class="dashboard-container-page m-4 px-4">
                <router-view></router-view>
            </div>
        </template>
    </BasePage>
</template>

<script>
import BasePage from '@admin/modules/base/views/BasePage.vue';

export default {
    components: {
        BasePage,
    },
};
</script>

<style>
.add-posts {
    font-weight: bold;
    border-radius: 6px;
}
</style>
