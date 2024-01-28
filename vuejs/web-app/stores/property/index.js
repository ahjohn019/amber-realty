import { defineStore } from 'pinia';
import axios from 'axios';

const prefix = '/api/property/';

export const usePropertyWebStore = defineStore('property_web', {
    state: () => ({
        post_table_web: null,
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
    },
});
