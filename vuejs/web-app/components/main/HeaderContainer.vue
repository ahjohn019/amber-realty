<template>
    <div
        class="banner-background"
        :class="$q.screen.lt.md ? 'h-full' : 'h-[700px] flex items-center'"
    >
        <div class="row container mx-auto p-6 md:p-12">
            <div
                class="col-12 col-md-9 col-lg-7 flex flex-col gap-6 justify-center header-content-container px-4 text-white"
                data-aos="flip-left"
            >
                <div class="header-content uppercase">
                    <div
                        class="row uppercase text-sm font-bold gap-2"
                        :class="$q.screen.lt.md ? 'justify-center' : ''"
                    >
                        <div
                            class="col-12 col-md-2 flex items-center justify-center"
                        >
                            <img
                                src="/images/amber_realty_logo.png"
                                alt=""
                                width="100"
                            />
                        </div>
                        <div class="col-12 col-md-8 row items-center">
                            <div class="col-12 col-md-6">
                                <div class="text-2xl">amber realty</div>
                                <div class="row justify-between items-center">
                                    <div class="col-12 col-md-4">E-31482</div>
                                    <div
                                        class="col-12 col-md-4 flex flex-col justify-center items-center"
                                    >
                                        <img
                                            src="/images/amber_lppeh_logo.png"
                                            alt=""
                                            width="25"
                                        />
                                        <div class="text-center">E-2346</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-xl md:text-7xl font-bold header-title"></div>
                <div class="text-lg">
                    Are you ready to start the search for your dream home? Look
                    no further than Amber Realty Real Estate.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const payload = ref({
            name: '',
            email: '',
        });

        return {
            payload,
        };
    },
};
</script>

<style>
@media (max-width: 768px) {
    .header-content-container {
        text-align: center;
    }

    .inquiry-title,
    .inquiry-details,
    .inquiry-info {
        text-align: center;
    }
}
</style>
