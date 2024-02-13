<template>
    <div
        class="col-12 row q-gutter-y-md rounded-lg prose max-w-none prose-strong:font-black prose-h1:text-7xl prose-h2:text-6xl prose-h3:text-5xl border rounded-lg bg-slate-50"
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
