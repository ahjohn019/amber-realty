<template>
    <div class="overflow-hidden">
        <NavBar />

        <slot name="content"></slot>
        <BackToTop />
        <BaseFooter />
    </div>
</template>

<script>
import NavBar from '@web/components/base/NavBar.vue';
import BaseFooter from '@web/components/base/BaseFooter.vue';
import BackToTop from '@web/components/base/BackToTop.vue';

// import { onMounted, ref } from 'vue';

export default {
    components: {
        NavBar,
        BaseFooter,
        BackToTop,
    },
};
</script>
