<template>
    <div
        class="row q-gutter-y-md border rounded-lg bg-slate-50"
        :class="$q.screen.lt.md ? 'p-4' : 'p-10'"
    >
        <div
            class="col-12 text-3xl font-bold border-b-2 pb-4"
            :class="$q.screen.lt.md ? 'text-center' : ''"
        >
            Listing Agent
        </div>
        <div
            class="col-12 row items-center border-b-2 pb-6"
            v-for="(agent, key) in contactAgent"
            :key="key"
        >
            <div class="col" :class="$q.screen.lt.sm ? 'col-4' : 'col-auto'">
                <q-avatar size="75px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
            </div>
            <div
                class="col row pl-4"
                :class="$q.screen.lt.md ? '' : 'col-auto'"
            >
                <div
                    class="col-12 pl-2 font-bold"
                    :class="$q.screen.lt.md ? '' : 'text-xl'"
                >
                    {{ agent.name }}
                </div>
                <div class="col-12 pl-2">{{ agent.contact }}</div>
                <div class="col-12">
                    <q-chip color="teal" text-color="white">
                        <a
                            :href="
                                'https://wa.me/' +
                                agent.contact +
                                '?text=' +
                                encodeURIComponent(whatsAppEnquiries)
                            "
                            target="_blank"
                        >
                            <q-img
                                src="/images/amber_whatsapp.png"
                                alt=""
                                width="20px"
                            />
                            <span
                                class="align-middle ml-1 px-2 text-sm font-bold"
                                >Whatsapp</span
                            >
                        </a>
                    </q-chip>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ['whatsAppEnquiries'],
    setup() {
        const contactAgent = ref([]);

        contactAgent.value = [
            { name: 'Agent Ng', contact: '60192137731' },
            { name: 'Agent Doo', contact: '60123729668' },
            { name: 'Agent Teng', contact: '60193560561' },
        ];

        return {
            contactAgent,
        };
    },
};
</script>
