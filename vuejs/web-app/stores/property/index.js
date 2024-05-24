import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const prefix = '/api/property/';

export const usePropertyWebStore = defineStore('property_web', {
    state: () => ({
        post_table_web: null,
        router: useRouter(),
        route: useRoute(),
    }),

    actions: {
        async fetchLatestProperty(payload = null) {
            try {
                const response = await axios.get(prefix + 'latest', {
                    params: payload,
                });

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        async fetchPropertyList(payload = null) {
            try {
                const response = await axios.get(prefix + 'list', {
                    params: payload,
                });

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        async fetchPropertyDetails() {
            try {
                const routeId = this.route.params?.id || null;

                const response = await axios.get(
                    prefix + 'details/' + routeId,
                    routeId
                );

                return response.data.data;
            } catch (error) {}
        },

        async fetchPropertyFilterOptionGroup(payload = null) {
            try {
                const response = await axios.get(
                    '/api/ref/' + 'property/filter-option-group',
                    {
                        params: payload,
                    }
                );

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        // google map location
        async fetchLocation(propertyDetails = null) {
            try {
                const response = await axios.post(prefix + 'location', {
                    params: propertyDetails.full_address,
                });

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        async fetchActiveSelectionQuery(activeLocationQuery = null) {
            try {
                const response = await axios.post(
                    prefix + 'active-location',
                    activeLocationQuery
                );

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        // js google map location
        async fetchNearbyLocation(id) {
            try {
                const response = await axios.get(
                    prefix + 'nearby-location/' + id
                );

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        // fetch total views from property details page
        async fetchDetailViews(id) {
            try {
                const response = await axios.get(prefix + 'detail-views/' + id);

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },
    },
});
