import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { useAdminAuthStore } from '@shared_admin/base/auth.js';

export const useServerTableStore = defineStore('server_table_admin', {
    state: () => ({
        post_table_admin: null,
        router: useRouter(),
    }),

    actions: {
        fetchPaginationData(pagination, payload) {
            const { page, rowsPerPage, sortBy, descending } = pagination;

            payload = {
                ...payload,
                attribute: sortBy,
                sortable: descending ? 'desc' : 'asc',
                page,
                paginate: rowsPerPage,
            };

            if (payload.paginate <= 0) {
                payload.paginate = pagination.rowsNumber;
            }

            return payload;
        },

        fetchServerPagination(response, paginate) {
            return {
                rowsNumber: response.meta.total,
                page: paginate.page,
                rowsPerPage: paginate.rowsPerPage,
                sortBy: paginate.sortBy,
                descending: paginate.descending,
            };
        },

        fetchServerPayload(payload, response) {
            return {
                ...payload,
                rowsPerPage: response.meta.per_page,
            };
        },

        async fetchTableListData(
            paginate,
            loading,
            fetchModel,
            fetchModelList,
            payload
        ) {
            const adminAuthStore = useAdminAuthStore();
            const getAuthToken = adminAuthStore.fetchSessionToken();

            const { page } = paginate ?? {
                page: 1,
                rowsPerPage: 15,
                sortBy: null,
                descending: null,
            };

            loading.value = true;

            const response = await fetchModel[fetchModelList](
                getAuthToken,
                page,
                payload
            );

            return response;
        },
    },
});
