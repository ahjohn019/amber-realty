<template>
    <div class="col-12 row justify-between">
        <div class="col-12" v-if="propertyDetails.sliders">
            <Splide :options="sliderOptions" aria-label="My Favorite Images">
                <SplideSlide
                    v-for="(slider, sliderKey) in propertyDetails.sliders"
                    :key="sliderKey"
                >
                    <q-img
                        :src="slider.image.url"
                        class="h-full"
                        fit="contain"
                    />
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propertyDetails', 'sliderOptions'],
};
</script>
