<script setup>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import { usePropertyWebStore } from '@store_web/property/index.js';
import { ref, onMounted } from 'vue';

import InfoComponent from '@web/components/property/details/InfoComponent.vue';
import ShortDescriptionsComponent from '@web/components/property/details/ShortDescComponent.vue';
import BannerComponent from '@web/components/property/details/BannerComponent.vue';
import ListingAgentComponent from '@web/components/property/details/ListingAgentComponent.vue';
import ListingAgentMobileComponent from '@web/components/property/details/ListingAgentMobileComponent.vue';
import GoogleMapComponent from '@web/components/property/details/GoogleMapComponent.vue';

import DescriptionsButton from '@web/components/property/details/DescriptionsButton.vue';

const webProperty = usePropertyWebStore();

const propertyDetails = ref({});
const sliderImageNumber = ref(0);
const propertyRoomDetails = ref([]);
const propertyDetailsSection = ref([]);
const whatsAppEnquiries = ref('');
const listingAgentClass = ref('');
const listingAgentContainer = ref('');
const listingAgentMobileContainer = ref('');
const listingAgentClassToggle = ref(false);
const nearbyLocationList = ref([]);
const detailViews = ref([]);

const descriptionButtonPosition = ref('');
descriptionButtonPosition.value = 'bottom-[8%]';

const fetchPropertyDetails = async () => {
    const response = await webProperty.fetchPropertyDetails();

    if (response.nearby_details.length > 0) {
        nearbyLocationList.value = await webProperty.fetchNearbyLocation(
            response.id
        );
    }

    detailViews.value = await webProperty.fetchDetailViews(response.id);

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

const handleDetailsObserver = () => {
    const bannerComponent = document.querySelector('.banner-component');
    const footerComponent = document.querySelector('.footer-container');

    const options = {
        threshold: 0.3,
    };

    const listingAgentClassList = 'fixed w-[290px] xl:w-[350px] top-[12.5%]';

    const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            listingAgentClass.value = '';
            listingAgentContainer.value = '';

            if (!entry.isIntersecting) {
                listingAgentClass.value = listingAgentClassList;
                listingAgentClassToggle.value = true;
            }
        });
    }, options);

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            listingAgentClass.value = '';
            listingAgentContainer.value = 'flex items-end';
            listingAgentMobileContainer.value = 'hidden';

            if (!entry.isIntersecting) {
                listingAgentClass.value = listingAgentClassList;
                listingAgentContainer.value = '';
                listingAgentMobileContainer.value = '';
            }
        });
    }, options);

    bannerObserver.observe(bannerComponent);
    footerObserver.observe(footerComponent);
};

const handleListingAgentClass = () => {
    return listingAgentClassToggle.value ? listingAgentClass.value : '';
};

onMounted(() => {
    fetchPropertyDetails();
    setTimeout(function () {
        const containerHeight =
            document.querySelector('.container').offsetHeight;
        const containerMinimumHeight = 700;
        const deviceScreenMaxSize = 1024;
        if (
            containerHeight > containerMinimumHeight ||
            window.innerWidth < deviceScreenMaxSize
        ) {
            handleDetailsObserver();
        }
    }, 1000);

    handleListingAgentClass();
});
</script>

<template>
    <BaseLayout>
        <template #content="{ descriptionButtonPosition }">
            <BannerComponent
                :propertyDetails="propertyDetails"
                class="banner-component"
            />
            <div
                class="container mx-auto row justify-between gap-10 pt-6"
                :class="$q.screen.lt.lg ? 'p-8' : 'w-4/6'"
            >
                <div
                    class="col-12 col-md-8 row justify-between gap-6"
                    data-aos="fade-right"
                >
                    <InfoComponent
                        :propertyDetails="propertyDetails"
                        :propertyRoomDetails="propertyRoomDetails"
                        :whatsAppEnquiries="whatsAppEnquiries"
                        :sliders="sliderImageNumber"
                        :detailViews="detailViews"
                    />

                    <ShortDescriptionsComponent
                        :propertyDetails="propertyDetails"
                    />

                    <GoogleMapComponent
                        :propertyDetails="propertyDetails"
                        :nearbyLocationList="nearbyLocationList"
                        v-if="nearbyLocationList.length > 0"
                    />
                </div>
                <div
                    class="col"
                    :class="$q.screen.lt.md ? 'hidden' : listingAgentContainer"
                >
                    <ListingAgentComponent
                        :whatsAppEnquiries="whatsAppEnquiries"
                        class="row border rounded-lg px-6 py-10 gap-6"
                        :class="
                            listingAgentClassToggle ? listingAgentClass : ''
                        "
                    />
                </div>
            </div>
            <div
                :class="
                    $q.screen.lt.md ? listingAgentMobileContainer : 'hidden'
                "
            >
                <ListingAgentMobileComponent
                    :whatsAppEnquiries="whatsAppEnquiries"
                />
            </div>

            <div :class="`p-4 pr-2 fixed ${descriptionButtonPosition} right-0`">
                <DescriptionsButton :propertyDetails="propertyDetails" />
            </div>
        </template>
    </BaseLayout>
</template>
