<template>
    <div class="wrapper row gap-8 overflow-hidden">
        <div class="col-12 m-auto">
            <Splide
                aria-labelledby="thumbnail-example-heading"
                :options="mainOptions"
                ref="main"
                @splide:moved="handleSlideArrows"
            >
                <SplideSlide
                    v-for="(slide, slideKey) in propertyDetails.sliders"
                    :key="slideKey"
                >
                    <q-img
                        :src="slide.image.url"
                        fit="contain"
                        class="h-full"
                        :style="
                            slideKey === currentSlidePage
                                ? `transform: scale(${sliderZoomScale})`
                                : ''
                        "
                    />
                </SplideSlide>
            </Splide>
            <div
                class="flex flex-col gap-1"
                :class="$q.screen.lt.md ? 'hidden' : ''"
            >
                <div class="ml-auto mr-2">
                    <q-btn
                        rounded
                        color="transparent"
                        icon="add"
                        text-color="black"
                        @click="sliderZoomIn"
                    />
                </div>
                <div class="ml-auto mr-2">
                    <q-btn
                        rounded
                        color="transparent"
                        icon="remove"
                        text-color="black"
                        @click="sliderZoomOut"
                    />
                </div>
            </div>
        </div>

        <div class="col-12 row justify-center">
            <div class="col col-auto">
                <Splide
                    aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
                    :options="thumbsOptions"
                    ref="thumbs"
                >
                    <SplideSlide
                        v-for="(slide, slideKey) in propertyDetails.sliders"
                        :key="slideKey"
                    >
                        <q-img
                            :src="slide.image.url"
                            fit="contain"
                            class="h-full"
                        />
                    </SplideSlide>
                </Splide>
            </div>
            <div class="col col-auto text-lg font-bold">
                {{ currentSlidePage + 1 }} /
                {{ propertyDetails.sliders?.length }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'ThumbnailsExample',

    props: ['propertyDetails', 'sliderOptions', 'thumbnailOptions'],

    components: {
        Splide,
        SplideSlide,
    },

    setup() {
        const main = ref<InstanceType<typeof Splide>>();
        const thumbs = ref<InstanceType<typeof Splide>>();

        const currentSlidePage = ref(0);
        const sliderZoomScale = ref(1);

        const mainOptions: Options = {
            type: 'slide',
            rewind: true,
            perPage: 1,
            perMove: 1,
            gap: '2rem',
            pagination: false,
            fixedHeight: 450,
            cover: true,
            breakpoints: {
                640: {
                    fixedHeight: 300,
                },
            },
        };

        const thumbsOptions: Options = {
            type: 'slide',
            rewind: true,
            gap: '1rem',
            pagination: false,
            fixedWidth: 110,
            fixedHeight: 80,
            cover: true,
            focus: 'center',
            isNavigation: true,
            updateOnMove: true,
        };

        const handleSlideArrows = (splide, currentIndex) => {
            currentSlidePage.value = currentIndex;
            sliderZoomScale.value = 1;
        };

        const sliderZoomIn = () => {
            if (sliderZoomScale.value < 2) {
                sliderZoomScale.value += 0.2;
            }
        };

        const sliderZoomOut = () => {
            if (sliderZoomScale.value > 1) {
                sliderZoomScale.value -= 0.2;
            }
        };

        onMounted(() => {
            const thumbsSplide = thumbs.value?.splide;

            if (thumbsSplide) {
                main.value?.sync(thumbsSplide);
            }
        });

        return {
            main,
            thumbs,
            mainOptions,
            thumbsOptions,
            handleSlideArrows,
            currentSlidePage,
            sliderZoomIn,
            sliderZoomOut,
            sliderZoomScale,
        };
    },
});
</script>
