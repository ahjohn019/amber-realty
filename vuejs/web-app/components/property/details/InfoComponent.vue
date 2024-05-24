<script setup>
import { ref, onMounted } from 'vue';
import SliderComponent from '@web/components/property/details/SliderComponent.vue';

const infoProps = defineProps([
    'propertyDetails',
    'propertyRoomDetails',
    'whatsAppEnquiries',
    'sliders',
    'detailViews',
]);

const sliderModal = ref(false);
const sliderDisplayDuration = 1200;
const sliderButton = ref('');
const maximizedToggle = ref(true);

sliderButton.value = 'hidden';

const selectSliderModal = () => {
    sliderModal.value = true;

    setTimeout(() => {
        sliderButton.value = '';
    }, sliderDisplayDuration);
};

const numberFormat = (number, symbol = 'RM') => {
    const formattedNumber = number
        ?.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${symbol}${formattedNumber}`;
};

onMounted(() => {
    setTimeout(() => {
        sliderButton.value = '';
    }, sliderDisplayDuration);
});
</script>

<template>
    <div class="col-12 row justify-between items-center gap-4">
        <div
            class="col-6 row gap-4 items-center text-xl md:text-4xl break-words"
        >
            {{ infoProps.propertyDetails.name }}
        </div>

        <div class="col-4 row gap-1 items-center text-sm justify-end">
            <q-icon name="visibility" />
            {{ infoProps.detailViews.current_total }}
        </div>

        <div
            class="col-12"
            v-if="
                infoProps.propertyDetails.details &&
                infoProps.propertyDetails.details_toggle
            "
        >
            <div class="text-sm">
                <q-chip
                    color="teal"
                    text-color="white"
                    :icon="room.icon"
                    v-for="(room, key) in infoProps.propertyRoomDetails"
                    :key="key"
                >
                    {{ infoProps.propertyDetails.details[room.value] }}
                    {{ room.name }}
                </q-chip>
            </div>
        </div>
        <div class="col-12">
            <div
                class="bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"
            >
                For
                {{ infoProps.propertyDetails.listing_type }}
            </div>
        </div>
        <div class="col-12">
            <span class="text-xl md:text-4xl font-bold">
                {{ numberFormat(infoProps.propertyDetails.price, 'RM ') }}</span
            >
        </div>
        <div class="col-12">
            <div v-if="infoProps.sliders > 0">
                <q-btn
                    label="View More"
                    icon="photo_camera"
                    color="teal"
                    :class="sliderButton"
                    @click="selectSliderModal()"
                />
                <q-dialog v-model="sliderModal" :maximized="maximizedToggle">
                    <q-card class="py-6 md:px-4 overflow-hidden">
                        <q-bar class="justify-end bg-white">
                            <q-btn flat icon="close" v-close-popup size="18px">
                                <q-tooltip class="bg-white text-primary"
                                    >Close</q-tooltip
                                >
                            </q-btn>
                        </q-bar>
                        <q-card-section class="h-full grid mx-auto">
                            <SliderComponent
                                :propertyDetails="infoProps.propertyDetails"
                            />
                        </q-card-section>
                    </q-card>
                </q-dialog>
            </div>
        </div>
    </div>
</template>
