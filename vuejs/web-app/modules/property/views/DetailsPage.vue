<template>
    <BaseLayout>
        <template #content>
            <BannerComponent
                :propertyDetails="propertyDetails"
                style="margin-top: 5.5rem"
            />
            <div
                class="container mx-auto row"
                :class="$q.screen.lt.md ? 'w-full p-4' : 'w-3/4'"
            >
                <div
                    class="col-12 row justify-between gap-6"
                    data-aos="fade-right"
                >
                    <div class="col-12 row">
                        <InfoComponent
                            :propertyDetails="propertyDetails"
                            :propertyRoomDetails="propertyRoomDetails"
                            :contactNumber="contactNumber"
                            :whatsAppEnquiries="whatsAppEnquiries"
                            :sliders="sliderImageNumber"
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

import ShortDescriptionsComponent from '@web/components/property/details/ShortDescComponent.vue';
import DescriptionsComponent from '@web/components/property/details/DescriptionsComponent.vue';
import BannerComponent from '@web/components/property/details/BannerComponent.vue';
import ListingAgentComponent from '@web/components/property/details/ListingAgentComponent.vue';

export default {
    components: {
        BaseLayout,
        InfoComponent,

        ShortDescriptionsComponent,
        DescriptionsComponent,
        BannerComponent,
        ListingAgentComponent,
    },

    setup() {
        const webProperty = usePropertyWebStore();
        const propertyDetails = ref({});
        const sliderImageNumber = ref(0);
        const contactNumber = ref([]);
        const propertyRoomDetails = ref([]);
        const propertyDetailsSection = ref([]);
        const whatsAppEnquiries = ref('');

        const fetchPropertyDetails = async () => {
            const response = await webProperty.fetchPropertyDetails();
            propertyDetails.value = response;
            sliderImageNumber.value = response.sliders?.length || 0;

            whatsAppEnquiries.value =
                'I am interested in ' +
                propertyDetails.value.name +
                ' priced at RM' +
                propertyDetails.value.price +
                '. Can you provide more details?';

            return response;
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
        });

        return {
            propertyDetails,
            fetchPropertyDetails,

            contactNumber,
            propertyRoomDetails,
            propertyDetailsSection,
            whatsAppEnquiries,
            sliderImageNumber,
        };
    },
};
</script>
