<script setup>
import { ref } from 'vue';

const dialog = ref(false);
const maximizedToggle = ref(true);
const props = defineProps(['propertyDetails']);
</script>

<template>
    <div>
        <q-btn
            icon="description"
            round
            color="primary"
            size="18px"
            @click="dialog = true"
        />

        <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
        >
            <q-card>
                <q-bar style="height: 50px">
                    <q-space />

                    <q-btn
                        flat
                        icon="minimize"
                        @click="maximizedToggle = false"
                        :disable="!maximizedToggle"
                    >
                        <q-tooltip
                            v-if="maximizedToggle"
                            class="bg-white text-primary"
                            >Minimize</q-tooltip
                        >
                    </q-btn>
                    <q-btn
                        flat
                        icon="crop_square"
                        @click="maximizedToggle = true"
                        :disable="maximizedToggle"
                    >
                        <q-tooltip
                            v-if="!maximizedToggle"
                            class="bg-white text-primary"
                            >Maximize</q-tooltip
                        >
                    </q-btn>
                    <q-btn flat icon="close" v-close-popup>
                        <q-tooltip class="bg-white text-primary"
                            >Close</q-tooltip
                        >
                    </q-btn>
                </q-bar>

                <q-card-section
                    class="prose max-w-none prose-strong:font-black prose-h1:text-7xl prose-h2:text-6xl prose-h3:text-5xl md:py-10"
                >
                    <div v-html="props.propertyDetails.description"></div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>
