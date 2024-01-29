<template>
    <BaseLayout>
        <template #content>
            <q-layout class="mt-20">
                <HeaderContainer data-aos="fade-up" />
                <PropertiesContainer data-aos="fade-left" />
                <MissionStatement data-aos="fade-right" />
                <SocialProof data-aos="fade-right" />
                <CallToAction data-aos="fade-left" />
            </q-layout>
        </template>
    </BaseLayout>
</template>

<script>
import HeaderContainer from '@web/components/main/HeaderContainer.vue';
import PropertiesContainer from '@web/components/main/PropertiesContainer.vue';
import SocialProof from '@web/components/main/SocialProof.vue';
import CallToAction from '@web/components/main/CallToAction.vue';
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import MissionStatement from '@web/components/main/MissionStatement.vue';

export default {
    components: {
        BaseLayout,
        HeaderContainer,
        PropertiesContainer,
        SocialProof,
        CallToAction,
        MissionStatement,
    },
};
</script>
