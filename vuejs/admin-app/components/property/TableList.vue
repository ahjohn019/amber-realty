<template>
    <div class="q-py-md">
        <q-table
            flat
            ref="propertyRef"
            bordered
            :grid="$q.screen.lt.sm"
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
        >
            <template v-slot:header-cell="props">
                <q-th :props="props">
                    <label :for="props.col.label" class="font-bold text-sm">
                        {{ props.col.label }}
                    </label>
                </q-th>
            </template>
            <template v-slot:body-cell-status="props">
                <q-td :props="props">
                    <TableStatus :data="props" />
                </q-td>
            </template>
        </q-table>
        <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { usePropertyAdminStore } from '@store_admin_endpoints/property/index.js';
import { usePropertyAdminModelStore } from '@store_admin_models/property/index.js';
import { useServerTableStore } from '@store_admin/admin/server/table.js';
import TableStatus from './TableStatus.vue';

import dayjs from 'dayjs';

export default {
    components: {
        TableStatus,
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

        const postPropertyStore = usePropertyAdminStore();
        const modelPropertyStore = usePropertyAdminModelStore();
        const serverTableStore = useServerTableStore();

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
                searchable: [],
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
            pagination.value = serverTableStore.fetchServerPagination(
                response,
                paginate
            );

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
            getSelectedString() {
                console.log(selected.value);
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
