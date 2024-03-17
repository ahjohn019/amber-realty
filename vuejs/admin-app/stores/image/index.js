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
        async updateFiles(files, sequenceFiles = null, authToken) {
            const config = {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            };

            try {
                const finalData = {
                    files,
                    sequenceFiles,
                };

                console.log(finalData);

                const response = await axios.post(
                    prefix + 'update',
                    finalData,
                    config
                );

                Swal.fire({
                    text: 'Image Update Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.router.go(0);
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
                        this.router.go(0);
                    }
                });

                return response.data;
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        },

        findIncomingFiles(incomingFiles, fileId) {
            return (
                incomingFiles.value.find((item) => item.id === fileId) || null
            );
        },

        handleMultipleImageChange(incomingFiles, event) {
            const eventTarget = event.target;

            const fileId = parseInt(eventTarget.id);
            const file = eventTarget.files[0];
            const fileIndex = eventTarget.getAttribute('index');
            const modulePath = eventTarget.getAttribute('module_path');

            const existingFiles = this.findIncomingFiles(incomingFiles, fileId);

            if (existingFiles) {
                incomingFiles.value[fileIndex].file = file;
            } else {
                incomingFiles.value.push({
                    id: fileId,
                    file,
                    module_path: modulePath,
                });
            }

            return incomingFiles;
        },
    },
});
