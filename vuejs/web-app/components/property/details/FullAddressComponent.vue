<template>
    <div class="col-12 row gap-4">
        <div
            class="col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"
        >
            About the location
        </div>
        <div class="col-12 flex gap-4 text-xl">
            <button @click="activeSelection" value="restaurant" query="place">
                Location
            </button>
            <button
                @click="activeSelection"
                value="trainstation"
                query="search"
            >
                Commute
            </button>
            <button @click="activeSelection" value="schools" query="search">
                Schools
            </button>
            <button @click="activeSelection" value="restaurant" query="search">
                Food
            </button>
        </div>
        <div class="col-12 google-maps">
            <iframe
                width="600"
                height="450"
                style="border: 0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="fullAddressUrl.data"
            >
                <!-- :src="fullAddressUrl.data" -->
            </iframe>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { usePropertyWebStore } from '@store_web/property/index.js';

export default {
    setup() {
        const activeButton = ref(null);
        const fullAddressUrl = ref('');
        const activeLocationQuery = ref({});
        const webProperty = usePropertyWebStore();

        const activeSelectionClass =
            'text-red font-bold border-b-4 border-red-500'.split(' ');

        const fetchFullAddress = async () => {
            const propertyDetails = await webProperty.fetchPropertyDetails();
            const fetchFullAddress = await webProperty.fetchLocation(
                propertyDetails
            );

            fullAddressUrl.value = fetchFullAddress;
        };

        const activeSelection = async (event) => {
            const fetchLocationQuery = event.target.getAttribute('query');
            const propertyDetails = await webProperty.fetchPropertyDetails();

            if (activeButton.value) {
                activeButton.value.classList.remove(...activeSelectionClass);
            }

            event.target.classList.add(...activeSelectionClass);
            activeButton.value = event.target;

            activeLocationQuery.value.full_address =
                propertyDetails.full_address;
            activeLocationQuery.value.type = event.target.value;
            activeLocationQuery.value.query = fetchLocationQuery;

            const result = await webProperty.fetchActiveSelectionQuery(
                activeLocationQuery.value
            );

            fullAddressUrl.value = result;

            console.log(result);
        };
        onMounted(() => {
            fetchFullAddress();
        });

        return {
            activeSelection,
            activeButton,
            fullAddressUrl,
            fetchFullAddress,
        };
    },
};
</script>

<style>
.google-maps {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
}
.google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}
</style>
