<template>
    <div class="overflow-hidden">
        <NavBar />
        <slot name="content"></slot>
        <BaseFooter />
    </div>
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
