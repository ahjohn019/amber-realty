<template>
    <BaseLayout>
        <template #content>
            <div class="bg-primary">
                <div
                    class="container mx-auto text-white banner-title-container flex justify-center items-center"
                >
                    <div class="text-5xl text-center">Property List</div>
                </div>
            </div>
            <div class="container mx-auto py-8 px-4 md:px-0">
                <ListComponent />
            </div>
            <FeaturedComponent />
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import ListComponent from '@web/components/property/ListComponent.vue';
import FeaturedComponent from '@web/components/property/FeaturedComponent.vue';

export default {
    components: {
        BaseLayout,
        ListComponent,
        FeaturedComponent,
    },
};
</script>

<style>
.banner-title-container {
    height: 45vh;
}
</style>
