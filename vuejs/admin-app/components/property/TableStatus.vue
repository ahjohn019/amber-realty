<template>
    <div class="flex">
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

                    <q-item clickable>
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
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    props: {
        data: Object,
    },

    setup(data) {
        const router = useRouter();

        const handleEdit = () => {
            const propertyId = data.data?.row?.id || null;

            router.push({
                name: 'property.form',
                query: { type: 'update', id: propertyId },
            });
        };

        return {
            handleEdit,
        };
    },
};
</script>
