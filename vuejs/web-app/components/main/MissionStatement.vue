<template>
    <div class="">
        <div
            class="row container mx-auto py-24 justify-between gap-2"
            :class="$q.screen.lt.md ? 'px-4' : 'px-10'"
        >
            <div
                class="col-12 text-3xl font-bold pb-8"
                :class="$q.screen.lt.md ? 'text-center' : ''"
            >
                Mission Statement
            </div>
            <div
                class="col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary"
                v-for="(mission, key) in missionStatement"
                data-aos="flip-left"
                data-aos-duration="1500"
                :key="key"
            >
                <div class="col-12">
                    <div
                        class="w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"
                    >
                        <q-icon :name="mission.icon" size="64px"></q-icon>
                    </div>
                </div>
                <div class="col-12 text-xl font-bold h-[50px] text-white">
                    {{ mission.title }}
                </div>
                <div
                    class="col-12 h-[50px] text-white"
                    v-html="mission.description"
                ></div>
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
