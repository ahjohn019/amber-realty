<script setup>
import HeaderContainer from '@web/components/main/HeaderContainer.vue';
import PropertiesContainer from '@web/components/main/PropertiesContainer.vue';
import SocialProof from '@web/components/main/SocialProof.vue';
// import CallToAction from '@web/components/main/CallToAction.vue';
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import MissionStatement from '@web/components/main/MissionStatement.vue';
import FeaturedComponent from '../../../components/main/FeaturedComponent.vue';
import { usePropertyWebStore } from '@store_web_endpoints/property/index.js';
import { useAdminAuthStore } from '@store_admin/base/auth.js';
import { ref, onMounted } from 'vue';

const highlights = ref([]);

const adminAuthStore = useAdminAuthStore();
const getAuthToken = adminAuthStore.fetchSessionToken();

const propertyWebStore = usePropertyWebStore();

const displayHighlights = async () => {
    const response = await propertyWebStore.fetchHighlights(getAuthToken);
    highlights.value = response;
};

onMounted(() => {
    displayHighlights();
});
</script>

<template>
    <BaseLayout>
        <template #content>
            <HeaderContainer data-aos="fade-up" />
            <PropertiesContainer />
            <FeaturedComponent
                :highlights="highlights"
                v-if="highlights.length > 0"
            />
            <MissionStatement />
            <SocialProof />
            <!-- <CallToAction /> -->
        </template>
    </BaseLayout>
</template>
