<template>
    <q-btn
        label="Edit"
        color="primary"
        @click="existImageModal = true"
        class="edit-image-form__button"
    />
    <q-dialog v-model="existImageModal">
        <q-card>
            <q-card-section class="row items-center">
                <div class="text-h5">Edit</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="q-pt-none q-gutter-y-lg">
                <div
                    class="row items-center"
                    v-for="(file, key) in files"
                    :key="key"
                >
                    <div class="col row">
                        <div class="col">
                            <q-card class="my-card">
                                <q-img
                                    :src="file.url"
                                    :ratio="16 / 9"
                                    fit="cover"
                                />

                                <q-card-section>
                                    <div class="text-subtitle1 break-words">
                                        <q-chip
                                            color="primary"
                                            text-color="white"
                                        >
                                            {{ file.name }}
                                        </q-chip>
                                    </div>
                                    <div class="text-subtitle2">
                                        <q-chip
                                            color="teal"
                                            text-color="white"
                                            icon="bookmark"
                                        >
                                            {{
                                                Math.round(file.size / 1000) +
                                                'kb'
                                            }}
                                        </q-chip>
                                    </div>
                                </q-card-section>

                                <q-card-section
                                    class="row place-items-center justify-center"
                                >
                                    <q-card-section class="col-4 text-center">
                                        <q-btn
                                            size="14px"
                                            round
                                            color="red"
                                            icon="delete"
                                            @click="handleDeleteFile(file)"
                                        />
                                    </q-card-section>
                                    <q-separator vertical />
                                    <q-card-section class="col-4">
                                        <select
                                            v-model="file.module_path"
                                            :data-file-index="key"
                                            @change="changeModulePath"
                                        >
                                            <option value="banner-image">
                                                Banner Image
                                            </option>
                                            <option value="slider-image">
                                                Slider Image
                                            </option>
                                        </select>
                                    </q-card-section>
                                </q-card-section>

                                <q-card-section
                                    class="q-pt-none row justify-center"
                                >
                                    <q-card-section class="col-7">
                                        <input
                                            type="file"
                                            multiple
                                            name="file"
                                            :id="file.id"
                                            class="hidden-input"
                                            @change="onFileChange"
                                            ref="currentFile"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />
                                    </q-card-section>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn
                    label="Update"
                    class="text-white bg-primary update-form__button"
                    @click="updateFileData"
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

        const modulePathList = ref([]);

        const fetchAllModulePath = async () => {
            modulePathList.value = files.map((item) => {
                return { module_path: item.module_path, file_id: item.id };
            });
        };

        const changeModulePath = (event) => {
            const fetchFileIndex = event.target.getAttribute('data-file-index');
            modulePathList.value[fetchFileIndex].module_path =
                event.target.value;
        };

        const handleDeleteFile = async (file) => {
            const response = await serverImageStore.deleteFiles(
                file,
                getAuthToken
            );

            existImageModal.value = false;

            return response;
        };

        const onFileChange = (event) => {
            return serverImageStore.handleMultipleImageChange(
                incomingFiles,
                event
            );
        };

        const updateFileData = async () => {
            const payload = {
                file: incomingFiles.value,
                module_path: modulePathList.value,
            };

            const combinedResult = payload.module_path.map((pathItem) => {
                const matchingFileItem = payload.file?.find(
                    (fileItem) => parseInt(fileItem.id) === pathItem.file_id
                );

                return { ...pathItem, ...matchingFileItem };
            });

            const response = await serverImageStore.updateFiles(
                combinedResult,
                getAuthToken
            );

            existImageModal.value = false;

            return response;
        };

        fetchAllModulePath();

        return {
            existImageModal,
            files,
            updateFileData,
            onFileChange,
            handleDeleteFile,
            modulePathOptions,
            changeModulePath,
            fetchAllModulePath,
        };
    },
};
</script>

<style>
.edit-image-form__button .block {
    font-weight: bold;
}
</style>
