<template>
    <div>
        <q-img
            :src="
                propertyDetails.banner
                    ? propertyDetails.banner.image.url
                    : 'https://cdn.quasar.dev/img/parallax2.jpg'
            "
            class="cursor-pointer h-[550px]"
            :fit="$q.screen.lt.md ? 'cover' : 'contain'"
            @click="toggleBanner()"
        />

        <q-dialog v-model="openBanner">
            <q-card style="width: 100%">
                <q-card-section>
                    <q-img
                        :src="
                            propertyDetails.banner
                                ? propertyDetails.banner.image.url
                                : 'https://cdn.quasar.dev/img/parallax2.jpg'
                        "
                        :fit="contain"
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
