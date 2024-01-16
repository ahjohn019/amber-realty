import { defineStore } from 'pinia';

export const usePropertyAdminModelStore = defineStore('property_admin_models', {
    state: () => ({
        post_table_admin: null,
    }),

    actions: {
        fetchPropertyColumns() {
            return [
                {
                    name: 'name',
                    align: 'left',
                    label: 'Name',
                    field: 'name',
                    sortable: true,
                },
                {
                    name: 'description',
                    align: 'left',
                    label: 'Description',
                    field: 'description',
                    sortable: true,
                },
                {
                    name: 'short_description',
                    align: 'left',
                    label: 'Short Description',
                    field: 'short_description',
                    sortable: true,
                },
                {
                    name: 'price',
                    align: 'left',
                    label: 'Price',
                    field: 'price',
                    sortable: true,
                },
                {
                    name: 'created_by',
                    align: 'left',
                    label: 'Created By',
                    field: 'created_by',
                    sortable: false,
                },
            ];
        },

        fetchPropertyData() {
            return {
                name: '',
                description: '',
                short_description: '',
                images: [],
                status: '',
                price: 0,
                state: '',
                property_types: '',
            };
        },

        fetchPropertyDetailsData() {
            return {
                tenure: '',
                square_feet: '',
                listing_type: '',
                furnishing: '',
                bathroom: 1,
                bedroom: 1,
            };
        },

        fetchPropertyError() {
            return {
                name: null,
                description: null,
                short_description: null,
                images: null,
                status: null,
                price: null,
                tenure: null,
                square_feet: null,
                listing_type: null,
                furnishing: null,
                bathroom: null,
                bedroom: null,
            };
        },

        fetchTenureData() {
            return [
                { label: 'Freehold', slug: 'freehold' },
                { label: 'Leasehold', slug: 'leasehold' },
            ];
        },

        fetchFurnishingData() {
            return [
                { label: 'Unfurnished', slug: 'unfurnished' },
                { label: 'Partially Furnished', slug: 'partially_furnished' },
                { label: 'Furnished', slug: 'furnished' },
            ];
        },

        fetchListingTypeData() {
            return [
                { label: 'Sale', slug: 'sale' },
                { label: 'Rent', slug: 'rent' },
            ];
        },

        fetchStatusData() {
            return [
                { label: 'Active', slug: 'active' },
                { label: 'Inactive', slug: 'inactive' },
            ];
        },
    },
});
