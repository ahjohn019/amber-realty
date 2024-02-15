<template>
    <div
        class="banner-background"
        :class="$q.screen.lt.md ? 'h-full' : 'h-[700px] flex items-center'"
    >
        <div
            class="row container mx-auto flex items-center"
            :class="$q.screen.lt.md ? 'gap-4' : 'p-4'"
        >
            <div
                class="col-12 col-md-6 flex flex-col gap-6 justify-center px-4 text-white"
                :class="$q.screen.lt.md ? 'text-center hidden' : ''"
                data-aos="flip-left"
            >
                <div class="header-content uppercase">
                    <div
                        class="row uppercase text-sm font-bold gap-6"
                        :class="$q.screen.lt.md ? 'justify-center' : ''"
                    >
                        <div
                            class="col col-auto flex items-center justify-center"
                        >
                            <img :src="mainLogo" alt="" width="100" />
                        </div>
                        <div class="col col-auto row items-center">
                            <div class="col-12">
                                <div class="text-2xl">amber realty</div>
                                <div class="pt-2" style="text-wrap: nowrap">
                                    E-(3)1482
                                </div>
                            </div>
                        </div>
                        <div
                            class="col col-auto flex flex-col items-center justify-center"
                        >
                            <img
                                src="/images/amber_lppeh_logo.png"
                                alt=""
                                width="55"
                            />
                            <div class="text-center">E-2346</div>
                        </div>
                    </div>
                </div>
                <div class="text-lg md:text-5xl font-bold">
                    Are You Looking For
                    <div class="header-title pt-2"></div>
                </div>
                <div class="text-sm">
                    Are you ready to start the search for your dream home? Look
                    no further than Amber Realty Real Estate.
                </div>
            </div>

            <div class="col-12 col-md-6">
                <SearchCard />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import SearchCard from '@web/components/main/SearchCard.vue';

export default {
    components: {
        SearchCard,
    },

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
