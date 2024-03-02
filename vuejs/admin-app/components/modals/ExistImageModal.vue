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

            <q-card-section class="q-pt-none q-gutter-y-lg row">
                <div
                    class="col-12 row items-center"
                    v-for="(file, key) in finalFiles"
                    :key="key"
                >
                    <div class="col row">
                        <div class="col">
                            <q-card class="my-card">
                                <q-img
                                    :src="file.image.url"
                                    :ratio="16 / 9"
                                    fit="contain"
                                />

                                <q-card-section>
                                    <div class="text-subtitle1 break-words">
                                        <q-chip
                                            color="primary"
                                            text-color="white"
                                        >
                                            {{ file.image.name }}
                                        </q-chip>
                                    </div>
                                    <div class="text-subtitle2">
                                        <q-chip
                                            color="teal"
                                            text-color="white"
                                            icon="bookmark"
                                        >
                                            {{
                                                Math.round(
                                                    file.image.size / 1000
                                                ) + 'kb'
                                            }}
                                        </q-chip>
                                    </div>
                                    <div class="text-subtitle2">
                                        <q-chip
                                            color="teal"
                                            text-color="white"
                                            icon="bookmark"
                                        >
                                            {{ file.image.module_path }}
                                        </q-chip>
                                    </div>

                                    <div>
                                        <select
                                            name=""
                                            :id="parseInt(file.id)"
                                            :index="key"
                                            :module_path="
                                                file.image.module_path
                                            "
                                            @change="
                                                handleExistImageSequence(
                                                    $event,
                                                    file.id
                                                )
                                            "
                                        >
                                            <option
                                                :value="item"
                                                v-for="(
                                                    item, key
                                                ) in finalFiles.length"
                                                :key="key"
                                                :selected="
                                                    file.seq_value === item
                                                        ? true
                                                        : false
                                                "
                                            >
                                                {{ item }}
                                            </option>
                                        </select>
                                    </div>
                                </q-card-section>

                                <q-card-section class="justify-center flex">
                                    <q-card-section class="col-8">
                                        <input
                                            type="file"
                                            multiple
                                            name="file"
                                            :id="file.id"
                                            :module_path="
                                                file.image.module_path
                                            "
                                            :index="key"
                                            class="hidden-input"
                                            @change="handleFileChange"
                                            ref="currentFile"
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />
                                    </q-card-section>
                                </q-card-section>
                                <q-card-section class="justify-center flex">
                                    <q-btn
                                        size="14px"
                                        round
                                        color="red"
                                        icon="delete"
                                        @click="handleDeleteFile(file)"
                                    />
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
        const existImageModal = ref(false);
        const incomingFiles = ref([]);
        const finalFiles = ref([]);

        finalFiles.value = [
            props.property.banner,
            ...props.property.sliders,
        ].filter((item) => item !== null);

        const handleDeleteFile = async (file) => {
            const response = await serverImageStore.deleteFiles(
                file,
                getAuthToken
            );

            existImageModal.value = false;

            return response;
        };

        const handleFileChange = (event) => {
            return serverImageStore.handleMultipleImageChange(
                incomingFiles,
                event
            );
        };

        const handleExistImageSequence = async (event, fileId) => {
            const payload = {
                eventTarget: event.target,
                fileId,
                incomingFiles,
            };

            const response = await serverImageStore.handleExistImageSequence(
                payload,
                getAuthToken
            );

            finalFiles.value = response.list.data;

            return response.sequence;
        };

        const updateFileData = async () => {
            const response = await serverImageStore.updateFiles(
                incomingFiles.value,
                getAuthToken
            );

            existImageModal.value = false;

            return response;
        };

        return {
            existImageModal,
            updateFileData,
            handleFileChange,
            handleDeleteFile,
            finalFiles,
            handleExistImageSequence,
        };
    },
};
</script>

<style>
.edit-image-form__button .block {
    font-weight: bold;
}
</style>
