<template>
    <div>
        <q-btn-dropdown
            color="transparent"
            class="text-black font-bold"
            dropdown-icon="expand_more"
        >
            <template v-slot:label>
                <div class="row items-center no-wrap font-bold">Edit</div>
            </template>

            <q-list class="q-table-edit-dropdown-list">
                <q-item clickable>
                    <q-item-section>
                        <q-icon name="visibility" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>View</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable @click="handleEdit()">
                    <q-item-section>
                        <q-icon name="edit" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Edit</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable @click="handleDelete()">
                    <q-item-section>
                        <q-icon name="delete" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Delete</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>

<script>
import { usePropertyAdminStore } from '@store_admin_endpoints/property/index.js';
import { useAdminAuthStore } from '@store_admin/base/auth.js';

export default {
    props: {
        data: Object,
    },

    setup(data) {
        const postPropertyStore = usePropertyAdminStore();

        // fetch auth token
        const adminAuthStore = useAdminAuthStore();
        const getAuthToken = adminAuthStore.fetchSessionToken();
        const propertyId = data.data.row?.id || null;

        const handleEdit = () => {
            postPropertyStore.handleEditProperty(propertyId, data);
        };

        const handleDelete = async () => {
            await postPropertyStore.handleDeleteProperty(
                propertyId,
                getAuthToken
            );
        };

        return {
            handleEdit,
            handleDelete,
        };
    },
};
</script>
