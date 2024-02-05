<template>
    <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 85%; margin: auto">
            <q-card>
                <q-tabs
                    v-model="tab"
                    dense
                    class="bg-grey-2 text-grey-7"
                    align="justify"
                >
                    <q-tab name="basic" label="Basic" />
                    <q-tab name="details" label="Details" />
                    <q-tab name="images" label="Images" />
                </q-tabs>

                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="basic">
                        <div class="row q-gutter-y-sm">
                            <div class="col-12 text-h6">Name:</div>
                            <div class="col-12">
                                {{ propertyData.name }}
                            </div>
                            <div class="col-12 text-h6">Description:</div>
                            <div
                                class="col-12"
                                v-html="propertyData.description"
                            ></div>
                            <div class="col-12 text-h6">Short Description:</div>
                            <div class="col-12">
                                {{ propertyData.short_description }}
                            </div>
                            <div class="col-12 text-h6">Price:</div>
                            <div class="col-12">
                                RM {{ propertyData.price }}
                            </div>
                            <div class="col-12 text-h6">State:</div>
                            <div class="col-12">
                                {{ propertyData.state }}
                            </div>
                            <div class="col-12 text-h6">Status:</div>
                            <div class="col-12 capitalize">
                                {{ propertyData.status }}
                            </div>
                            <div class="col-12 text-h6">Type:</div>
                            <div class="col-12 capitalize">
                                {{ propertyData.type }}
                            </div>
                            <div class="col-12 text-h6">Created At:</div>
                            <div class="col-12 capitalize">
                                {{ propertyData.created_at }}
                            </div>
                        </div>
                    </q-tab-panel>
                    <q-tab-panel name="details">
                        <div class="row q-gutter-y-sm">
                            <div class="col-12 text-h6">Bathroom:</div>
                            <div class="col-12">
                                {{ propertyData.bathroom }}
                            </div>
                            <div class="col-12 text-h6">Bedroom:</div>
                            <div class="col-12">
                                {{ propertyData.bathroom }}
                            </div>
                            <div class="col-12 text-h6">Car Park:</div>
                            <div class="col-12">
                                {{ propertyData.car_park }}
                            </div>
                            <div class="col-12 text-h6">Furnishing:</div>
                            <div class="col-12 capitalize">
                                {{ propertyData.furnishing }}
                            </div>
                            <div class="col-12 text-h6">Listing Type:</div>
                            <div class="col-12 capitalize">
                                {{ propertyData.listing_type }}
                            </div>
                            <div class="col-12 text-h6">Square Feet:</div>
                            <div class="col-12">
                                {{ propertyData.square_feet }} sqft
                            </div>
                            <div class="col-12 text-h6">Tenure:</div>
                            <div class="col-12 capitalize">
                                {{ propertyData.tenure }}
                            </div>
                        </div>
                    </q-tab-panel>
                    <q-tab-panel name="images" class="q-gutter-y-md">
                        <div class="row" v-if="propertyData.banner">
                            <div class="col-12 text-2xl">Banner</div>
                            <div class="col-12 row">
                                <div class="col-12">
                                    <q-img
                                        :src="propertyData.banner.image.url"
                                        height="450px"
                                        fit="contain"
                                    >
                                    </q-img>
                                </div>
                                <div class="col-12">
                                    <q-chip color="primary" text-color="white">
                                        {{ propertyData.banner.name }}
                                    </q-chip>
                                    <q-chip color="primary" text-color="white">
                                        {{
                                            Math.round(
                                                propertyData.banner.image.size /
                                                    1000
                                            ) + 'kb'
                                        }}
                                    </q-chip>
                                </div>
                            </div>
                        </div>

                        <div class="row" v-if="propertyData.sliders">
                            <div class="col-12 text-2xl">Sliders</div>
                            <div
                                v-for="(slider, key) in propertyData.sliders"
                                :key="key"
                                class="col-12 row"
                            >
                                <div class="col-12">
                                    <q-img
                                        :src="slider.image.url"
                                        height="250px"
                                        fit="contain"
                                    >
                                    </q-img>
                                </div>
                                <div class="col-12">
                                    <q-chip color="primary" text-color="white">
                                        {{ slider.name }}
                                    </q-chip>
                                    <q-chip color="primary" text-color="white">
                                        {{
                                            Math.round(
                                                slider.image.size / 1000
                                            ) + 'kb'
                                        }}
                                    </q-chip>
                                </div>
                            </div>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { usePropertyAdminStore } from '@store_admin_endpoints/property/index.js';
import { useAdminAuthStore } from '@store_admin/base/auth.js';
import { usePropertyAdminModelStore } from '@store_admin_models/property/index.js';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';

export default {
    setup() {
        const adminStore = useAdminAuthStore();
        const getAuthToken = adminStore.fetchSessionToken();
        const propertyStore = usePropertyAdminStore();
        const propertyModelStore = usePropertyAdminModelStore();
        const propertyData = ref(propertyModelStore.fetchPropertyData());

        const route = useRoute();
        const routeId = route.params?.id || null;

        const findProperty = async () => {
            const response = await propertyStore.findProperty(
                getAuthToken,
                routeId
            );

            propertyData.value = {
                ...propertyData.value,
                name: response.name,
                description: response.description,
                short_description: response.short_description,
                price: response.price,
                state: response.state.label,
                status: response.status,
                type: response.type,
                created_at: dayjs(response.created_at).format(
                    'YYYY-MM-DD HH:mm:ss'
                ),
                bathroom: response.details?.bathroom || '-',
                bedroom: response.details?.bedroom || '-',
                car_park: response.details?.car_park || '-',
                furnishing: response.details?.furnishing || '-',
                listing_type: response.details?.listing_type || '-',
                square_feet: response.details?.square_feet || '-',
                tenure: response.details?.tenure || '-',
                banner: response.banner,
                sliders: response.sliders,
            };

            return response;
        };

        onMounted(() => {
            findProperty();
        });

        return {
            tab: ref('basic'),
            findProperty,
            propertyData,
        };
    },
};
</script>
