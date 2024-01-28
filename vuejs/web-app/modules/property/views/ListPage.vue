<template>
    <BaseLayout>
        <template #content>
            <div class="bg-primary" data-aos="fade-up">
                <div
                    class="container mx-auto text-white h-[45vh] flex justify-center items-center"
                >
                    <div class="text-5xl text-center">Property List</div>
                </div>
            </div>
            <div
                class="container mx-auto py-8 px-4 md:px-0"
                data-aos="fade-left"
            >
                <LatestComponent />
            </div>
            <FeaturedComponent />
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import LatestComponent from '@web/components/property/LatestComponent.vue';
import FeaturedComponent from '@web/components/property/FeaturedComponent.vue';

export default {
    components: {
        BaseLayout,
        LatestComponent,
        FeaturedComponent,
    },
};
</script>
