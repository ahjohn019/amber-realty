<template>
    <BaseLayout>
        <template #content>
            <div class="bg-primary" data-aos="zoom-in">
                <div
                    class="container mx-auto text-white banner-title-container flex justify-center items-center"
                >
                    <div class="text-5xl text-center">Property Details</div>
                </div>
            </div>
            <div class="container mx-auto px-8 row q-gutter-y-lg">
                <div
                    class="col-12 row justify-between items-center pt-8 gap-4 md:gap-0"
                    data-aos="fade-up"
                >
                    <div
                        class="col-12 col-md-9 property-details-one q-gutter-y-md"
                    >
                        <div class="text-3xl font-bold">
                            Luxury Beachfront Villa
                        </div>
                        <div class="text-sm">18 Malibu, CA</div>
                    </div>
                    <div
                        class="col-12 col-md-3 row property-details-container-two q-gutter-y-md"
                    >
                        <div
                            class="col-12 row items-center gap-4 md:gap-0 justify-end"
                        >
                            <div
                                class="bg-secondary featured-label text-center py-2 font-bold rounded col-12 col-md-3"
                            >
                                For Sale
                            </div>
                            <div class="col-12 col-md-5 text-2xl font-bold">
                                RM 64900
                            </div>
                        </div>
                        <div class="col-12 row">
                            <div class="col text-sm text-center">
                                <q-icon
                                    name="bed"
                                    size="18px"
                                    class="align-middle"
                                />
                                <span class="align-middle ml-2">3 Beds</span>
                            </div>
                            <div class="col text-sm text-center">
                                <q-icon
                                    name="bathroom"
                                    size="18px"
                                    class="align-middle"
                                />
                                <span class="align-middle ml-2">3 Bath</span>
                            </div>
                            <div class="col text-sm text-center">
                                <q-icon
                                    name="dashboard"
                                    size="18px"
                                    class="align-middle"
                                />
                                <span class="align-middle ml-2">800 sqft</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-12 row justify-between"
                    :class="$q.screen.lt.lg ? 'q-gutter-y-lg' : ''"
                    data-aos="fade-right"
                >
                    <div class="col-12 col-md-7 col-lg-8 row q-gutter-y-lg">
                        <div class="col-12">
                            <img
                                src="https://cdn.quasar.dev/img/mountains.jpg"
                                class="rounded-lg w-full object-contain"
                            />
                        </div>
                        <div class="col-12 row justify-between">
                            <div class="col-3">
                                <img
                                    src="https://cdn.quasar.dev/img/mountains.jpg"
                                    class="w-full object-contain rounded-lg"
                                />
                            </div>
                            <div class="col-3">
                                <img
                                    src="https://cdn.quasar.dev/img/mountains.jpg"
                                    class="w-full object-contain rounded-lg"
                                />
                            </div>
                            <div class="col-3">
                                <img
                                    src="https://cdn.quasar.dev/img/mountains.jpg"
                                    class="w-full object-contain rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3 row q-gutter-y-md">
                        <div class="col-12 bg-secondary rounded row p-6">
                            <div
                                class="col-12 text-4xl font-bold"
                                :class="
                                    $q.screen.lt.md
                                        ? 'text-center'
                                        : 'text-left'
                                "
                            >
                                Details
                            </div>
                            <div
                                class="col-12 row q-gutter-y-lg pt-6"
                                :class="
                                    $q.screen.lt.md
                                        ? 'text-center'
                                        : 'text-left'
                                "
                            >
                                <div class="col-12 row flex items-center">
                                    <div
                                        class="col-12 col-md-5 font-bold text-lg"
                                    >
                                        Lot area
                                    </div>
                                    <div class="col-12 col-md-7 text-sm">
                                        900 sqft
                                    </div>
                                </div>
                                <div class="col-12 row flex items-center">
                                    <div
                                        class="col-12 col-md-5 font-bold text-lg"
                                    >
                                        Beds
                                    </div>
                                    <div class="col-12 col-md-7 text-sm">
                                        4 beds
                                    </div>
                                </div>
                                <div class="col-12 row flex items-center">
                                    <div
                                        class="col-12 col-md-5 font-bold text-lg"
                                    >
                                        Baths
                                    </div>
                                    <div class="col-12 col-md-7 text-sm">
                                        4 baths
                                    </div>
                                </div>
                                <div class="col-12 row flex items-center">
                                    <div
                                        class="col-12 col-md-5 font-bold text-lg"
                                    >
                                        Rooms
                                    </div>
                                    <div class="col-12 col-md-7 text-sm">
                                        12 rooms
                                    </div>
                                </div>
                                <div class="col-12 row flex items-center">
                                    <div
                                        class="col-12 col-md-5 font-bold text-lg"
                                    >
                                        Price
                                    </div>
                                    <div class="col-12 col-md-7 text-sm">
                                        RM 6,490
                                    </div>
                                </div>
                                <div class="col-12 row flex items-center">
                                    <div
                                        class="col-12 col-md-5 font-bold text-lg"
                                    >
                                        Status
                                    </div>
                                    <div class="col-12 col-md-7 text-sm">
                                        For sale
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-12 bg-secondary rounded row p-6 row q-gutter-y-md"
                            :class="
                                $q.screen.lt.md
                                    ? 'text-center p-4'
                                    : 'text-left p-10'
                            "
                        >
                            <div class="col-12 text-3xl font-bold">
                                Short Descriptions
                            </div>
                            <div class="col-12 pt-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Fusce pulvinar augue in mi
                                condimentum vulputate. Phasellus convallis
                                semper turpis sit amet porttitor. Aliquam a
                                bibendum enim. Aliquam dignissim gravida tellus.
                                Curabitur a tortor ut mi commodo malesuada.
                                Donec a vestibulum purus. Aenean sodales varius
                                tortor. Nullam gravida viverra pretium. Nulla
                                rhoncus sem risus. Proin eu bibendum magna.
                                Praesent ut metus eget metus volutpat
                                sollicitudin. Suspendisse a pellentesque neque.
                                Sed ac suscipit neque. Integer ut vehicula urna,
                                aliquet tempus sapien. Sed pellentesque eros
                                finibus, consequat nulla vel, blandit arcu.
                                Nulla blandit, velit at placerat tempus, erat
                                quam malesuada augue, sit amet rhoncus nisl
                                purus nec purus.
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
                    <div class="col-12 text-3xl font-bold">Overview</div>
                    <div class="col-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis pellentesque laoreet ipsum, vel aliquet lacus
                        tristique commodo. Morbi hendrerit lobortis nisl gravida
                        dapibus. Cras auctor nisl eget tincidunt sagittis. Nulla
                        facilisi. Nunc bibendum mi urna, consequat aliquam
                        tellus fermentum ac. Suspendisse luctus eros massa, sit
                        amet mattis tortor mollis vehicula. Duis rhoncus, diam
                        et porta sollicitudin, velit purus egestas lorem, vitae
                        egestas justo nisi auctor augue. Cras ac urna a felis
                        aliquam ullamcorper non in lectus. Praesent id tellus
                        ultrices, tristique orci a, aliquam risus. Sed elementum
                        nibh felis. Cras luctus consequat nisl quis ullamcorper.
                        Duis dapibus, dui sed elementum interdum, metus nisi
                        bibendum justo, ut dapibus mauris mauris vitae justo.
                        Sed at ipsum a lorem facilisis lobortis non eget sem.
                        Etiam purus est, lobortis nec euismod sed, bibendum non
                        leo. Phasellus tempor sapien finibus dui pretium
                        fermentum. Integer lectus turpis, consectetur non
                        consequat ut, ornare et nisl. Nunc ac iaculis nisl.
                        Fusce cursus, lectus sit amet finibus semper, diam
                        sapien iaculis metus, sit amet ornare diam eros at
                        lacus. Vivamus libero purus, accumsan non tellus nec,
                        tristique suscipit lorem. Aliquam facilisis porttitor
                        velit vel fringilla. In nec ipsum quis enim maximus
                        consequat sit amet vitae orci. Donec bibendum lectus nec
                        leo eleifend, dictum egestas enim ultrices. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus. Sed
                        molestie varius elementum. Nulla at fermentum sem. Sed
                        suscipit ultricies euismod. Sed ac consectetur nulla.
                        Morbi et risus vulputate, ultrices turpis sed, sodales
                        quam. Ut pellentesque at ligula non cursus. Donec felis
                        augue, aliquet eget nunc eget, rhoncus fermentum eros.
                        Aenean et rutrum neque. Cras pulvinar purus et ipsum
                        malesuada, ut euismod lectus iaculis. Maecenas dignissim
                        dui sit amet lacus faucibus sagittis nec nec velit.
                        Donec at est convallis, ultricies turpis quis, laoreet
                        urna. Nulla porta urna et facilisis accumsan. In vitae
                        orci at metus commodo pulvinar eu vel arcu. Mauris
                        fringilla nunc at orci vulputate, a volutpat tellus
                        luctus. Donec lacinia finibus sapien vel egestas. Etiam
                        placerat molestie vestibulum. Fusce sed laoreet turpis,
                        eu scelerisque tellus. Nunc blandit varius nisl et
                        maximus. Phasellus sapien nulla, blandit in purus
                        ullamcorper, consectetur placerat mi. Ut diam eros,
                        scelerisque tristique risus at, gravida condimentum
                        neque. Quisque ipsum libero, gravida a turpis sed,
                        mattis vehicula ligula. Sed at velit in nulla accumsan
                        luctus eu finibus sem. Duis a diam odio. Vestibulum
                        porttitor varius lectus, a iaculis eros vulputate sit
                        amet. Cras ac lacus ac nisi sollicitudin vulputate non
                        vitae sem. Ut quis felis tincidunt, feugiat nibh ut,
                        hendrerit ante. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia curae; Maecenas
                        vel massa non metus cursus luctus.
                    </div>
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';

export default {
    components: {
        BaseLayout,
    },
};
</script>

<style>
.property-details-two {
    justify-content: end;
}

.property-details-container-two {
    text-align: right;
}

.banner-title-container {
    height: 45vh;
}

@media (max-width: 769px) {
    .property-details-one {
        text-align: center;
    }

    .property-details-container-two {
        text-align: center;
    }

    .property-details-two {
        justify-content: center;
    }
}
</style>
