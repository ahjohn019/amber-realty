import { defineStore } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const prefix = '/api/property/';

export const usePropertyWebStore = defineStore('property_web_store', {
    state: () => ({
        post_table_web: null,
        router: useRouter(),
        route: useRoute(),
    }),

    actions: {
        async fetchHighlights(authToken) {
            const config = {
                headers: { Authorization: `Bearer ${authToken}` },
            };

            try {
                const response = await axios.get(prefix + 'highlights', {
                    ...config,
                });

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },
    },
});
