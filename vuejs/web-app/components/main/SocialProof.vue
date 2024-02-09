<template>
    <div class="bg-primary">
        <div
            class="container mx-auto row social-proof-container mx-auto flex justify-center items-center text-white gap-y-6"
        >
            <div
                class="col-6 col-md-3 text-center q-gutter-y-sm"
                v-for="(data, idx) in payload"
                :key="idx"
            >
                <div
                    class="font-bold"
                    :class="$q.screen.lt.sm ? 'text-4xl' : 'text-7xl'"
                >
                    <number
                        class="bold transition"
                        ref="number2"
                        :from="numberInit"
                        :to="data.title || numberInit"
                        :duration="numberDuration"
                    />{{ data.quote }}
                </div>
                <div :class="$q.screen.lt.sm ? 'text-md' : 'text-lg'">
                    {{ data.content }}
                </div>
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
    padding: 88px 0 88px 0;
}
</style>
