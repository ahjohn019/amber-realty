import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const prefix = '/api/server-files/';

export const useServerImageStore = defineStore('server_image_admin', {
    state: () => ({
        post_image_admin: null,
        router: useRouter(),
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

                this.router.push('/property');

                Swal.fire({
                    text: 'Image Update Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        return response.data.data;
                    }
                });

                return response.data.data;
            } catch (error) {
                console.log(error);

                this.router.push('/property');

                Swal.fire({
                    title: error.response.data.data,
                    text: error.response.data.message,
                    icon: 'error',
                });
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

                this.router.push('/property');

                Swal.fire({
                    text: 'Image Deleted Successfully',
                    icon: 'success',
                }).then((result) => {
                    if (result.isConfirmed) {
                        return response.data.data;
                    }
                });

                return response.data.data;
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
