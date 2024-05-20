<script setup>
const propertyDetailsProps = defineProps(['propertyDetails']);
</script>

<template>
    <div class="col-12 row justify-between">
        <div class="col-12 rounded row md:py-10">
            <div class="col-12 row q-gutter-y-md">
                <div
                    class="col-12 text-xl md:text-4xl font-bold border-b border-grey flex items-center pb-4"
                >
                    Details
                </div>

                <div
                    class="col-12 break-words"
                    v-html="
                        propertyDetailsProps.propertyDetails.short_description
                    "
                ></div>
            </div>
        </div>
    </div>
</template>
