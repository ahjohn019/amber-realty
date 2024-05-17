<script setup lang="ts">
import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import { onMounted, ref } from 'vue';

const props = defineProps(['propertyDetails']);

const main = ref<InstanceType<typeof Splide>>();
const thumbs = ref<InstanceType<typeof Splide>>();

const currentSlidePage = ref(0);
const sliderZoomScale = ref(1);

const mainOptions: Options = {
    type: 'slide',
    rewind: true,
    perPage: 1,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    height: 450,
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
    gap: '0.5rem',
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 80,
    cover: true,
    focus: 'center',
    isNavigation: true,
    updateOnMove: true,
    arrows: false,
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
</script>

<template>
    <div class="wrapper row gap-8 overflow-hidden">
        <div class="col-12 m-auto">
            <Splide
                :options="mainOptions"
                ref="main"
                @splide:moved="handleSlideArrows"
            >
                <SplideSlide
                    v-for="(slide, slideKey) in props.propertyDetails.sliders"
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

        <div class="col-12 row justify-center border-t pt-6">
            <div class="col-12">
                <Splide :options="thumbsOptions" ref="thumbs">
                    <SplideSlide
                        v-for="(slide, slideKey) in props.propertyDetails
                            .sliders"
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
            <div class="col-12 text-lg font-semibold flex row">
                <div class="col-6 col-sm-4">
                    <q-icon name="collections" size="32px" />
                    {{ props.propertyDetails.sliders?.length }}
                    <span :class="$q.screen.lt.sm ? 'hidden' : ''">Photos</span>
                </div>
                <div
                    class="col-6 col-sm-4 flex"
                    :class="$q.screen.lt.sm ? 'justify-end' : 'justify-center'"
                >
                    {{ currentSlidePage + 1 }} /
                    {{ props.propertyDetails.sliders?.length }}
                </div>
            </div>
        </div>
    </div>
</template>
