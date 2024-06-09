import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import Swal from 'sweetalert2';

const prefix = '/api/auth/';

export const usePropertyWebStore = defineStore('property_web_auth', {
    state: () => ({
        post_table_web: null,
        router: useRouter(),
        route: useRoute(),
        config: { headers: { Authorization: '' } },
    }),

    actions: {
        async handleLoginProcess(payload) {
            try {
                const response = await axios.post(prefix + 'login', payload);

                if (response.data.data) {
                    window.sessionStorage.setItem(
                        '_token',
                        response.data.data.token
                    );
                }

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
        async handleLogoutProcess(payload) {
            try {
                this.config.headers.Authorization = `Bearer ${payload}`;

                const response = await axios.post(
                    prefix + 'logout',
                    null,
                    this.config
                );

                if (response) {
                    window.sessionStorage.removeItem('_token');
                    this.router.push('/');
                }

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        async fetchProfile(payload) {
            try {
                if (payload === null) return false;

                this.config.headers.Authorization = `Bearer ${payload}`;

                const response = await axios.post(
                    prefix + 'profile',
                    null,
                    this.config
                );

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        async updateProfile(payload, userProfile) {
            try {
                this.config.headers.Authorization = `Bearer ${payload}`;

                const response = await axios.post(
                    prefix + 'update-profile',
                    userProfile,
                    this.config
                );

                Swal.fire({
                    text: 'Update Profile Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.router.go(0);
                    }
                });

                return response.data.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        async updatePassword(payload, passwordData) {
            try {
                this.config.headers.Authorization = `Bearer ${payload}`;

                const response = await axios.post(
                    prefix + 'update-password',
                    passwordData,
                    this.config
                );

                this.router.push('/');

                Swal.fire({
                    text: 'Update Password Successfully',
                    icon: 'success',
                });

                return response;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        fetchSessionToken() {
            const sessionStorage = window.sessionStorage;
            const getAuthToken = sessionStorage.getItem('_token');

            return getAuthToken;
        },
    },
});
