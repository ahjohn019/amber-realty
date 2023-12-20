<template>
    <BaseLayout>
        <template #content>
            <HeaderContainer />
            <PropertiesContainer />
            <SocialProof />
            <CallToAction />
        </template>
    </BaseLayout>
</template>

<script>
import HeaderContainer from '@web/components/main/HeaderContainer.vue';
import PropertiesContainer from '@web/components/main/PropertiesContainer.vue';
import SocialProof from '@web/components/main/SocialProof.vue';
import CallToAction from '@web/components/main/CallToAction.vue';
import BaseLayout from '@web/modules/layout/BaseLayout.vue';

export default {
    components: {
        BaseLayout,
        HeaderContainer,
        PropertiesContainer,
        SocialProof,
        CallToAction,
    },
};
</script>
