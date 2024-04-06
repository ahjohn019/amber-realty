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
                                <router-link
                                    :to="{
                                        name: 'property.details',
                                        params: { id: highlight.id },
                                    }"
                                >
                                    <img
                                        :src="
                                            highlight.property.banner
                                                ? highlight.property.banner
                                                      .image.url
                                                : 'https://cdn.quasar.dev/img/mountains.jpg'
                                        "
                                        class="object-cover rounded-lg"
                                        :class="
                                            $q.screen.lt.md
                                                ? 'h-[350px]'
                                                : 'h-[600px]'
                                        "
                                    />
                                </router-link>
                            </div>

                            <div
                                class="col-12 col-md-6 col-lg-5 featured-container flex flex-col gap-10 justify-center border rounded-lg"
                                :class="
                                    $q.screen.lt.md ? 'py-10' : 'px-10 py-6'
                                "
                            >
                                <div
                                    class="pb-3 featured-content flex flex-col"
                                    :class="
                                        $q.screen.lt.md
                                            ? 'text-center gap-6'
                                            : 'gap-10'
                                    "
                                >
                                    <div class="text-4xl font-bold">
                                        {{ highlight.property.name }}
                                    </div>

                                    <div
                                        class="text-sm featured-property__descriptions"
                                    >
                                        {{
                                            highlight.property.short_description
                                        }}
                                        <q-tooltip>
                                            {{
                                                highlight.property
                                                    .short_description
                                            }}
                                        </q-tooltip>
                                    </div>

                                    <q-separator color="grey-4" />

                                    <div
                                        class="text-sm bg-primary text-center px-4 py-2 font-bold rounded text-white w-[120px] capitalize"
                                        :class="$q.screen.lt.md ? 'm-auto' : ''"
                                    >
                                        For
                                        {{ highlight.property.listing_type }}
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

<style>
.featured-property__descriptions {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
}
</style>
