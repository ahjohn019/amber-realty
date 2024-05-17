<script setup>
const propertyDetailsProps = defineProps(['propertyDetails']);
</script>

<template>
    <div
        class="col-12 row prose max-w-none prose-strong:font-black prose-h1:text-7xl prose-h2:text-6xl prose-h3:text-5xl md:py-10"
    >
        <div
            class="col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"
        >
            Descriptions
        </div>
        <div
            class="col-12"
            v-html="propertyDetailsProps.propertyDetails.description"
        ></div>
    </div>
</template>
