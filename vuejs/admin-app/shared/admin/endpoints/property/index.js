import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';

const prefix = '/api/property/';

export const usePropertyAdminStore = defineStore('property_admin', {
    state: () => ({
        post_table_admin: null,
        router: useRouter(),
    }),

    actions: {
        async fetchPropertyList(authToken, page = null, payload = null) {
            const config = {
                headers: { Authorization: `Bearer ${authToken}` },
            };

            try {
                const pagination = '?page=' + page;

                const response = await axios.get(prefix + 'list' + pagination, {
                    params: payload,
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
