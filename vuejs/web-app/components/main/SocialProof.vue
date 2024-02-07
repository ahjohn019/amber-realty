<template>
    <div class="bg-primary">
        <div
            class="row social-proof-container mx-auto flex justify-center items-center text-white gap-6 md:gap-0"
        >
            <div
                class="col-6 col-md-3 text-center q-gutter-y-sm"
                v-for="(data, idx) in payload"
                :key="idx"
            >
                <div class="text-6xl font-bold">
                    <number
                        class="bold transition"
                        ref="number2"
                        :from="numberInit"
                        :to="data.title || numberInit"
                        :duration="numberDuration"
                    />{{ data.quote }}
                </div>
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
        const numberInit = 0;
        const numberDuration = 5;

        payload.value = [
            { title: '11', content: 'Years in the industry', quote: '+' },
            { title: '100', content: 'Customer satisfaction', quote: '%' },
            { title: '5', content: 'Properties sold', quote: 'K' },
            { title: '1', content: 'Country served', quote: '' },
        ];

        return {
            payload,
            numberInit,
            numberDuration,
        };
    },
};
</script>

<style>
.social-proof-container {
    padding: 88px 125px 88px 125px;
}

@media only screen and (max-width: 768px) {
    .social-proof-container {
        padding: 88px 0 88px 0;
    }
}
</style>
