<template>
    <transition name="fade">
        <div
            id="pagetop"
            class="fixed right-5 bottom-10 bg-primary rounded-full cursor-pointer"
            :class="scrollY > 300 ? '' : 'hidden'"
            @click="toTop"
        >
            <q-icon name="expand_less" color="secondary" size="45px" />
        </div>
    </transition>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    setup() {
        const scrollTimer = ref(0);
        const scrollY = ref(0);

        const handleScroll = () => {
            if (scrollTimer.value) return;

            scrollTimer.value = setTimeout(() => {
                scrollY.value = window.scrollY;
                clearTimeout(scrollTimer.value);
                scrollTimer.value = 0;
            }, 100);
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

        return {
            scrollTimer,
            scrollY,
            handleScroll,
            toTop,
        };
    },
};
</script>
