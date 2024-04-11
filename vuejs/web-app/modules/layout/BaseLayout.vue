<template>
    <div class="overflow-hidden">
        <NavBar />

        <slot name="content"></slot>
        <BackToTop
            :class="`fixed right-3 bg-primary rounded-full cursor-pointer ${backToTopBottomClass}`"
        />
        <BaseFooter />
    </div>
</template>

<script>
import NavBar from '@web/components/base/NavBar.vue';
import BaseFooter from '@web/components/base/BaseFooter.vue';
import BackToTop from '@web/components/base/BackToTop.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
    components: {
        NavBar,
        BaseFooter,
        BackToTop,
    },

    setup() {
        const route = useRoute();
        const backToTopBottomClass = ref('');

        switch (route.name) {
            case 'property.details':
                backToTopBottomClass.value = 'bottom-20';
                break;

            default:
                backToTopBottomClass.value = 'bottom-10';
                break;
        }

        return { backToTopBottomClass };
    },
};
</script>
