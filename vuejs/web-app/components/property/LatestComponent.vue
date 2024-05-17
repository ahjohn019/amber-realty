<script setup>
import { usePropertyWebStore } from '@store_web/property/index.js';
import { onMounted, ref } from 'vue';

const webProperty = usePropertyWebStore();
const payload = {
    limit: 4,
};

const latestProperty = ref([]);

const fetchLatestProperty = async () => {
    const response = await webProperty.fetchLatestProperty(payload);
    latestProperty.value = response;

    return response;
};

const numberFormat = (number, symbol = 'RM') => {
    const formattedNumber = number
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${symbol}${formattedNumber}`;
};

onMounted(() => {
    fetchLatestProperty();
});
</script>

<template>
    <div class="col-12 row">
        <div
            class="col-12 row !flex-nowrap overflow-scroll md:overflow-auto overflow-y-hidden"
            v-if="latestProperty.length > 0"
        >
            <div
                class="col-10 col-sm-6 col-md-3 p-2"
                v-for="(latest, key) in latestProperty"
                :key="key"
            >
                <router-link :to="'property/details/' + latest.id">
                    <q-card class="my-card h-[350px] xl:h-[375px]">
                        <div class="relative">
                            <q-img
                                :src="
                                    latest.banner
                                        ? latest.banner.image.url
                                        : 'https://cdn.quasar.dev/img/parallax2.jpg'
                                "
                                :ratio="16 / 9"
                                fit="contain"
                            />
                            <div
                                class="absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded capitalize"
                            >
                                For {{ latest.listing_type }}
                            </div>
                        </div>
                        <q-card-section class="row gap-2">
                            <div
                                class="col-12 text-lg flex items-center justify-between"
                            >
                                <div>
                                    {{ numberFormat(latest.price, 'RM ') }}
                                </div>
                            </div>
                            <div
                                class="col-12 text-xl font-bold latest-property__name"
                            >
                                {{ latest.name }}
                                <q-tooltip max-width="350px">
                                    {{ latest.name }}
                                </q-tooltip>
                            </div>
                            <div
                                class="col-12 text-subtitle2 latest-property__descriptions"
                            >
                                {{ latest.short_description }}
                                <q-tooltip max-width="350px">
                                    {{ latest.short_description }}
                                </q-tooltip>
                            </div>
                        </q-card-section>
                        <q-card-section
                            class="q-pt-none"
                            :class="$q.screen.lt.md ? '' : 'h-[75px]'"
                        >
                            <div
                                class="flex gap-4"
                                v-if="latest.details_toggle"
                            >
                                <div>
                                    <span class="align-middle text-lg">
                                        {{ latest.details.bedroom }}
                                    </span>
                                    <q-icon
                                        name="bed"
                                        size="22px"
                                        class="pl-1"
                                    />
                                </div>
                                <div>
                                    <span class="align-middle text-lg">
                                        {{ latest.details.bathroom }}
                                    </span>
                                    <q-icon
                                        name="bathtub"
                                        size="22px"
                                        class="pl-1"
                                    />
                                </div>
                                <div>
                                    <span class="align-middle text-lg">
                                        {{ latest.details.car_park }}
                                    </span>
                                    <q-icon
                                        name="directions_car"
                                        size="22px"
                                        class="pl-1"
                                    />
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </router-link>
            </div>
        </div>
        <div class="col-12" v-else>
            <h5 class="text-center text-white font-bold">
                Latest Property Not Available
            </h5>
        </div>
    </div>
</template>

<style>
.latest-property__name,
.latest-property__descriptions {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>
