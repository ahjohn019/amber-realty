<template>
    <div
        class="col-12 row q-gutter-y-md bg-primary text-white rounded-lg"
        :class="$q.screen.lt.md ? 'p-4' : 'p-10'"
    >
        <div class="col-12 text-3xl font-bold border-b pb-4">Descriptions</div>
        <div class="col-12" v-html="propertyDetails.description"></div>
    </div>
</template>

<script>
export default {
    props: ['propertyDetails'],
};
</script>
