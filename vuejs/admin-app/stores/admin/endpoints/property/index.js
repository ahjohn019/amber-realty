import { defineStore } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const prefix = '/api/property/';

export const usePropertyAdminStore = defineStore('property_admin', {
    state: () => ({
        post_table_admin: null,
        router: useRouter(),
        route: useRoute(),
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

        async findProperty(authToken, id) {
            const config = {
                headers: { Authorization: `Bearer ${authToken}` },
            };

            try {
                const response = await axios.get(prefix + 'show/' + id, {
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
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            };

            // declare route
            const routeType = this.route.query?.type || null;
            const routeId = this.route.query?.id || null;

            // check route type
            const propertyCreateRoute = prefix + 'store';
            const propertyUpdateRoute = prefix + 'update/' + routeId;

            const responseRoute =
                routeType === 'update'
                    ? propertyUpdateRoute
                    : propertyCreateRoute;

            payload = {
                ...payload,
                type_id: payload.property_types.id,
                state_id: payload.state.id,
                status: payload.status.slug,
                file: payload.images,
                id: routeId,
            };

            if (payload.property_details > 0) {
                payload = this.handlePropertyDetails(payload);
            }

            const { state, property_types, images, ...filteredPayload } =
                payload;

            try {
                const response = await axios.post(
                    responseRoute,
                    filteredPayload,
                    config
                );

                this.router.push('/property');

                Swal.fire({
                    text:
                        routeType === 'update'
                            ? 'Property Update Successfully'
                            : 'Property Create Successfully',
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

        filteredPropertyDetails(payload) {
            let filteredPropertyDetails = payload.type.filter((item) => {
                if (payload.category === 'propertyType') {
                    return (
                        item.label.toLowerCase() ===
                        payload.details.toLowerCase()
                    );
                }

                return item.slug === payload.details.toLowerCase();
            });
            if (filteredPropertyDetails.length > 0) {
                filteredPropertyDetails = { ...filteredPropertyDetails }[0];
            }

            return filteredPropertyDetails;
        },
    },
});
