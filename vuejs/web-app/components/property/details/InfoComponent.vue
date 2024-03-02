<template>
    <div class="col-12 row justify-between items-center q-gutter-y-md">
        <div class="col-12 pl-2 row justify-between items-center q-gutter-y-md">
            <div class="col col-auto text-4xl break-words">
                {{ propertyDetails.name }}
            </div>
            <div class="col col-auto text-right" v-if="sliders > 0">
                <q-btn
                    label="View More"
                    icon="photo_camera"
                    color="teal"
                    :class="sliderButton"
                    @click="selectSliderModal()"
                />
                <q-dialog v-model="sliderModal">
                    <q-card style="width: 700px; max-width: 100vw">
                        <q-card-section>
                            <SliderComponent
                                :propertyDetails="propertyDetails"
                                :sliderOptions="sliderOptions"
                            />
                        </q-card-section>
                    </q-card>
                </q-dialog>
            </div>
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
        <div class="col-12 pl-2">
            <div
                class="bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"
            >
                For
                {{ propertyDetails.listing_type }}
            </div>
        </div>
        <div class="col-12 pl-2">
            <span class="text-xl font-bold">
                {{ numberFormat(propertyDetails.price, 'RM ') }}</span
            >
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
        'contactNumber',
        'whatsAppEnquiries',
        'sliders',
    ],

    setup() {
        const sliderModal = ref(false);
        const sliderOptions = ref({});
        const sliderDisplayDuration = 1200;
        const sliderButton = ref('');

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
        };
    },
};
</script>
