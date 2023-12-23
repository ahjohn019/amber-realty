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
