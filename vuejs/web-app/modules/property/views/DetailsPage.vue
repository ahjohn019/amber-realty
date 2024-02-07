<template>
    <BaseLayout>
        <template #content>
            <div
                class="container mx-auto row q-gutter-y-lg"
                style="margin-top: 2.5rem; width: 75%"
            >
                <div
                    class="col-12 row justify-between items-center pt-8 gap-4 md:gap-0"
                    data-aos="fade-up"
                >
                    <div
                        class="col-12 col-md-7 q-gutter-y-md"
                        :class="$q.screen.lt.md ? 'text-center' : ''"
                    >
                        <div class="text-xl font-bold">
                            {{ propertyDetails.name }}
                        </div>
                    </div>
                    <div
                        class="col-12 col-md-5 row q-gutter-y-md"
                        :class="$q.screen.lt.md ? 'text-right' : 'text-center'"
                    >
                        <div
                            class="col-12 row items-center gap-4 md:gap-0 justify-end"
                        >
                            <div
                                class="col-12 flex items-center pt-4 gap-2"
                                :class="
                                    $q.screen.lt.md
                                        ? 'justify-center'
                                        : 'justify-end'
                                "
                            >
                                <div
                                    class="bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize"
                                >
                                    For
                                    {{ propertyDetails.listing_type }}
                                </div>
                                <div :class="$q.screen.lt.md ? '' : 'ml-4'">
                                    <span class="text-2xl font-bold"
                                        >RM {{ propertyDetails.price }}</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="col-12" v-if="propertyDetails.details">
                            <div
                                class="text-sm"
                                :class="
                                    $q.screen.lt.md
                                        ? 'text-center'
                                        : 'text-right'
                                "
                            >
                                <q-chip
                                    color="teal"
                                    text-color="white"
                                    :icon="room.icon"
                                    v-for="(room, key) in propertyRoomDetails"
                                    :key="key"
                                >
                                    {{ propertyDetails.details[room.value] }}
                                    {{ room.name }}
                                </q-chip>
                            </div>
                        </div>
                        <div
                            class="row col-12"
                            :class="
                                $q.screen.lt.md
                                    ? 'justify-center'
                                    : 'justify-end'
                            "
                        >
                            <q-chip
                                color="primary"
                                text-color="white"
                                v-for="(contact, key) in contactNumber"
                                :key="key"
                            >
                                <a
                                    :href="
                                        'https://wa.me/' +
                                        contact.contact +
                                        '?text=' +
                                        encodeURIComponent(whatsAppEnquiries)
                                    "
                                    target="_blank"
                                >
                                    <q-img
                                        src="/images/amber_whatsapp.png"
                                        alt=""
                                        width="20px"
                                    />
                                    <span class="align-middle ml-2 text-sm">{{
                                        contact.name
                                    }}</span>
                                </a>
                            </q-chip>
                        </div>
                    </div>
                </div>
                <div
                    class="col-12 row justify-between gap-6"
                    data-aos="fade-right"
                >
                    <div class="col-12 row q-gutter-y-lg">
                        <div class="col-12 row">
                            <div
                                class="col-12"
                                :class="
                                    propertyDetails.details ? 'col-lg-9' : ''
                                "
                                v-if="propertyDetails.banner"
                            >
                                <q-img
                                    :src="propertyDetails.banner.image.url"
                                    class="rounded-lg"
                                    :ratio="16 / 9"
                                />
                            </div>
                            <div
                                class="col-12 col-lg-3 text-center"
                                v-if="propertyDetails.details"
                            >
                                <q-card
                                    class="my-card flex flex-col justify-center h-full"
                                >
                                    <q-card-section
                                        v-for="(
                                            detail, key
                                        ) in propertyDetailsSection"
                                        :key="key"
                                        class="q-pb-sm"
                                    >
                                        <div class="text-h6">
                                            {{ detail.name }}
                                        </div>
                                        <div class="text-subtitle2">
                                            {{ detail.front_label }}

                                            {{
                                                detail.value == 'price'
                                                    ? propertyDetails[
                                                          detail.value
                                                      ]
                                                    : propertyDetails.details[
                                                          detail.value
                                                      ]
                                            }}
                                            {{ detail.label }}
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>

                        <div class="col-12 row justify-between">
                            <div class="col-12" v-if="propertyDetails.sliders">
                                <Splide
                                    :options="sliderOptions"
                                    aria-label="My Favorite Images"
                                >
                                    <SplideSlide
                                        v-for="(
                                            slider, sliderKey
                                        ) in propertyDetails.sliders"
                                        :key="sliderKey"
                                    >
                                        <q-img
                                            :src="slider.image.url"
                                            class="h-full"
                                            fit="contain"
                                        />
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row q-gutter-y-md justify-between">
                        <div
                            class="col-12 bg-secondary rounded row p-6 row q-gutter-y-md"
                            :class="
                                $q.screen.lt.md
                                    ? 'text-center p-4'
                                    : 'text-left p-10'
                            "
                        >
                            <div class="col-12">
                                <div class="text-3xl font-bold pb-4">
                                    Short Descriptions
                                </div>
                                <span>{{
                                    propertyDetails.short_description
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-12 row q-gutter-y-md bg-primary text-white rounded-lg"
                    :class="
                        $q.screen.lt.md ? 'text-center p-4' : 'text-left p-10'
                    "
                    data-aos="fade-up"
                >
                    <div class="col-12 text-3xl font-bold border-b pb-4">
                        Overview
                    </div>
                    <div
                        class="col-12"
                        v-html="propertyDetails.description"
                    ></div>
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import { usePropertyWebStore } from '@store_web/property/index.js';
import { ref, onMounted } from 'vue';

export default {
    components: {
        BaseLayout,
    },

    setup() {
        const sliderOptions = ref({});
        const webProperty = usePropertyWebStore();
        const propertyDetails = ref({});
        const sliderImageNumber = ref(0);
        const contactNumber = ref([]);
        const propertyRoomDetails = ref([]);
        const propertyDetailsSection = ref([]);
        const whatsAppEnquiries = ref('');

        const fetchPropertyDetails = async () => {
            const response = await webProperty.fetchPropertyDetails();
            propertyDetails.value = response;
            sliderImageNumber.value = response.sliders?.length || 0;

            sliderListOptions(sliderImageNumber.value);

            whatsAppEnquiries.value =
                'I am interested in ' +
                propertyDetails.value.name +
                ' priced at RM' +
                propertyDetails.value.price +
                '. Can you provide more details?';

            return response;
        };

        const sliderListOptions = async (sliderNumber) => {
            sliderOptions.value = {
                type: 'loop',
                perPage: sliderNumber > 3 ? 3 : sliderNumber,
                gap: '1rem',
                breakpoints: {
                    1024: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1,
                        height: 350,
                    },
                },
                height: 500,
            };
        };

        contactNumber.value = [
            { name: 'Agent Ng', contact: '60192137731' },
            { name: 'Agent Doo', contact: '60123729668' },
            { name: 'Agent Teng', contact: '60193560561' },
        ];

        propertyRoomDetails.value = [
            { name: 'Beds', icon: 'bed', value: 'bedroom' },
            { name: 'Bath', icon: 'bathtub', value: 'bathroom' },
            { name: 'sqft', icon: 'dashboard', value: 'square_feet' },
        ];

        propertyDetailsSection.value = [
            {
                name: 'Lot Area',
                label: 'sqft',
                front_label: '',
                value: 'square_feet',
            },
            {
                name: 'Bedroom',
                label: 'rooms',
                front_label: '',
                value: 'bedroom',
            },
            {
                name: 'Baths',
                label: 'baths',
                front_label: '',
                value: 'bathroom',
            },
            { name: 'Tenure', label: '', front_label: '', value: 'tenure' },
            { name: 'Price', label: '', front_label: 'RM', value: 'price' },
        ];

        onMounted(() => {
            fetchPropertyDetails();
            sliderListOptions();
        });

        return {
            sliderOptions,
            propertyDetails,
            fetchPropertyDetails,
            sliderListOptions,
            contactNumber,
            propertyRoomDetails,
            propertyDetailsSection,
            whatsAppEnquiries,
        };
    },
};
</script>
