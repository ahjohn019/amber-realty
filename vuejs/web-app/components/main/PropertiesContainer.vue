<template>
    <div class="bg-primary">
        <div
            class="row container mx-auto gap-10 py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"
        >
            <div
                class="col-12 px-2 row items-center gap-2"
                :class="$q.screen.lt.sm ? 'justify-center' : 'justify-between'"
            >
                <div
                    class="col col-auto text-xl md:text-4xl font-bold text-white"
                    :class="$q.screen.lt.md ? 'text-center' : ''"
                >
                    Explore Our Latest Properties
                </div>
                <div
                    class="col col-auto font-bold text-white text-sm"
                    style="text-wrap: nowrap"
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
