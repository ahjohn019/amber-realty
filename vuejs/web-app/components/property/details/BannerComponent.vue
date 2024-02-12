<template>
    <div>
        <q-img
            :src="
                propertyDetails.banner
                    ? propertyDetails.banner.image.url
                    : '/images/Image_not_available.png'
            "
            class="cursor-pointer h-[550px]"
            :fit="$q.screen.lt.md ? 'cover' : 'contain'"
            @click="toggleBanner()"
        />

        <q-dialog v-model="openBanner">
            <q-card style="width: 700px; max-width: 80vw">
                <q-card-section>
                    <q-img
                        :src="
                            propertyDetails.banner
                                ? propertyDetails.banner.image.url
                                : '/images/Image_not_available.png'
                        "
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
