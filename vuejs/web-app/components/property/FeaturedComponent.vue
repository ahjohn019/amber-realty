<template>
    <div class="container mx-auto px-4 md:px-0">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-7" data-aos="flip-left">
                <img
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                    class="h-full object-cover rounded-lg"
                />
            </div>
            <div
                class="col-12 col-md-6 col-lg-5 featured-container flex flex-col gap-6 justify-center bg-secondary"
                :class="$q.screen.lt.md ? 'p-7' : 'p-14'"
                data-aos="flip-right"
            >
                <div
                    class="q-gutter-sm pb-3 featured-content"
                    :class="$q.screen.lt.md ? 'text-center' : ''"
                >
                    <div class="text-4xl font-bold">Featured Properties</div>
                    <div class="text-sm">
                        Faucibus massa lorem purus sit in nunc.
                    </div>
                </div>
                <q-separator />
                <div
                    class="bg-primary text-center py-2 font-bold rounded text-white"
                    :class="$q.screen.lt.md ? 'w-full' : 'w-[100px]'"
                >
                    For Sale
                </div>
                <div class="row gap-2 md:gap-0">
                    <div
                        class="col-12 col-md-7"
                        :class="$q.screen.lt.md ? 'text-center' : ''"
                    >
                        <div class="text-lg font-bold">
                            Luxurious Modern House
                        </div>
                        <div class="text-sm">36 Future, CO</div>
                    </div>
                    <div
                        class="col-12 col-md-5 text-4xl font-bold properties-content"
                        :class="$q.screen.lt.md ? 'text-center' : 'text-right'"
                    >
                        RM 4,490
                    </div>
                </div>
                <div class="row q-gutter-y-md justify-center">
                    <div class="col-6 col-md-4 text-center">
                        <div>
                            <q-icon name="bed" size="48px" />
                        </div>
                        3 Bedrooms
                    </div>
                    <div class="col-6 col-md-4 text-center">
                        <div>
                            <q-icon name="bathroom" size="48px" />
                        </div>
                        3 Bathrooms
                    </div>
                    <div class="col-6 col-md-4 text-center">
                        <div>
                            <q-icon name="dashboard" size="48px" />
                        </div>
                        800 sqft
                    </div>
                </div>
                <div :class="$q.screen.lt.md ? 'text-center' : ''">
                    <q-btn color="primary" label="Whatsapp Us" icon="mail" />
                </div>
            </div>
        </div>
    </div>
</template>
