import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';

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

        async createProperty(authToken, payload = null) {
            const config = {
                headers: { Authorization: `Bearer ${authToken}` },
            };

            payload = {
                ...payload,
            };

            if (payload.property_details > 0) {
                this.handlePropertyDetails(payload);
            }

            const { state, property_types, ...filteredPayload } = payload;

            try {
                const response = await axios.post(
                    prefix + 'store',
                    filteredPayload,
                    config
                );

                this.router.push('/property');

                Swal.fire({
                    text: 'Property Created Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        return response.data.data;
                    }
                });
            } catch (error) {
                return error.response;
            }
        },

        handlePropertyDetails(payload) {
            const propertyDetails = {
                furnishing: payload.furnishing.slug,
                listing_type: payload.listing_type.slug,
                type_id: payload.property_types.id,
                state_id: payload.state.id,
                status: payload.status.slug,
                tenure: payload.tenure.slug,
                bathroom: parseInt(payload.bathroom),
                bedroom: parseInt(payload.bedroom),
            };

            payload = {
                ...payload,
                ...propertyDetails,
            };

            return payload;
        },
    },
});
