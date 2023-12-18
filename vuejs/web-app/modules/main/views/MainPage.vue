<template>
    <NavBar />
    <HeaderContainer />
    <PropertiesContainer />
    <SocialProof />
    <CallToAction />
    <BaseFooter />
</template>

<script>
import NavBar from '@web/components/base/NavBar.vue';
import HeaderContainer from '@web/components/main/HeaderContainer.vue';
import PropertiesContainer from '@web/components/main/PropertiesContainer.vue';
import SocialProof from '@web/components/main/SocialProof.vue';
import CallToAction from '@web/components/main/CallToAction.vue';
import BaseFooter from '@web/components/base/BaseFooter.vue';

export default {
    components: {
        NavBar,
        HeaderContainer,
        PropertiesContainer,
        SocialProof,
        CallToAction,
        BaseFooter,
    },
};
</script>
