<template>
    <q-btn
        label="Edit"
        color="primary"
        @click="existImageModal = true"
        class="edit-image-form__button"
    />
    <q-dialog v-model="existImageModal">
        <q-card>
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Edit</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div
                    class="row items-center"
                    v-for="(file, key) in files"
                    :key="key"
                >
                    <div
                        v-if="file.module_path != 'banner-image'"
                        class="col row"
                    >
                        <div class="col">
                            <img :src="file.url" alt="" />
                            <div class="break-words">
                                {{ file.name }}
                            </div>
                            <div>
                                {{ Math.round(file.size / 1000) + 'kb' }}
                            </div>
                            <div>
                                <q-btn
                                    size="14px"
                                    round
                                    color="red"
                                    icon="delete"
                                    @click="handleDeleteFile(file)"
                                />
                            </div>
                        </div>
                        <div class="col">
                            <input
                                type="file"
                                multiple
                                name="file"
                                :id="file.id"
                                class="hidden-input"
                                @change="onChange"
                                ref="currentFile"
                                accept=".pdf,.jpg,.jpeg,.png"
                            />
                        </div>
                    </div>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn
                    label="Update"
                    class="text-white bg-primary update-form__button"
                    @click="updateData"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue';
import { useAdminAuthStore } from '@store_admin/base/auth.js';
import { useServerImageStore } from '@store_admin/image/index.js';

export default {
    props: ['property'],
    setup(props) {
        // // fetch auth token
        const adminAuthStore = useAdminAuthStore();
        const serverImageStore = useServerImageStore();
        const getAuthToken = adminAuthStore.fetchSessionToken();
        const existImageModal = ref(true);

        const modulePathOptions = [
            { label: 'Banner Image', value: 'banner-image' },
            { label: 'Slider Image', value: 'slider-image' },
        ];

        const files = props.property?.file || [];
        const incomingFiles = ref([]);

        console.log(props.property);

        const onChange = (event) => {
            return serverImageStore.handleMultipleImageChange(
                incomingFiles,
                event
            );
        };

        const updateData = async () => {
            const response = await serverImageStore.updateFiles(
                incomingFiles.value,
                getAuthToken
            );

            return response;
        };

        const handleDeleteFile = async (file) => {
            const response = await serverImageStore.deleteFiles(
                file,
                getAuthToken
            );

            return response;
        };

        return {
            existImageModal,
            files,
            updateData,
            onChange,
            handleDeleteFile,
            modulePathOptions,
        };
    },
};
</script>

<style>
.edit-image-form__button .block {
    font-weight: bold;
}
</style>
