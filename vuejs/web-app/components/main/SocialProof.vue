<template>
    <div class="bg-primary">
        <div
            class="row social-proof-container mx-auto flex justify-center items-center text-white gap-6 md:gap-0"
        >
            <div
                class="col-6 col-md-3 text-center"
                v-for="(data, idx) in payload"
                :key="idx"
            >
                <div class="social-proof-title">{{ data.title }}</div>
                <div class="text-lg">{{ data.content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const payload = ref({});

        payload.value = [
            { title: '20+', content: 'Years in the industry' },
            { title: '90%', content: 'Customer satisfaction' },
            { title: '10K', content: 'Properties sold' },
            { title: '50+', content: 'Country served' },
        ];

        return {
            payload,
        };
    },
};
</script>

<style>
.social-proof-container {
    padding: 88px 125px 88px 125px;
}
.social-proof-title {
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
}

@media only screen and (max-width: 768px) {
    .social-proof-container {
        padding: 88px 0 88px 0;
    }
}
</style>
