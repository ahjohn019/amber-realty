<script setup>
import { GoogleMap, Marker, InfoWindow, CustomControl } from 'vue3-google-map';
import { ref, reactive } from 'vue';

const mapRef = ref(null);
const activeMarker = reactive({
    latLng: null,
});
const props = defineProps(['propertyDetails', 'nearbyLocationList']);

const nearbyGeolocationPosition = ref({});
const mainGeolocationPosition = ref({});
const activeButton = ref(null);
const nearbyNavigationList = ref({});
const nearbyOpacity = ref(1);

const mapStyle = ref([]);
mapStyle.value = [
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'transit',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
];

const centerMapOnMarker = (marker) => {
    const onCenter = { lat: marker.latLng.lat(), lng: marker.latLng.lng() };
    mapRef.value.map.panTo(onCenter);
    activeMarker.latLng = marker.latLng;
};

const closeInfoWindow = () => {
    activeMarker.latLng = null;
};

const fetchWebLocation = async () => {
    const nearbyLocation = props.nearbyLocationList;

    console.log('nearby location', nearbyLocation);

    mainGeolocationPosition.value = nearbyLocation.find(
        (item) => parseInt(item.current) === 1
    );
    nearbyGeolocationPosition.value = nearbyLocation.filter(
        (item) => parseInt(item.nearby) === 1
    );

    console.log('Nearby Geolocation', nearbyGeolocationPosition.value);
};

const activeSelection = (event, activeButton) => {
    const activeSelectionClass =
        'text-red font-bold border-b-2 border-red-500'.split(' ');

    if (activeButton) {
        activeButton.classList.remove(...activeSelectionClass);
    }

    event.target.classList.add(...activeSelectionClass);
    return event.target;
};

const fetchNearbySelection = async (event) => {
    const nearbyLocation = props.nearbyLocationList;
    const fetchNearbySelectionAttribute = event.target.getAttribute('nearby');

    nearbyOpacity.value = 1;
    activeButton.value = await activeSelection(event, activeButton.value);

    nearbyGeolocationPosition.value = nearbyLocation.filter(
        (item) => parseInt(item.nearby) === 1
    );

    if (fetchNearbySelectionAttribute !== 'all') {
        nearbyGeolocationPosition.value =
            nearbyGeolocationPosition.value.filter((item) =>
                JSON.parse(item.nearby_types).includes(
                    fetchNearbySelectionAttribute
                )
            );
    }
};

const fetchNearbyNavigationList = () => {
    nearbyNavigationList.value = [
        { label: 'all', title: 'All' },
        { label: 'restaurant', title: 'Restaurant' },
        { label: 'school', title: 'Schools' },
        { label: 'gym', title: 'Gym' },
        { label: 'hospital', title: 'Hospital' },
        { label: 'cafe', title: 'Cafe' },
    ];
};

const clearNearbyIcons = () => {
    nearbyOpacity.value = nearbyOpacity.value ? 0 : 1;
};

fetchWebLocation();
fetchNearbyNavigationList();
</script>

<template>
    <div
        class="col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"
    >
        Our Location
    </div>
    <div class="w-full flex gap-4 font-bold text-lg">
        <div v-for="(navigation, key) in nearbyNavigationList" :key="key">
            <button @click="fetchNearbySelection" :nearby="navigation.label">
                {{ navigation.title }}
            </button>
        </div>
    </div>
    <GoogleMap
        :api-key="googleMapKey"
        style="width: 100%; height: 500px"
        :center="{
            lat: parseFloat(mainGeolocationPosition.latitude),
            lng: parseFloat(mainGeolocationPosition.longitude),
        }"
        :zoom="15"
        ref="mapRef"
        :styles="mapStyle"
    >
        <Marker
            :options="{
                position: {
                    lat: parseFloat(mainGeolocationPosition.latitude),
                    lng: parseFloat(mainGeolocationPosition.longitude),
                },
            }"
            @click="centerMapOnMarker"
        >
            <InfoWindow
                v-if="
                    activeMarker.latLng &&
                    activeMarker.latLng.lat() ===
                        parseFloat(mainGeolocationPosition.latitude)
                "
                @closeclick="closeInfoWindow"
            >
                <div>{{ mainGeolocationPosition.formatted_address }}</div>
            </InfoWindow>
        </Marker>

        <div
            v-for="(nearbyPosition, key) in nearbyGeolocationPosition"
            :key="key"
        >
            <Marker
                :options="{
                    position: {
                        lat: parseFloat(nearbyPosition.latitude),
                        lng: parseFloat(nearbyPosition.longitude),
                    },
                    icon: {
                        url: `../../images/` + nearbyPosition.icon_url + `.png`,
                        scaledSize: { width: 25, height: 25 },
                    },
                    opacity: nearbyOpacity,
                }"
                @click="centerMapOnMarker"
            >
                <InfoWindow
                    v-if="
                        activeMarker.latLng &&
                        activeMarker.latLng.lat() ===
                            parseFloat(nearbyPosition.latitude)
                    "
                    @closeclick="closeInfoWindow"
                >
                    <div>
                        <p class="font-bold border-b pb-4">
                            {{ nearbyPosition?.display_name }}
                        </p>
                        {{ nearbyPosition?.formatted_address }}
                    </div>
                </InfoWindow>
            </Marker>
        </div>
        <CustomControl position="BOTTOM_CENTER">
            <button class="clear-nearby-button">
                <q-icon
                    :name="
                        nearbyOpacity == 1 ? 'highlight_off' : 'check_circle'
                    "
                    :color="nearbyOpacity == 1 ? 'red' : 'green'"
                    size="32px"
                    @click="clearNearbyIcons()"
                />
            </button>
        </CustomControl>
    </GoogleMap>
</template>

<style scoped>
.clear-nearby-button {
    box-sizing: border-box;
    background: white;
    height: 40px;
    width: 40px;
    border-radius: 2px;
    border: 0px;
    margin: 10px;
    padding: 0px;
    font-size: 1.25rem;
    text-transform: none;
    appearance: none;
    cursor: pointer;
    user-select: none;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
    overflow: hidden;
}
</style>
