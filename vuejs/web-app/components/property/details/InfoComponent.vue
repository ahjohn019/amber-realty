<template>
    <div class="col-12 row justify-between items-center gap-4">
        <div
            class="col-12 row gap-4 items-center text-xl md:text-4xl break-words"
        >
            {{ propertyDetails.name }}
        </div>

        <div
            class="col-12"
            v-if="propertyDetails.details && propertyDetails.details_toggle"
        >
            <div class="text-sm">
                <q-chip
                    color="teal"
                    text-color="white"
                    :icon="room.icon"
                    v-for="(room, key) in propertyRoomDetails"
                    :key="key"
                >
                    {{ propertyDetails.details[room.value] }}
                    {{ room.name }}
                </q-chip>
            </div>
        </div>
        <div class="col-12">
            <div
                class="bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"
            >
                For
                {{ propertyDetails.listing_type }}
            </div>
        </div>
        <div class="col-12">
            <span class="text-xl md:text-4xl font-bold">
                {{ numberFormat(propertyDetails.price, 'RM ') }}</span
            >
        </div>
        <div class="col-12">
            <div v-if="sliders > 0">
                <q-btn
                    label="View More"
                    icon="photo_camera"
                    color="teal"
                    :class="sliderButton"
                    @click="selectSliderModal()"
                />
                <q-dialog v-model="sliderModal" :maximized="maximizedToggle">
                    <q-card class="py-6 overflow-hidden">
                        <q-bar class="justify-end bg-white">
                            <q-btn flat icon="close" v-close-popup size="18px">
                                <q-tooltip class="bg-white text-primary"
                                    >Close</q-tooltip
                                >
                            </q-btn>
                        </q-bar>
                        <q-card-section
                            class="h-full lg:w-[990px] grid mx-auto"
                        >
                            <SliderComponent
                                :propertyDetails="propertyDetails"
                                :sliderOptions="sliderOptions"
                                :thumbnailOptions="thumbnailOptions"
                            />
                        </q-card-section>
                    </q-card>
                </q-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SliderComponent from '@web/components/property/details/SliderComponent.vue';

export default {
    components: {
        SliderComponent,
    },

    props: [
        'propertyDetails',
        'propertyRoomDetails',
        'whatsAppEnquiries',
        'sliders',
    ],

    setup() {
        const sliderModal = ref(false);
        const sliderOptions = ref({});
        const sliderDisplayDuration = 1200;
        const sliderButton = ref('');
        const maximizedToggle = ref(true);
        const thumbnailOptions = ref({});

        sliderButton.value = 'hidden';

        const selectSliderModal = () => {
            sliderModal.value = true;

            setTimeout(() => {
                sliderListOptions();
                sliderButton.value = '';
            }, sliderDisplayDuration);
        };

        const sliderListOptions = () => {
            sliderOptions.value = {
                type: 'loop',
                perPage: 1,
                gap: '1rem',
                height: 0,
            };
        };

        const thumbnailListOptions = () => {
            thumbnailOptions.value = {
                fixedWidth: 100,
                fixedHeight: 60,
                gap: 10,
                rewind: true,
                pagination: false,
            };
        };

        const numberFormat = (number, symbol = 'RM') => {
            const formattedNumber = number
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return `${symbol}${formattedNumber}`;
        };

        onMounted(() => {
            setTimeout(() => {
                sliderListOptions();
                sliderButton.value = '';
            }, sliderDisplayDuration);
        });

        return {
            selectSliderModal,
            sliderListOptions,
            sliderModal,
            sliderOptions,
            sliderButton,
            numberFormat,
            maximizedToggle,
            thumbnailListOptions,
            thumbnailOptions,
        };
    },
};
</script>
