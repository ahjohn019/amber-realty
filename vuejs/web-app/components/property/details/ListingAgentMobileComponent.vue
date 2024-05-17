<script setup>
import { ref, onMounted } from 'vue';
import ListingAgentComponent from '@web/components/property/details/ListingAgentComponent.vue';

const enquiriesProps = defineProps(['whatsAppEnquiries']);
const detailsModal = ref(false);

const handleDetailsModal = () => {
    detailsModal.value = true;
};

const checkWindowWidth = () => {
    if (window.innerWidth > 1024) {
        detailsModal.value = false;
    }
};

onMounted(() => {
    window.addEventListener('resize', checkWindowWidth);
});
</script>

<template>
    <div
        class="row justify-between items-center px-3 py-2 border fixed bottom-0 bg-white w-full"
    >
        <div class="col col-auto row gap-2">
            <div class="col">
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
            </div>
            <div class="col col-auto row">
                <div class="col-12 font-bold footer__mobilelabel">Admin</div>
                <div class="col-12">E-(3)1482</div>
            </div>
        </div>
        <div class="col col-auto">
            <q-btn
                color="primary"
                icon="description"
                label="Details"
                @click="handleDetailsModal"
            />
        </div>

        <q-dialog v-model="detailsModal">
            <q-card>
                <q-card-section class="row items-center justify-end">
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <ListingAgentComponent
                        :whatsAppEnquiries="enquiriesProps.whatsAppEnquiries"
                        class="row rounded-lg py-6 gap-4"
                    />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<style>
.footer__mobilelabel {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    width: 55px;
}
</style>
