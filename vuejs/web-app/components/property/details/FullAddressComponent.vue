<template>
    <div class="col-12 row gap-4">
        <div
            class="col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"
        >
            About the location
        </div>
        <div class="col-12 google-maps">
            <iframe
                width="600"
                height="450"
                style="border: 0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="fullAddress.data"
            >
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propertyDetails', 'fullAddress'],
};
</script>

<style>
.google-maps {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
}
.google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}
</style>
