<template>
    <div class="col-12 row justify-between">
        <div class="col-12 rounded row py-10">
            <div class="col-12 row q-gutter-y-md">
                <div
                    class="col-12 text-3xl font-bold border-b border-grey flex items-center pb-4"
                >
                    Short Descriptions
                </div>

                <div
                    class="col-12 break-words"
                    v-html="propertyDetails.short_description"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propertyDetails'],
};
</script>
