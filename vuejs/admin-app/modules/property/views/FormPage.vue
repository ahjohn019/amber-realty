<!-- eslint-disable camelcase -->
<template>
    <div class="row">
        <div class="col-12 row pb-4">
            <div class="col text-2xl">Property Form</div>
            <div class="col text-right">
                <span class="font-bold">Details</span>
                <q-toggle
                    v-model="propertyDetailsToggle"
                    color="green"
                    @click="handlePropertyDetails"
                />
            </div>
        </div>
        <div class="col-12 row bg-white p-5 font-bold gap-y-4">
            <div class="col-12 post-information-name pb-2">
                {{ routeType == 'update' ? 'Update' : 'Create' }} Property
            </div>
            <div class="col-12">
                <div class="post-information-name">Name</div>
                <div class="col-12">
                    <q-input
                        dense
                        outlined
                        label="Name"
                        v-model="propertyData.name"
                        ref="nameRef"
                    >
                    </q-input>
                </div>
                <div class="col-12 text-red-700 pt-2">
                    {{ errors.name }}
                </div>
            </div>
            <div class="col-12">
                <div class="post-information-name">Descriptions</div>
                <div class="col-12">
                    <CkeditorPlugin
                        :description="propertyData.description"
                        @updateDescriptionsData="updateDescriptions"
                    />
                </div>
                <div class="col-12 text-red-700 pt-2">
                    {{ errors.description }}
                </div>
            </div>
            <div class="col-12">
                <div class="post-information-name">Short Descriptions</div>
                <div class="col-12">
                    <q-input
                        v-model="propertyData.short_description"
                        filled
                        outlined
                        placeholder="Short Descriptions"
                        type="textarea"
                    />
                </div>
                <div class="col-12 text-red-700 pt-2">
                    {{ errors.short_description }}
                </div>
            </div>
            <div
                class="col-12 col-md-6"
                :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
            >
                <div class="post-information-name">Status</div>
                <q-select
                    dense
                    v-model="propertyData.status"
                    :options="status"
                    option-value="slug"
                    option-label="label"
                    label="Status"
                />
            </div>
            <div class="col-12 col-md-6">
                <div class="post-information-name">Types</div>
                <q-select
                    dense
                    v-model="propertyData.property_types"
                    :options="property_types"
                    option-value="id"
                    option-label="label"
                    label="Please Select"
                />
                <div class="col-12 text-red-700 pt-2">
                    {{ errors.type_id }}
                </div>
            </div>
            <div
                class="col-12 col-md-6"
                :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
            >
                <div class="post-information-name">State</div>
                <q-select
                    dense
                    v-model="propertyData.state"
                    :options="state"
                    option-value="id"
                    option-label="label"
                    label="Please Select"
                />
                <div class="col-12 text-red-700 pt-2">
                    {{ errors.state_id }}
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="post-information-name">Price</div>
                <q-input
                    dense
                    outlined
                    label="Price"
                    v-model="propertyData.price"
                    type="number"
                >
                </q-input>
            </div>
            <div
                class="col-12 col-md-6"
                :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
            >
                <div class="post-information-name">Listing Type</div>

                <q-select
                    dense
                    v-model="propertyData.listing_type"
                    :options="listingType"
                    label="Please Select"
                    emit-value
                    map-options
                />
            </div>
            <div
                class="col-12 row gap-y-4"
                :class="propertyDetailsToggle ? '' : 'hidden'"
            >
                <div
                    class="col-12 col-md-6"
                    :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
                >
                    <div class="post-information-name">Tenure</div>
                    <q-select
                        dense
                        v-model="propertyDetailsData.tenure"
                        :options="tenure"
                        option-value="slug"
                        option-label="label"
                        label="Please Select"
                    />
                </div>
                <div class="col-12 col-md-6">
                    <div class="post-information-name">Square Feet</div>
                    <q-input
                        dense
                        outlined
                        label="Square Feet"
                        v-model="propertyDetailsData.square_feet"
                        type="number"
                    >
                    </q-input>
                </div>

                <div class="col-12 col-md-6">
                    <div class="post-information-name">Furnished Type</div>
                    <q-select
                        dense
                        v-model="propertyDetailsData.furnishing"
                        :options="furnishing"
                        option-value="slug"
                        option-label="label"
                        label="Please Select"
                    />
                </div>
                <div
                    class="col-12 col-md-6"
                    :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
                >
                    <div class="post-information-name">Bathroom</div>
                    <q-input
                        dense
                        outlined
                        label="Bathroom"
                        v-model="propertyDetailsData.bathroom"
                        type="number"
                    >
                    </q-input>
                </div>
                <div class="col-12 col-md-6">
                    <div class="post-information-name">Bedroom</div>
                    <q-input
                        dense
                        outlined
                        label="Bedroom"
                        v-model="propertyDetailsData.bedroom"
                        type="number"
                    >
                    </q-input>
                </div>
                <div class="col-12">
                    <div class="post-information-name">Car Park</div>
                    <q-input
                        dense
                        outlined
                        label="Carpark"
                        v-model="propertyDetailsData.car_park"
                        type="number"
                    >
                    </q-input>
                </div>
            </div>
            <div class="col-12">
                <div class="flex justify-between py-2">
                    <div class="post-information__name">Images</div>
                    <div v-if="routeType === 'update'">
                        <ExistImageModal :property="propertyData" />
                    </div>
                </div>
                <DropFile
                    @updateFiles="updateParentFiles"
                    :propertyData="propertyData"
                />
                <div class="col-12 text-red-700 pt-2">
                    {{ errors.module_path }}
                </div>
            </div>

            <div class="col-12 text-right">
                <q-btn
                    :label="routeType == 'update' ? 'Update' : 'Submit'"
                    class="text-white bg-primary update-form__button"
                    @click="submitData"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CkeditorPlugin from '@admin/components/ckeditor/ckEditorPlugin.vue';
import DropFile from '@admin/components/dragAndDrop/DropFile.vue';
import { ref } from 'vue';
import { usePropertyAdminModelStore } from '@store_admin_models/property/index.js';
import { useAdminAuthStore } from '@store_admin/base/auth.js';
import { usePropertyAdminStore } from '@store_admin_endpoints/property/index.js';
import { useRefListStore } from '@store_admin/ref/refList.js';
import { useRoute } from 'vue-router';
import ExistImageModal from '@admin/components/modals/ExistImageModal.vue';

export default {
    components: {
        CkeditorPlugin,
        DropFile,
        ExistImageModal,
    },

    async setup() {
        // declare route
        const route = useRoute();
        const routeType = route.query?.type || null;
        const routeId = route.query?.id || null;

        // fetch the shared modules
        const fetchPropertyModels = usePropertyAdminModelStore();
        const fetchRefAdminStore = useRefListStore();
        const fetchPropertyAdminStore = usePropertyAdminStore();

        // fetch property data list
        const propertyData = ref(fetchPropertyModels.fetchPropertyData());
        const propertyDetailsData = ref(
            fetchPropertyModels.fetchPropertyDetailsData()
        );

        const errors = ref(fetchPropertyModels.fetchPropertyError());

        // init
        const options = ref([]);
        const propertyDetails = ref(0);
        const propertyDetailsToggle = ref(false);
        const state = ref([]);
        const property_types = ref([]);
        const mainImage = ref(null);
        const bannerUrl = ref('');
        const bannerTargetFile = ref('');
        const existImageModal = ref(false);

        // fetch auth token
        const adminAuthStore = useAdminAuthStore();
        const getAuthToken = adminAuthStore.fetchSessionToken();

        // fetch property details data
        const tenure = fetchPropertyModels.fetchTenureData();
        const furnishing = fetchPropertyModels.fetchFurnishingData();
        const listingType = fetchPropertyModels.fetchListingTypeData();
        const status = fetchPropertyModels.fetchStatusData();

        propertyData.value.listing_type = listingType.find(
            (item) => item.slug === 'sale'
        );

        propertyData.value.status = status.find(
            (item) => item.slug === 'active'
        );

        // Fetch state list
        const stateList = async () => {
            const response = await fetchRefAdminStore.fetchStateList(
                getAuthToken
            );

            state.value = response;
        };

        // Fetch property types
        const propertyTypesList = async () => {
            const response = await fetchRefAdminStore.fetchPropertyTypes(
                getAuthToken
            );

            property_types.value = response;
            return response;
        };

        // Handle Property Details
        const handlePropertyDetails = () => {
            propertyDetails.value = propertyDetailsToggle.value ? 1 : 0;
            return propertyDetails.value;
        };

        // Update parent files
        const updateParentFiles = (files) => {
            propertyData.value = {
                ...propertyData.value,
                images: files.files,
                module_path: files.module_path,
            };
        };

        // Update main image
        const updateMainImage = (event) => {
            bannerUrl.value = URL.createObjectURL(event.target.files[0]);
            bannerTargetFile.value = event.target.files[0];
        };

        // Update descriptions
        const updateDescriptions = (value) => {
            propertyData.value.description = value;
        };

        // Find Property
        const findProperty = async () => {
            const propertyTypes = await propertyTypesList();

            const response = await fetchPropertyAdminStore.findProperty(
                getAuthToken,
                routeId
            );

            const {
                name,
                description,
                short_description,
                state,
                price,
                file,
                banner,
                sliders,
                type,
                details,
                listing_type,
            } = response;

            propertyData.value = {
                ...propertyData.value,
                name,
                description,
                short_description,
                state,
                price,
                file,
                banner,
                sliders,
                property_types: fetchPropertyAdminStore.filteredPropertyDetails(
                    {
                        type: propertyTypes,
                        details: type,
                        category: 'propertyType',
                    }
                ),
                listing_type,
            };

            propertyData.value.listing_type = listingType.find(
                (item) => item.slug === propertyData.value.listing_type
            );

            if (details) {
                propertyDetailsToggle.value = true;

                propertyDetailsData.value = {
                    ...propertyDetailsData.value,
                    tenure: fetchPropertyAdminStore.filteredPropertyDetails({
                        type: tenure,
                        details: details.tenure,
                    }),
                    square_feet: details.square_feet,
                    furnishing: fetchPropertyAdminStore.filteredPropertyDetails(
                        {
                            type: furnishing,
                            details: details.furnishing,
                        }
                    ),
                    bedroom: details.bedroom,
                    bathroom: details.bathroom,
                    car_park: details.car_park,
                };
            }
        };

        // Handle submit data
        const submitData = async () => {
            propertyData.value = {
                ...propertyData.value,
                property_details: propertyDetailsToggle.value ? 1 : 0,
                banner_url: bannerTargetFile.value,
            };

            console.log(propertyData.value);

            const {
                tenure,
                bathroom,
                bedroom,
                car_park,
                square_feet,
                furnishing,
                ...remainingDetails
            } = propertyData.value;

            propertyData.value = remainingDetails;

            if (propertyData.value.property_details > 0) {
                propertyData.value = {
                    ...propertyData.value,
                    ...Object.fromEntries(
                        Object.entries(propertyDetailsData.value).map(
                            ([key, value]) => [key, value ?? null]
                        )
                    ),
                };
            }

            const response = await fetchPropertyAdminStore.createProperty(
                getAuthToken,
                propertyData.value,
                errors
            );

            return response;
        };

        if (routeType === 'update') {
            await findProperty();
        }

        await stateList();
        await propertyTypesList();

        return {
            findProperty,
            propertyData,
            propertyDetailsData,
            submitData,
            updateParentFiles,
            updateDescriptions,
            propertyDetailsToggle,
            handlePropertyDetails,
            options,
            errors,
            tenure,
            furnishing,
            listingType,
            status,
            state,
            property_types,
            stateList,
            propertyTypesList,
            mainImage,
            bannerUrl,
            updateMainImage,
            routeType,
            existImageModal,
        };
    },
};
</script>

<style>
.post-information__name {
    font-size: 16px;
    padding-bottom: 0.5rem;
}
.update-form__button .block {
    font-weight: bold;
}
</style>
