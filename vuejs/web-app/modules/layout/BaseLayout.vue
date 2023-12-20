<template>
    <NavBar />
    <slot name="content"></slot>
    <BaseFooter />
</template>

<script>
import NavBar from '@web/components/base/NavBar.vue';
import BaseFooter from '@web/components/base/BaseFooter.vue';

export default {
    components: {
        NavBar,
        BaseFooter,
    },
};
</script>
