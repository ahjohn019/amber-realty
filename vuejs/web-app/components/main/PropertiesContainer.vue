<template>
    <div class="bg-primary">
        <div
            class="row container mx-auto gap-10"
            :class="$q.screen.lt.md ? 'py-12 px-4' : 'py-24 px-8'"
        >
            <div class="col-12 px-2 row items-center gap-2 md:gap-0">
                <div
                    class="col-12 col-md-6 text-3xl font-bold properties-content text-white"
                >
                    Explore Our Latest Properties
                </div>
                <div
                    class="col-12 col-md-6 text-right font-bold properties-content text-white"
                >
                    <router-link :to="{ name: 'property.list' }"
                        >See All Property</router-link
                    >
                </div>
            </div>
            <LatestComponent />
        </div>
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
