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

                console.log(response);

                return response.data.data;
            } catch (error) {}
        },
    },
});
