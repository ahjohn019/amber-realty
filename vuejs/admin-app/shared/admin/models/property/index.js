import { defineStore } from 'pinia';
import { ref } from 'vue';

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
    },
});
