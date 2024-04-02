<template>
    <div
        class="container mx-auto"
        :class="$q.screen.lt.sm ? 'py-12 px-4' : 'py-24 px-12'"
    >
        <div class="row">
            <div
                class="col-12 text-3xl font-bold pb-8"
                :class="$q.screen.lt.md ? 'text-center' : ''"
            >
                Highlight
            </div>

            <div class="col-12">
                <Splide
                    :options="{ rewind: true, type: 'fade' }"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide
                        v-for="(highlight, highlightKey) in highlights"
                        :key="highlightKey"
                    >
                        <div class="col-12 row">
                            <div
                                class="col-12 col-md-6 col-lg-7 grid place-items-center"
                            >
                                <img
                                    :src="
                                        highlight.property.banner
                                            ? highlight.property.banner.image
                                                  .url
                                            : 'https://cdn.quasar.dev/img/mountains.jpg'
                                    "
                                    class="object-cover rounded-lg"
                                    :class="
                                        $q.screen.lt.md
                                            ? 'h-[350px]'
                                            : 'h-[550px]'
                                    "
                                />
                            </div>
                            <div
                                class="col-12 col-md-6 col-lg-5 featured-container flex flex-col gap-12 justify-center border rounded-lg py-6"
                                :class="$q.screen.lt.md ? 'px-7' : 'px-10'"
                            >
                                <div
                                    class="q-gutter-sm pb-3 featured-content"
                                    :class="
                                        $q.screen.lt.md ? 'text-center' : ''
                                    "
                                >
                                    <div class="text-4xl font-bold">
                                        {{ highlight.property.name }}
                                    </div>
                                    <div
                                        class="row justify-between items-center gap-4"
                                    >
                                        <div
                                            class="col col-auto text-sm break-words"
                                            v-html="
                                                highlight.property
                                                    .short_description
                                            "
                                        ></div>
                                        <div
                                            class="col col-auto text-sm bg-primary text-center px-4 py-2 font-bold rounded text-white"
                                        >
                                            For
                                            {{
                                                highlight.property.listing_type
                                            }}
                                        </div>
                                    </div>
                                </div>
                                <div class="row items-center">
                                    <div
                                        class="col-12 col-md-5 text-4xl font-bold properties-content"
                                        style="text-wrap: nowrap"
                                        :class="
                                            $q.screen.lt.md
                                                ? 'text-center'
                                                : 'text-left'
                                        "
                                    >
                                        {{
                                            numberFormat(
                                                highlight.property.price,
                                                'RM '
                                            )
                                        }}
                                    </div>
                                </div>
                                <div
                                    class="row gap-12"
                                    :class="
                                        $q.screen.lt.md
                                            ? 'justify-center'
                                            : 'justify-left'
                                    "
                                    v-if="highlight.property.property_detail"
                                >
                                    <div class="col-auto text-center">
                                        <div>
                                            <q-icon name="bed" size="48px" />
                                        </div>
                                        {{
                                            highlight.property.property_detail
                                                .bedroom
                                        }}
                                        Bedrooms
                                    </div>
                                    <div class="col-auto text-center">
                                        <div>
                                            <q-icon
                                                name="bathroom"
                                                size="48px"
                                            />
                                        </div>
                                        {{
                                            highlight.property.property_detail
                                                .bathroom
                                        }}
                                        Bathrooms
                                    </div>
                                    <div class="col-auto text-center">
                                        <div>
                                            <q-icon
                                                name="dashboard"
                                                size="48px"
                                            />
                                        </div>
                                        {{
                                            highlight.property.property_detail
                                                .square_feet
                                        }}
                                        sqft
                                    </div>
                                </div>
                                <div
                                    :class="
                                        $q.screen.lt.md ? 'text-center' : ''
                                    "
                                >
                                    <q-btn
                                        color="primary"
                                        label="Whatsapp Us"
                                        icon="mail"
                                    />
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['highlights'],
    setup() {
        const numberFormat = (number, symbol = 'RM') => {
            const formattedNumber = number
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return `${symbol}${formattedNumber}`;
        };

        return {
            numberFormat,
        };
    },
};
</script>
