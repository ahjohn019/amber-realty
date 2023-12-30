<template>
    <div
        class="bg-secondary"
        :class="$q.screen.lt.md ? 'h-full' : 'h-[650px] flex items-center'"
    >
        <div
            class="row container mx-auto p-6 md:p-12 gap-4 md:gap-0 justify-between"
        >
            <div
                class="col-12 col-md-8 col-lg-6 flex flex-col gap-6 justify-center header-content-container px-4"
                data-aos="flip-left"
            >
                <div class="header-content">
                    <q-icon name="home" size="22px" class="align-middle" />
                    <span class="align-middle"> Amber Realty Real Estate </span>
                </div>
                <div class="text-3xl md:text-6xl font-bold header-title"></div>
                <div class="text-lg">
                    Are you ready to start the search for your dream home? Look
                    no further than Amber Realty Real Estate.
                </div>
            </div>
            <div
                class="col-12 col-md-4 flex flex-col gap-6 bg-white rounded py-6 px-3 md:p-10 justify-center"
                data-aos="flip-right"
            >
                <div class="flex flex-col gap-2">
                    <span
                        class="text-lg md:text-2xl font-bold header-content-container"
                        >Real Estate Inquiry Form</span
                    >
                    <div class="text-sm text-gray-500">
                        Please provide the following information to help us
                        better understand your real estate needs.
                    </div>
                </div>

                <div class="flex flex-col gap-4">
                    <span class="font-bold inquiry-info">Your Information</span>
                    <div>
                        <q-input
                            filled
                            v-model="payload.name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <q-input
                            filled
                            v-model="payload.email"
                            placeholder="Your Email"
                        />
                    </div>
                </div>
                <div>
                    <q-btn
                        color="primary"
                        label="Get Inquiry"
                        size="16px"
                        style="width: 100%"
                    />
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
