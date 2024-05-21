<script setup>
import NavBar from '@web/components/base/NavBar.vue';
import BaseFooter from '@web/components/base/BaseFooter.vue';
import BackToTop from '@web/components/base/BackToTop.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const backToTopBottomClass = ref('');
const scrollY = ref(0);

const descriptionButtonPosition = ref('');
descriptionButtonPosition.value = 'bottom-[8%]';

const handleScrollY = (value) => {
    scrollY.value = value;

    descriptionButtonPosition.value =
        scrollY.value > 300 ? 'bottom-[15%]' : 'bottom-[8%]';
};

switch (route.name) {
    case 'property.details':
        backToTopBottomClass.value = 'bottom-20';
        break;

    default:
        backToTopBottomClass.value = 'bottom-10';
        break;
}
</script>

<template>
    <div class="overflow-hidden">
        <NavBar />

        <slot
            name="content"
            :descriptionButtonPosition="descriptionButtonPosition"
        ></slot>

        <BackToTop
            :class="`fixed right-3 bg-primary rounded-full cursor-pointer ${backToTopBottomClass}`"
            @scrollY="handleScrollY"
        />

        <BaseFooter />
    </div>
</template>
