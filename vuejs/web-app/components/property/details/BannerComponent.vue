<template>
    <div v-if="propertyDetails.banner">
        <q-img
            :src="propertyDetails.banner.image.url"
            class="h-[450px] cursor-pointer"
            fit="cover"
            @click="toggleBanner()"
        />

        <q-dialog v-model="openBanner">
            <q-card style="width: 700px; max-width: 80vw">
                <q-card-section>
                    <q-img
                        :src="propertyDetails.banner.image.url"
                        :ratio="16 / 9"
                    />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['propertyDetails'],
    setup() {
        const openBanner = ref(false);

        const toggleBanner = () => {
            openBanner.value = true;
        };

        return {
            openBanner,
            toggleBanner,
        };
    },
};
</script>
