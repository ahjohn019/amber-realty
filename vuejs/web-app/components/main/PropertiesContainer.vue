<template>
    <div class="row container mx-auto py-12 px-8 gap-10">
        <div class="col-12 px-2 row items-center gap-2 md:gap-0">
            <div class="col-12 col-md-6 text-3xl font-bold properties-content">
                Explore Our Latest Properties
            </div>
            <div
                class="col-12 col-md-6 text-right font-bold properties-content"
            >
                <router-link to="#">See All Property</router-link>
            </div>
        </div>
        <LatestComponent />
    </div>
</template>

<script>
import LatestComponent from '@web/components/property/LatestComponent.vue';

export default {
    components: {
        LatestComponent,
    },
};
</script>

<style>
@media (max-width: 768px) {
    .properties-content {
        text-align: center;
    }
}
</style>
