<template>
    <div class="container mx-auto">
        <div class="row">
            <div class="col-12 col-md-6">
                <img
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                    class="h-full object-cover"
                />
            </div>
            <div
                class="col-12 col-md-6 featured-container flex flex-col gap-3 justify-center"
            >
                <div class="q-gutter-sm pb-3 featured-content">
                    <div class="text-4xl font-bold">Featured Properties</div>
                    <div class="text-sm">
                        Faucibus massa lorem purus sit in nunc.
                    </div>
                </div>
                <q-separator />
                <div
                    class="bg-secondary featured-label text-center py-2 font-bold rounded mt-3"
                >
                    For Sale
                </div>
                <div class="row gap-2 md:gap-0">
                    <div class="col-12 col-md-7 properties-content">
                        <div class="text-lg font-bold">
                            Luxurious Modern House
                        </div>
                        <div class="text-sm">36 Future, CO</div>
                    </div>
                    <div
                        class="col-12 col-md-5 text-4xl font-bold properties-content text-right"
                    >
                        RM 4,490
                    </div>
                </div>
                <div class="row q-gutter-y-md">
                    <div class="col-12 col-md-4 text-center">
                        <div>
                            <q-icon name="bed" size="48px" />
                        </div>
                        3 Bedrooms
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <div>
                            <q-icon name="bathroom" size="48px" />
                        </div>
                        3 Bathrooms
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <div>
                            <q-icon name="dashboard" size="48px" />
                        </div>
                        800 sqft
                    </div>
                </div>
                <div class="whatsapp-button">
                    <q-btn color="primary" label="Whatsapp Us" icon="mail" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.featured-container {
    padding: 0 44px;
}

.featured-label {
    width: 100px;
}

@media (max-width: 769px) {
    .featured-container {
        padding: 22px 1.25rem;
    }

    .properties-content,
    .whatsapp-button,
    .featured-content {
        text-align: center;
    }

    .featured-label {
        margin: 0.75rem auto;
    }
}
</style>
