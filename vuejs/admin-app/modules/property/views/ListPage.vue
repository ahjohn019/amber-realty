<template>
    <div class="row q-gutter-y-sm justify-between">
        <div class="col col-auto text-2xl">Property List</div>
        <div class="col col-auto text-right">
            <q-btn
                icon-right="add"
                label="Add Property"
                class="!font-bold text-white"
                color="primary"
                :to="{
                    name: 'property.form',
                    query: { type: 'create' },
                }"
            />
        </div>
    </div>
    <TableList />
</template>

<script>
import TableList from '@admin/components/property/TableList.vue';

export default {
    components: {
        TableList,
    },
};
</script>
