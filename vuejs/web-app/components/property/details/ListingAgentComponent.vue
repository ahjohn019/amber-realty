<script setup>
import { ref } from 'vue';

const enquiriesProps = defineProps(['whatsAppEnquiries']);
const contactAgent = ref([]);

contactAgent.value = [
    {
        name: 'Admin',
        contact: '60192140561',
        contactLabel: '019-2140561',
    },
    {
        name: 'Admin',
        contact: '60123729668',
        contactLabel: '012-3729668',
    },
    {
        name: 'Admin',
        contact: '60193560561',
        contactLabel: '019-3560561',
    },
];
</script>

<template>
    <div>
        <div class="col-12 flex gap-4">
            <div>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
            </div>
            <div>
                <div class="font-bold text-xl">Admin</div>
                <div class="text-sm">E-(3)1482</div>
            </div>
        </div>

        <div class="col-12">
            <q-separator color="grey-4" />
        </div>

        <div class="col-12 row gap-6">
            <div
                class="col-12 row items-center"
                v-for="(agent, key) in contactAgent"
                :key="key"
            >
                <div class="col-12">
                    <q-chip
                        color="white"
                        text-color="black"
                        class="w-full py-4 border shadow-md"
                        size="22px"
                    >
                        <a
                            :href="
                                'https://wa.me/' +
                                agent.contact +
                                '?text=' +
                                encodeURIComponent(
                                    enquiriesProps.whatsAppEnquiries
                                )
                            "
                            target="_blank"
                        >
                            <q-avatar size="24px">
                                <q-img src="/images/amber_whatsapp.png" />
                            </q-avatar>
                            <span class="text-lg ml-2">Chat On Whatsapp</span>
                        </a>
                    </q-chip>
                </div>
                <div class="col-12">
                    <q-chip
                        color="white"
                        text-color="black"
                        class="w-full py-4 border shadow-md"
                        size="22px"
                    >
                        <a :href="`tel:${agent.contact}`">
                            <q-avatar>
                                <q-icon name="phone" size="24px" />
                            </q-avatar>
                            <span class="text-lg ml-2">{{
                                agent.contactLabel
                            }}</span>
                        </a>
                    </q-chip>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.q-anchor--skip.q-chip__content {
    justify-content: center;
}
</style>
