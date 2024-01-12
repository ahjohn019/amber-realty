<template>
    <div class="m-4 px-4">
        <div class="row pb-4">
            <div class="col text-2xl">Property Form</div>
        </div>
        <div class="row bg-white p-5 font-bold gap-y-4">
            <div class="col-12 post-information-name pb-2">Create Property</div>
            <div class="col-12">
                <div class="post-information-name">Name</div>
                <div class="col-12">
                    <q-input
                        dense
                        outlined
                        label="Name"
                        v-model="propertyFormPayload.name"
                        ref="nameRef"
                    >
                    </q-input>
                </div>
                <div class="col-12 text-red-700">
                    {{ errors.name }}
                </div>
            </div>
            <div class="col-12">
                <div class="post-information-name">Descriptions</div>
                <div class="col-12">
                    <CkeditorPlugin
                        :descriptions="propertyFormPayload.descriptions"
                        @updateDescriptionsData="updateDescriptions"
                    />
                </div>
                <div class="col-12 text-red-700">
                    {{ errors.descriptions }}
                </div>
            </div>

            <div class="col-12">
                <div class="post-information-name">Short Descriptions</div>
                <div class="col-12">
                    <q-input
                        v-model="propertyFormPayload.short_descriptions"
                        filled
                        outlined
                        placeholder="Short Descriptions"
                        type="textarea"
                    />
                </div>
            </div>
            <div
                class="col-12 col-md-6"
                :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
            >
                <div class="post-information-name">Status</div>
                <q-select
                    dense
                    v-model="model"
                    :options="['a', 'as']"
                    label="Status"
                />
            </div>
            <div class="col-12 col-md-6">
                <div class="post-information-name">Price</div>
                <q-input
                    dense
                    outlined
                    label="Price"
                    v-model="propertyFormPayload.price"
                    type="number"
                >
                </q-input>
            </div>

            <div
                class="col-12 col-md-6"
                :class="$q.screen.lt.md ? 'pr-0' : 'pr-6'"
            >
                <div class="post-information-name">Tenure</div>
                <q-select
                    dense
                    v-model="propertyFormPayload.tenure"
                    :options="['a', 'as']"
                    label="Status"
                />
            </div>

            <div class="col-12 col-md-6">
                <div class="post-information-name">Square Feet</div>
                <q-input
                    dense
                    outlined
                    label="Square Feet"
                    v-model="propertyFormPayload.square_feet"
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
                    v-model="propertyFormPayload.listing_type"
                    :options="['a', 'as']"
                    label="Status"
                />
            </div>

            <div class="col-12 col-md-6">
                <div class="post-information-name">Furnished Type</div>
                <q-select
                    dense
                    v-model="propertyFormPayload.furnishing"
                    :options="['a', 'as']"
                    label="Furnished Type"
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
                    v-model="propertyFormPayload.bathroom"
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
                    v-model="propertyFormPayload.bedroom"
                    type="number"
                >
                </q-input>
            </div>

            <div class="col-12">
                <div class="post-information-name">Images</div>
                <DropFile @updateFiles="updateParentFiles" />
            </div>
            <div class="col-12 text-right">
                <q-btn
                    label="Submit"
                    class="text-white bg-primary update-form-button"
                    @click="updatePostFormData"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CkeditorPlugin from '@admin/components/ckeditor/ckEditorPlugin.vue';
import DropFile from '@admin/components/dragAndDrop/DropFile.vue';
import { ref } from 'vue';

export default {
    components: {
        CkeditorPlugin,
        DropFile,
    },

    setup() {
        const propertyFormPayload = ref({
            name: '',
            descriptions: '',
            short_descriptions: '',
            images: [],
            status: '1',
            price: '',
            tenure: '',
            square_feet: '',
            listing_type: '',
        });

        const model = ref(null);
        const options = ref([]);
        const errors = ref({
            name: null,
            descriptions: null,
            short_descriptions: null,
            images: null,
            status: null,
            price: null,
            tenure: null,
            square_feet: null,
            listing_type: null,
        });

        const updateParentFiles = (files) => {
            propertyFormPayload.value.images = files;
        };

        const updateDescriptions = (value) => {
            propertyFormPayload.value.descriptions = value;
        };

        const updatePostFormData = async () => {
            console.log(propertyFormPayload);
        };

        return {
            propertyFormPayload,
            updatePostFormData,
            updateParentFiles,
            updateDescriptions,
            model,
            options,
            errors,
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
