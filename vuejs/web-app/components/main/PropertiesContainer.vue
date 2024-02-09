<template>
    <div class="bg-primary">
        <div
            class="row container mx-auto gap-10"
            :class="$q.screen.lt.sm ? 'py-12 px-4' : 'py-24 px-12'"
        >
            <div
                class="col-12 px-2 row items-center gap-2 md:gap-0"
                :class="$q.screen.lt.sm ? 'justify-center' : 'justify-between'"
            >
                <div
                    class="col col-auto text-3xl font-bold text-white"
                    :class="$q.screen.lt.md ? 'text-center' : ''"
                >
                    Explore Our Latest Properties
                </div>
                <div class="col col-auto font-bold text-white">
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
