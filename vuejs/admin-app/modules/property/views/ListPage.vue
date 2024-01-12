<template>
    <div class="row">
        <div class="col text-2xl">Property List</div>
        <div class="col text-right">
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
