<template>
    <div class="bg-gray-100">
        <div
            class="row container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px] justify-between gap-6"
        >
            <div
                class="col-12 text-xl md:text-4xl font-medium pb-8"
                :class="$q.screen.lt.md ? 'text-center' : ''"
            >
                Mission Statement
            </div>
            <div
                class="col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-white"
                v-for="(mission, key) in missionStatement"
                :key="key"
                data-aos="flip-left"
                data-aos-duration="1500"
            >
                <div class="col-12">
                    <div
                        class="w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-gray-100 border"
                    >
                        <q-icon :name="mission.icon" size="64px"></q-icon>
                    </div>
                </div>
                <div class="col-12 text-xl font-medium h-[50px]">
                    {{ mission.title }}
                </div>
                <div class="col-12 h-[50px]" v-html="mission.description"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const missionStatement = ref([]);

        missionStatement.value = [
            {
                title: 'Innovate for Exceptional Service',
                description:
                    'Commitment in business through innovation <br> to provide exceptional customer service.',
                icon: 'home',
            },
            {
                title: 'Build Strong Connections',
                description:
                    'Build lifetime relationships <br> with our customers and communities.',
                icon: 'real_estate_agent',
            },
            {
                title: 'Maximize Business Success',
                description:
                    'Optimize relationships,<br>service and profitability.',
                icon: 'key',
            },
        ];

        return {
            missionStatement,
        };
    },
};
</script>
