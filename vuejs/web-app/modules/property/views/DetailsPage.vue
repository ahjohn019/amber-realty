<template>
    <BaseLayout>
        <template #content>
            <div
                class="container mx-auto row q-gutter-y-lg"
                style="margin-top: 3.5rem; width: 75%"
            >
                <div
                    class="col-12 row justify-between items-center pt-8 gap-4 md:gap-0"
                    data-aos="fade-up"
                >
                    <div
                        class="col-12 col-md-7 q-gutter-y-md"
                        :class="$q.screen.lt.md ? 'text-center' : ''"
                    >
                        <div class="text-3xl font-bold">
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
                                    class="bg-secondary featured-label text-center py-2 px-4 font-bold rounded"
                                    v-if="propertyDetails.details"
                                >
                                    For
                                    {{ propertyDetails.details.listing_type }}
                                </div>
                                <div :class="$q.screen.lt.md ? '' : 'ml-4'">
                                    <span class="text-2xl font-bold"
                                        >RM {{ propertyDetails.price }}</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-12 row gap-2 justify-end"
                            v-if="propertyDetails.details"
                        >
                            <div
                                class="col-12 col-lg-3 text-sm"
                                :class="
                                    $q.screen.lt.md
                                        ? 'text-center'
                                        : 'text-right'
                                "
                            >
                                <q-icon
                                    name="bed"
                                    size="22px"
                                    class="align-middle"
                                />
                                <span class="align-middle ml-2 text-xl"
                                    >{{
                                        propertyDetails.details.bedroom
                                    }}
                                    Beds</span
                                >
                            </div>
                            <div
                                class="col-12 col-lg-3 text-sm"
                                :class="
                                    $q.screen.lt.md
                                        ? 'text-center'
                                        : 'text-right'
                                "
                            >
                                <q-icon
                                    name="bathroom"
                                    size="22px"
                                    class="align-middle"
                                />
                                <span class="align-middle ml-2 text-xl"
                                    >{{
                                        propertyDetails.details.bathroom
                                    }}
                                    Bath</span
                                >
                            </div>
                            <div
                                class="col-12 col-lg-3 text-sm"
                                :class="
                                    $q.screen.lt.md
                                        ? 'text-center'
                                        : 'text-right'
                                "
                            >
                                <q-icon
                                    name="dashboard"
                                    size="22px"
                                    class="align-middle"
                                />
                                <span class="align-middle ml-2 text-xl"
                                    >{{
                                        propertyDetails.details.square_feet
                                    }}
                                    sqft</span
                                >
                            </div>
                        </div>
                        <div class="row col-12 gap-2 justify-end">
                            <div
                                class="col-12 col-lg-3 text-sm bg-primary text-white rounded-lg p-1 text-center"
                                v-for="(contact, key) in contactNumber"
                                :key="key"
                            >
                                <a
                                    :href="
                                        'https://wa.me/' +
                                        contact.contact +
                                        '?text=Im%20interested%20in%20property%20for%20sale'
                                    "
                                    target="_blank"
                                >
                                    <q-img
                                        src="/images/amber_whatsapp.png"
                                        alt=""
                                        width="25px"
                                    />
                                    <span class="align-middle ml-2 text-lg">{{
                                        contact.name
                                    }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-12 row justify-between gap-6"
                    data-aos="fade-right"
                >
                    <div class="col-12 row q-gutter-y-lg">
                        <div
                            class="col-12 row"
                            v-if="propertyDetails.banner_image"
                        >
                            <div
                                class="col-12"
                                :class="
                                    propertyDetails.details ? 'col-lg-9' : ''
                                "
                            >
                                <q-img
                                    :src="propertyDetails.banner_image.url"
                                    class="rounded-lg"
                                    :class="
                                        $q.screen.lt.md ? 'h-full' : 'h-[650px]'
                                    "
                                    :fit="$q.screen.lt.lg ? 'contain' : 'cover'"
                                />
                            </div>
                            <div
                                class="col-12 col-lg-3 text-center"
                                v-if="propertyDetails.details"
                            >
                                <q-card
                                    class="my-card flex flex-col justify-center"
                                    :class="
                                        $q.screen.lt.md ? 'h-full' : 'h-[650px]'
                                    "
                                >
                                    <q-card-section>
                                        <div class="text-h5">Lot Area</div>
                                        <div class="text-subtitle2">
                                            {{
                                                propertyDetails.details
                                                    .square_feet
                                            }}
                                            sqft
                                        </div>
                                    </q-card-section>
                                    <q-card-section>
                                        <div class="text-h5">Bedroom</div>
                                        <div class="text-subtitle2">
                                            {{
                                                propertyDetails.details
                                                    .square_feet
                                            }}
                                            sqft
                                        </div>
                                    </q-card-section>
                                    <q-card-section>
                                        <div class="text-h5">Baths</div>
                                        <div class="text-subtitle2">
                                            {{
                                                propertyDetails.details.bathroom
                                            }}
                                            baths
                                        </div>
                                    </q-card-section>
                                    <q-card-section>
                                        <div class="text-h5">Tenure</div>
                                        <div class="text-subtitle2">
                                            {{ propertyDetails.details.tenure }}
                                        </div>
                                    </q-card-section>
                                    <q-card-section>
                                        <div class="text-h5">Price</div>
                                        <div class="text-subtitle2">
                                            RM {{ propertyDetails.price }}
                                        </div>
                                    </q-card-section>
                                    <q-card-section>
                                        <div class="text-h5">Listing Type</div>
                                        <div class="text-subtitle2">
                                            For
                                            {{
                                                propertyDetails.details
                                                    .listing_type
                                            }}
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>

                        <div class="col-12 row justify-between">
                            <div
                                class="col-12"
                                v-if="propertyDetails.slider_image"
                            >
                                <Splide
                                    :options="sliderOptions"
                                    aria-label="My Favorite Images"
                                >
                                    <SplideSlide
                                        v-for="(
                                            sliderImg, sliderKey
                                        ) in propertyDetails.slider_image"
                                        :key="sliderKey"
                                    >
                                        <q-img
                                            :src="sliderImg.url"
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

        const fetchPropertyDetails = async () => {
            const response = await webProperty.fetchPropertyDetails();
            propertyDetails.value = response;
            sliderImageNumber.value = response.slider_image?.length || 0;

            sliderListOptions(sliderImageNumber.value);

            return response;
        };

        const sliderListOptions = async (sliderNumber) => {
            console.log(sliderNumber);

            sliderOptions.value = {
                type: 'loop',
                perPage: sliderNumber > 2 ? 2 : sliderNumber,
                gap: '1rem',
                breakpoints: {
                    1024: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1,
                        height: 0,
                    },
                },
                height: 500,
            };
        };

        contactNumber.value = [
            { name: 'Agent Ng', contact: '0192137731' },
            { name: 'Agent Doo', contact: '0123729668' },
            { name: 'Agent Teng', contact: '0193560561' },
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
        };
    },
};
</script>
