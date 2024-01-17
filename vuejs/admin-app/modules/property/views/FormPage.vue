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
            <div class="col-12 post-information-name pb-2">Create Property</div>
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
                <div
                    class="col-12 col-md-6"
                    :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
                >
                    <div class="post-information-name">Listing Type</div>
                    <q-select
                        dense
                        v-model="propertyDetailsData.listing_type"
                        :options="listingType"
                        option-value="slug"
                        option-label="label"
                        label="Please Select"
                    />
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
            </div>
            <div class="col-12">
                <div class="post-information-name">Images</div>
                <DropFile @updateFiles="updateParentFiles" />
            </div>
            <div class="col-12 text-right">
                <q-btn
                    label="Submit"
                    class="text-white bg-primary update-form-button"
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
import { usePropertyAdminModelStore } from '@shared_admin_models/property/index.js';
import { useAdminAuthStore } from '@shared_admin/base/auth.js';
import { usePropertyAdminStore } from '@shared_admin_endpoints/property/index.js';
import { useRefListStore } from '@shared_admin/ref/refList.js';

export default {
    components: {
        CkeditorPlugin,
        DropFile,
    },

    setup() {
        // fetch the shared modules
        const fetchPropertyModels = usePropertyAdminModelStore();
        const fetchRefAdminStore = useRefListStore();
        const fetchPropertyAdminStore = usePropertyAdminStore();

        // fetch property data list
        const propertyData = ref(fetchPropertyModels.fetchPropertyData());
        const propertyDetailsData = ref(
            fetchPropertyModels.fetchPropertyDetailsData()
        );
        propertyData.value.status = 'Active';
        const errors = ref(fetchPropertyModels.fetchPropertyError());

        // init
        const model = ref(null);
        const options = ref([]);
        const propertyDetails = ref(0);
        const propertyDetailsToggle = ref(false);
        const state = ref([]);
        const property_types = ref([]);

        // fetch auth token
        const adminAuthStore = useAdminAuthStore();
        const getAuthToken = adminAuthStore.fetchSessionToken();

        // fetch property details data
        const tenure = fetchPropertyModels.fetchTenureData();
        const furnishing = fetchPropertyModels.fetchFurnishingData();
        const listingType = fetchPropertyModels.fetchListingTypeData();
        const status = fetchPropertyModels.fetchStatusData();

        // fetch state list
        const stateList = async () => {
            const response = await fetchRefAdminStore.fetchStateList(
                getAuthToken
            );

            state.value = response;
        };
        // fetch property types
        const propertyTypesList = async () => {
            const response = await fetchRefAdminStore.fetchPropertyTypes(
                getAuthToken
            );

            property_types.value = response;
        };

        // Handle Property Details
        const handlePropertyDetails = () => {
            propertyDetails.value = !propertyDetailsToggle.value ? 0 : 1;
            return propertyDetails.value;
        };

        // Handle images
        const updateParentFiles = (files) => {
            propertyData.value.images = files;
        };

        // handle descriptions
        const updateDescriptions = (value) => {
            propertyData.value.description = value;
        };

        const submitData = async () => {
            propertyData.value.property_details = propertyDetails.value;
            propertyData.value.status = {
                slug: propertyData.value.status?.slug || 'active',
                label: propertyData.value.status?.label || 'Active',
            };

            const {
                tenure,
                bathroom,
                bedroom,
                square_feet,
                listing_type,
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

        stateList();
        propertyTypesList();

        return {
            propertyData,
            propertyDetailsData,
            submitData,
            updateParentFiles,
            updateDescriptions,
            propertyDetailsToggle,
            handlePropertyDetails,
            model,
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
        };
    },
};
</script>

<style>
.post-information-name {
    font-size: 16px;
    padding-bottom: 0.5rem;
}
.update-form-button .block {
    font-weight: bold;
}
</style>
