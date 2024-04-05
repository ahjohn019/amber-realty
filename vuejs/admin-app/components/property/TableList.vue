<template>
    <div class="q-py-md">
        <q-table
            flat
            ref="propertyRef"
            bordered
            :grid="$q.screen.lt.md"
            :rows="rows"
            :columns="columns"
            v-model:pagination="pagination"
            v-model:selected="selected"
            :loading="loading"
            binary-state-sort
            @request="onRequest"
            :selected-rows-label="getSelectedString"
            selection="multiple"
            row-key="name"
            class="property-table"
            wrap-cells
        >
            <template v-slot:top-right>
                <q-btn
                    color="primary"
                    icon="star"
                    class="mr-4"
                    v-if="isHighlighted"
                    @click="submitHighlight(propertyData)"
                />
                <q-input
                    borderless
                    dense
                    debounce="300"
                    v-model="searchKeyword"
                    placeholder="Search"
                    class="border px-4 rounded-lg"
                    @keyup.enter="handlePostKeywords(searchKeyword)"
                >
                    <template v-slot:append>
                        <q-icon
                            v-if="searchKeyword !== ''"
                            name="close"
                            @click="searchKeyword = ''"
                            class="cursor-pointer"
                        />
                        <q-icon
                            name="search"
                            @click="handlePostKeywords(searchKeyword)"
                            class="cursor-pointer"
                        />
                    </template>
                </q-input>
            </template>
            <template v-slot:header-cell="props">
                <q-th :props="props" style="text-wrap: nowrap">
                    <label :for="props.col.label" class="font-bold text-sm">
                        {{ props.col.label }}
                    </label>
                </q-th>
            </template>
            <template v-slot:body-cell-short_description="props">
                <q-td :props="props">
                    <div class="break-all" v-html="props.value"></div>
                </q-td>
            </template>
            <template v-slot:body-cell-highlight="props">
                <q-td :props="props">
                    <q-checkbox
                        size="sm"
                        v-model="props.row.checked"
                        val="sm"
                        @click="handleHighlight(props.row)"
                    />
                </q-td>
            </template>
            <template v-slot:body-cell-action="props">
                <q-td :props="props">
                    <TableStatus :data="props" />
                </q-td>
            </template>
            <template v-slot:item="props">
                <TableMobileResponsive :props="props" />
            </template>
        </q-table>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { usePropertyAdminStore } from '@store_admin_endpoints/property/index.js';
import { usePropertyAdminModelStore } from '@store_admin_models/property/index.js';
import { useServerTableStore } from '@store_admin/admin/server/table.js';
import { useAdminAuthStore } from '@store_admin/base/auth.js';
import TableMobileResponsive from './TableMobileResponsive.vue';
import TableStatus from './TableStatus.vue';

import dayjs from 'dayjs';

export default {
    components: {
        TableStatus,
        TableMobileResponsive,
    },

    setup() {
        const propertyRef = ref();
        const rows = ref([]);
        const columns = ref([]);

        const loading = ref(false);
        const pagination = ref({
            sortBy: 'name',
            descending: false,
            page: 1,
            rowsPerPage: 15,
            rowsNumber: null,
        });
        const selected = ref([]);
        const payload = ref({});
        const searchKeyword = ref('');

        const postPropertyStore = usePropertyAdminStore();
        const modelPropertyStore = usePropertyAdminModelStore();
        const serverTableStore = useServerTableStore();

        const adminAuthStore = useAdminAuthStore();
        const getAuthToken = adminAuthStore.fetchSessionToken();

        const propertySubmitHighlights = ref([]);
        const propertyHighlights = ref([]);
        const isHighlighted = ref(false);

        const handleHighlight = (props) => {
            props.highlight = props.checked;

            isHighlighted.value = true;

            const existHighlights = propertyHighlights.value;

            const isHighlights = existHighlights.findIndex((item) => {
                return props.id === item.id;
            });

            if (isHighlights !== -1) {
                existHighlights[isHighlights].highlight = props.highlight;
            } else {
                existHighlights.push({
                    ...props,
                    highlight: props.checked,
                });
            }

            propertySubmitHighlights.value = existHighlights;
        };

        const submitHighlight = async () => {
            await postPropertyStore.submitHighlight(
                propertySubmitHighlights.value,
                getAuthToken
            );
        };

        const fetchPagination = (pagination) => {
            return serverTableStore.fetchPaginationData(
                pagination,
                payload.value
            );
        };

        const handlePostKeywords = (keywords) => {
            payload.value = {
                ...payload.value,
                keyword: keywords,
                searchable: [
                    'name',
                    'short_description',
                    'price',
                    'listing_type',
                ],
                page: 1,
                attribute: 'name',
                sortable: 'asc',
                paginate: 15,
            };

            fetchServer(null, payload.value);
        };

        const fetchServer = async (paginate, payload) => {
            const response = await serverTableStore.fetchTableListData(
                paginate,
                loading,
                postPropertyStore,
                'fetchPropertyList',
                payload
            );

            propertyHighlights.value = response.data;

            const updatedData = response.data.map((item) => {
                return {
                    ...item,
                    created_by: item.user.name,
                    created_at: dayjs(item.created_at).format(
                        'YYYY-MM-DD HH:mm:ss'
                    ),
                };
            });

            rows.value = updatedData;

            if (paginate != null) {
                pagination.value = serverTableStore.fetchServerPagination(
                    response,
                    paginate
                );
            }

            payload = serverTableStore.fetchServerPayload(payload, response);
            loading.value = false;

            return response;
        };

        const onRequest = async (props) => {
            const payload = fetchPagination(props.pagination);
            const fetchColumnList = modelPropertyStore.fetchPropertyColumns();

            columns.value = fetchColumnList;
            return fetchServer(props.pagination, payload);
        };

        onMounted(() => {
            propertyRef.value.requestServerInteraction();
        });

        return {
            propertyRef,
            loading,
            pagination,
            columns,
            rows,
            onRequest,
            selected,
            fetchPagination,
            handlePostKeywords,
            searchKeyword,
            handleHighlight,
            submitHighlight,
            isHighlighted,
            propertySubmitHighlights,
            getSelectedString() {
                return selected.value.length === 0
                    ? ''
                    : `${selected.value.length} record${
                          selected.value.length > 1 ? 's' : ''
                      } selected of ${rows.value.length}`;
            },
        };
    },
};
</script>
