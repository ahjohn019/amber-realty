<script setup>
import { onMounted, ref } from 'vue';

const scrollTimer = ref(0);
const scrollY = ref(0);
const emit = defineEmits(['scrollY']);

const handleScroll = () => {
    if (scrollTimer.value) return;

    scrollTimer.value = setTimeout(() => {
        scrollY.value = window.scrollY;
        clearTimeout(scrollTimer.value);
        scrollTimer.value = 0;
    }, 100);

    emit('scrollY', scrollY.value);
};

const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<template>
    <div :class="scrollY > 300 ? '' : 'hidden'" @click="toTop">
        <q-icon name="expand_less" color="secondary" size="45px" />
    </div>
</template>
