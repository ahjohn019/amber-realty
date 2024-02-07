<template>
    <div class="col-12 row q-gutter-y-md justify-between">
        <div
            class="col-12 bg-secondary rounded row p-10 row q-gutter-y-md"
            :class="$q.screen.lt.md ? 'text-center p-4' : 'text-left p-10'"
        >
            <div class="col-12">
                <div class="text-3xl font-bold pb-4">Short Descriptions</div>
                <span>{{ propertyDetails.short_description }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propertyDetails'],
};
</script>
