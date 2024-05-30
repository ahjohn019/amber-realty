<script setup>
import { ref } from 'vue';

const props = defineProps(['highlights']);
const highlightOptions = ref({});
const propertyIconList = ref([]);

const numberFormat = (number, symbol = 'RM') => {
    const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);

    return `${symbol}${formattedNumber}`;
};

highlightOptions.value = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    breakpoints: {
        768: {
            perPage: 1,
            arrows: false,
        },
    },
    autoplay: true,
};

propertyIconList.value = [
    { icon: 'bed', title: 'bedroom' },
    { icon: 'bathtub', title: 'bathroom' },
    { icon: 'directions_car', title: 'car_park' },
];
</script>

<template>
    <div
        class="container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"
    >
        <div
            class="col-12 text-xl md:text-4xl font-bold pb-8"
            :class="$q.screen.lt.md ? 'text-center' : ''"
        >
            Highlight
        </div>
        <div>
            <Splide :options="highlightOptions" aria-label="My Favorite Images">
                <SplideSlide
                    v-for="(highlight, highlightKey) in props.highlights"
                    :key="highlightKey"
                >
                    <q-card class="h-[550px] card-container">
                        <router-link
                            :to="{
                                name: 'property.details',
                                params: { id: highlight.id },
                            }"
                        >
                            <img
                                :src="
                                    highlight.property.banner
                                        ? highlight.property.banner.image.url
                                        : 'https://cdn.quasar.dev/img/mountains.jpg'
                                "
                                class="h-[325px] w-full object-cover"
                            />
                        </router-link>

                        <q-card-section>
                            <div class="flex justify-between items-center">
                                <div
                                    class="text-sm bg-primary text-center px-4 py-2 font-bold rounded text-white w-[90px] capitalize featured-property__title"
                                >
                                    {{ highlight.property.listing_type }}
                                </div>
                                <div
                                    class="row gap-2"
                                    v-if="highlight.property.property_detail"
                                >
                                    <div
                                        class="col col-auto text-center"
                                        v-for="(
                                            propertyIcon, key
                                        ) in propertyIconList"
                                        :key="key"
                                    >
                                        <q-icon
                                            :name="propertyIcon.icon"
                                            size="24px"
                                            class="pr-1"
                                        />
                                        <span class="align-middle text-sm">
                                            {{
                                                highlight.property
                                                    .property_detail[
                                                    propertyIcon.title
                                                ]
                                            }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </q-card-section>

                        <q-separator color="grey-4" />

                        <q-card-section>
                            <div class="text-h6">
                                {{ highlight.property.name }}
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <div class="text-subtitle2">
                                {{
                                    numberFormat(
                                        highlight.property.price,
                                        'RM '
                                    )
                                }}
                            </div>
                        </q-card-section>
                    </q-card>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<style>
.featured-property__descriptions,
.featured-property__title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
}

.splide__slide.is-prev .card-container,
.splide__slide.is-next .card-container {
    transition: transform 50ms;
    transform: scale(0.75);
    transform-origin: center center;
}

.splide__slide.is-active .card-container {
    transform: scale(0.95);
}

.splide__progress__bar {
    height: 3px;
    background: black;
}

.splide__pagination__page {
    background: black;
}

.splide__pagination__page.is-active {
    background: red;
}
</style>
