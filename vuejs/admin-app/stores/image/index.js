import { defineStore } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const prefix = '/api/server-files/';

export const useServerImageStore = defineStore('server_image_admin', {
    state: () => ({
        post_image_admin: null,
        router: useRouter(),
        route: useRoute(),
    }),

    actions: {
        async updateFiles(payload, authToken) {
            const config = {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            };

            try {
                const response = await axios.post(
                    prefix + 'update',
                    payload,
                    config
                );

                Swal.fire({
                    text: 'Image Update Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        return response.data;
                    }
                });

                return response.data;
            } catch (error) {
                Swal.fire({
                    title: error.response.data.data,
                    text: error.response.data.message,
                    icon: 'error',
                });

                return error.response;
            }
        },

        async deleteFiles(payload, authToken) {
            const config = {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            };

            try {
                const response = await axios.post(
                    prefix + 'delete',
                    payload,
                    config
                );

                Swal.fire({
                    text: 'Image Deleted Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        return response.data;
                    }
                });

                return response.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        handleMultipleImageChange(incomingFiles, event) {
            const fileId = event.target.id;
            const file = event.target.files[0];

            const existingFile = incomingFiles.value.find(
                (item) => item.id === fileId
            ) || { id: fileId };

            existingFile.file = file;

            if (!incomingFiles.value.includes(existingFile)) {
                incomingFiles.value.push(existingFile);
            }

            return incomingFiles;
        },
    },
});
