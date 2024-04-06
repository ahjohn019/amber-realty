<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div
        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
        :style="props.selected ? 'transform: scale(0.95);' : ''"
    >
        <q-card
            bordered
            flat
            :class="
                props.selected
                    ? $q.dark.isActive
                        ? 'bg-grey-9'
                        : 'bg-grey-2'
                    : ''
            "
        >
            <q-list>
                <q-card-section>
                    <q-checkbox
                        dense
                        v-model="props.selected"
                        :label="props.row.name"
                    />
                </q-card-section>
                <q-separator />
                <q-item
                    v-for="col in props.cols.filter(
                        (col) => !['action', 'highlight'].includes(col.name)
                    )"
                    :key="col.name"
                >
                    <q-item-section>
                        <q-item-label>{{ col.label }}</q-item-label>
                        <q-item-label caption>
                            <div
                                v-if="col.name == 'short_description'"
                                v-html="col.value"
                                class="break-all"
                            ></div>
                            <div v-else>
                                {{ col.value }}
                            </div>
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item>
                    <q-item-section>
                        <q-item-label>Highlights</q-item-label>
                        <q-checkbox
                            size="sm"
                            v-model="props.row.checked"
                            val="sm"
                            @click="handleHighlightMobile(props.row)"
                        />
                    </q-item-section>
                </q-item>
                <q-item>
                    <q-item-section>
                        <q-item-label>Action</q-item-label>
                        <div class="q-gutter-md">
                            <q-btn
                                color="primary"
                                icon="visibility"
                                label="View"
                                size="sm"
                                @click="handleView()"
                            />
                            <q-btn
                                color="secondary"
                                icon="edit"
                                label="Edit"
                                size="sm"
                                @click="handleEdit()"
                            />
                            <q-btn
                                color="red"
                                icon="delete"
                                label="Delete"
                                size="sm"
                                @click="handleDelete()"
                            />
                        </div>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>
    </div>
</template>

<script>
import { usePropertyAdminStore } from '@store_admin_endpoints/property/index.js';
import { useAdminAuthStore } from '@store_admin/base/auth.js';
import { ref } from 'vue';

export default {
    props: ['props', 'propertyHighlights'],

    setup(props, { emit }) {
        const postPropertyStore = usePropertyAdminStore();

        // fetch auth token
        const adminAuthStore = useAdminAuthStore();
        const getAuthToken = adminAuthStore.fetchSessionToken();
        const propertyId = props.props.row?.id || null;

        const selected = ref([]);

        const propertySubmitHighlights = ref([]);
        const propertyHighlightsMobile = ref([]);

        propertyHighlightsMobile.value = props.propertyHighlights;

        const handleEdit = () => {
            postPropertyStore.handleEditProperty(propertyId);
        };

        const handleDelete = async () => {
            await postPropertyStore.handleDeleteProperty(
                propertyId,
                getAuthToken
            );
        };

        const handleView = () => {
            postPropertyStore.handleViewProperty(propertyId, props.props);
        };

        const handleHighlightMobile = (props) => {
            props.highlight = props.checked;

            const existHighlights = postPropertyStore.handleHighlights(
                props,
                propertyHighlightsMobile.value
            );

            propertySubmitHighlights.value = existHighlights;
            emit('mobileHighlightsData', propertySubmitHighlights.value);
        };

        const submitHighlight = async () => {
            await postPropertyStore.submitHighlight(
                propertySubmitHighlights.value,
                getAuthToken
            );
        };

        return {
            handleView,
            handleEdit,
            handleDelete,
            handleHighlightMobile,
            selected,
            propertyHighlightsMobile,
            propertySubmitHighlights,
            submitHighlight,
            getSelectedString() {
                console.log(selected.value);
                return selected.value.length === 0
                    ? ''
                    : `${selected.value.length} record${
                          selected.value.length > 1 ? 's' : ''
                      }`;
            },
        };
    },
};
</script>

<style>
.q-item__section .q-btn {
    font-weight: bold;
}
</style>
