import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const prefix = '/api/auth/';

export const usePropertyWebStore = defineStore('property_web_auth', {
    state: () => ({
        post_table_web: null,
        router: useRouter(),
        route: useRoute(),
    }),

    actions: {
        async handleLoginProcess(payload) {
            try {
                const response = await axios.post(prefix + 'login', payload);

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },
        async handleSignUpProcess(payload) {
            try {
                const response = await axios.post(prefix + 'register', payload);

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },
    },
});
