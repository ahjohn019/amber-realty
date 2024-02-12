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
                listing_type: payload.listing_type.slug,
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

                this.router.push('/');

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
                    module_path: errorResponse?.module_path?.[0] ?? '',
                };

                return error.response;
            }
        },

        async deleteProperty(authToken, id = null) {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                };

                const response = await axios.delete(
                    prefix + 'delete/' + id,
                    config
                );

                Swal.fire({
                    text: 'Property Deleted Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.router.go(0);
                    }
                });

                return response;
            } catch (error) {}
        },

        handlePropertyDetails(payload) {
            const propertyDetails = {
                furnishing: payload.furnishing.slug,
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

        // filter property details
        handleFilteredPropertyDetails(
            filteredData,
            detailsData,
            categoryData = null
        ) {
            return this.filteredPropertyDetails({
                type: filteredData,
                details: detailsData,
                category: categoryData,
            });
        },

        // For Handle Status
        handleEditProperty(propertyId) {
            this.router.push({
                name: 'property.form',
                query: { type: 'update', id: propertyId },
            });
        },

        handleViewProperty(propertyId) {
            this.router.push({
                name: 'property.detail',
                params: { id: propertyId },
            });
        },

        async handleDeleteProperty(propertyId, authToken) {
            const postPropertyStore = usePropertyAdminStore();

            const response = await postPropertyStore.deleteProperty(
                authToken,
                propertyId
            );

            return response;
        },
    },
});
