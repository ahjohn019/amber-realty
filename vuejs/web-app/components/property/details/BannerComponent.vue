<script setup>
import { ref } from 'vue';

const propertyDetailsProps = defineProps(['propertyDetails']);
const openBanner = ref(false);

const toggleBanner = () => {
    openBanner.value = true;
};
</script>

<template>
    <div>
        <q-img
            :src="
                propertyDetailsProps.propertyDetails.banner
                    ? propertyDetailsProps.propertyDetails.banner.image.url
                    : 'https://cdn.quasar.dev/img/parallax2.jpg'
            "
            class="cursor-pointer h-[450px]"
            :fit="$q.screen.lt.md ? 'cover' : 'contain'"
            @click="toggleBanner()"
        />

        <q-dialog v-model="openBanner">
            <q-card style="width: 100%">
                <q-card-section>
                    <q-img
                        :src="
                            propertyDetailsProps.propertyDetails.banner
                                ? propertyDetailsProps.propertyDetails.banner
                                      .image.url
                                : 'https://cdn.quasar.dev/img/parallax2.jpg'
                        "
                        :fit="contain"
                    />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>
