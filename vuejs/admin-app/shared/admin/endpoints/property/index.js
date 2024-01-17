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

        async createProperty(authToken, payload = null, errors = null) {
            const config = {
                headers: { Authorization: `Bearer ${authToken}` },
            };

            payload = {
                ...payload,
                type_id: payload.property_types.id,
                state_id: payload.state.id,
                status: payload.status.slug,
            };

            if (payload.property_details > 0) {
                payload = this.handlePropertyDetails(payload);
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

                return response;
            } catch (error) {
                const errorResponse = error.response?.data?.errors;

                errors.value = {
                    ...errors.value,
                    name: errorResponse?.name?.[0] ?? '',
                    description: errorResponse?.description?.[0] ?? '',
                    short_description:
                        errorResponse?.short_description?.[0] ?? '',
                    state_id: errorResponse?.state_id?.[0] ?? '',
                    type_id: errorResponse?.type_id?.[0] ?? '',
                };

                return error.response;
            }
        },

        handlePropertyDetails(payload) {
            const propertyDetails = {
                furnishing: payload.furnishing.slug,
                listing_type: payload.listing_type.slug,
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
