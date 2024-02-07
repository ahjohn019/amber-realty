<template>
    <BaseLayout>
        <template #content>
            <BannerComponent
                v-if="propertyDetails.banner"
                :propertyDetails="propertyDetails"
                style="margin-top: 5.5rem"
            />
            <div
                class="container mx-auto row"
                style="margin-top: 1.5rem; width: 75%"
            >
                <div
                    class="col-12 row justify-between gap-6"
                    data-aos="fade-right"
                >
                    <div class="col-12 row">
                        <div
                            class="col-12"
                            :class="
                                $q.screen.lt.md ? 'text-center' : 'text-right'
                            "
                        >
                            <q-btn
                                label="View More"
                                icon="photo_camera"
                                color="teal"
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

                        <InfoComponent
                            :propertyDetailsData="propertyDetails"
                            :propertyRoomDetails="propertyRoomDetails"
                            :contactNumber="contactNumber"
                            :whatsAppEnquiries="whatsAppEnquiries"
                        />
                    </div>
                    <ShortDescriptionsComponent
                        :propertyDetails="propertyDetails"
                    />

                    <DescriptionsComponent :propertyDetails="propertyDetails" />

                    <ListingAgentComponent
                        :whatsAppEnquiries="whatsAppEnquiries"
                    />
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import { usePropertyWebStore } from '@store_web/property/index.js';
import { ref, onMounted } from 'vue';

import InfoComponent from '@web/components/property/details/InfoComponent.vue';
import SliderComponent from '@web/components/property/details/SliderComponent.vue';
import ShortDescriptionsComponent from '@web/components/property/details/ShortDescComponent.vue';
import DescriptionsComponent from '@web/components/property/details/DescriptionsComponent.vue';
import BannerComponent from '@web/components/property/details/BannerComponent.vue';
import ListingAgentComponent from '@web/components/property/details/ListingAgentComponent.vue';

export default {
    components: {
        BaseLayout,
        InfoComponent,
        SliderComponent,
        ShortDescriptionsComponent,
        DescriptionsComponent,
        BannerComponent,
        ListingAgentComponent,
    },

    setup() {
        const sliderOptions = ref({});
        const webProperty = usePropertyWebStore();
        const propertyDetails = ref({});
        const sliderImageNumber = ref(0);
        const contactNumber = ref([]);
        const propertyRoomDetails = ref([]);
        const propertyDetailsSection = ref([]);
        const whatsAppEnquiries = ref('');
        const sliderModal = ref(false);
        const sliderDisplayDuration = 1500;

        const fetchPropertyDetails = async () => {
            const response = await webProperty.fetchPropertyDetails();
            propertyDetails.value = response;
            sliderImageNumber.value = response.sliders?.length || 0;

            sliderListOptions(sliderImageNumber.value);

            whatsAppEnquiries.value =
                'I am interested in ' +
                propertyDetails.value.name +
                ' priced at RM' +
                propertyDetails.value.price +
                '. Can you provide more details?';

            return response;
        };

        const selectSliderModal = () => {
            sliderModal.value = true;

            setTimeout(() => {
                sliderListOptions();
            }, sliderDisplayDuration);
        };

        const sliderListOptions = async () => {
            sliderOptions.value = {
                type: 'loop',
                perPage: 1,
                gap: '1rem',
                height: 0,
            };
        };

        contactNumber.value = [
            { name: 'Agent Ng', contact: '60192137731' },
            { name: 'Agent Doo', contact: '60123729668' },
            { name: 'Agent Teng', contact: '60193560561' },
        ];

        propertyRoomDetails.value = [
            { name: 'Beds', icon: 'bed', value: 'bedroom' },
            { name: 'Bath', icon: 'bathtub', value: 'bathroom' },
            { name: 'Car Park', icon: 'directions_car', value: 'car_park' },
            { name: 'sqft', icon: 'square_foot', value: 'square_feet' },
            { name: '', icon: 'apartment', value: 'tenure' },
        ];

        propertyDetailsSection.value = [
            { name: 'Tenure', label: '', front_label: '', value: 'tenure' },
            { name: 'Price', label: '', front_label: 'RM', value: 'price' },
        ];

        onMounted(() => {
            fetchPropertyDetails();
            setTimeout(() => {
                sliderListOptions();
            }, sliderDisplayDuration);
        });

        return {
            sliderOptions,
            propertyDetails,
            fetchPropertyDetails,
            sliderListOptions,
            contactNumber,
            propertyRoomDetails,
            propertyDetailsSection,
            whatsAppEnquiries,
            sliderModal,
            selectSliderModal,
        };
    },
};
</script>
