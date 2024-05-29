<template>
    <BaseLayout>
        <template #content>
            <div class="bg-primary" data-aos="fade-up">
                <div
                    class="container mx-auto text-white h-[45vh] flex justify-center items-center"
                >
                    <div class="text-center flex flex-col gap-2">
                        <div class="text-5xl">About Us</div>
                        <div>
                            <q-breadcrumbs
                                active-color="secondary"
                                class="flex justify-center"
                            >
                                <q-breadcrumbs-el
                                    label="Home"
                                    icon="home"
                                    to="/"
                                />
                                <q-breadcrumbs-el label="About Us" />
                            </q-breadcrumbs>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="row container mx-auto py-24 px-12 justify-between gap-20"
            >
                <div class="col-12 row" :class="$q.screen.lt.lg ? 'gap-4' : ''">
                    <div
                        class="col-12 col-lg-6 text-4xl font-bold leading-tight q-gutter-y-md"
                    >
                        <div :class="$q.screen.lt.lg ? 'text-center' : ''">
                            {{ aboutUsContentOne.title }}
                        </div>
                        <div data-aos="flip-up" data-aos-duration="1200">
                            <q-img
                                src="images/about_us_one.jpg"
                                fit="contain"
                                class="rounded-lg"
                            >
                            </q-img>
                        </div>
                    </div>
                    <div
                        class="col-12 col-lg-6"
                        :class="$q.screen.lt.md ? '' : 'px-8'"
                        v-html="aboutUsContentOne.content"
                    ></div>
                </div>
                <div class="col-12 row" :class="$q.screen.lt.lg ? 'gap-4' : ''">
                    <div class="col-12 col-lg-6 row gap-4" data-aos="fade-up">
                        <div
                            class="col-12 flex flex-col gap-2"
                            :class="$q.screen.lt.lg ? 'text-center' : ''"
                        >
                            <div class="text-4xl font-bold">Core Values</div>
                            <div class="text-lg">We Believe In</div>
                        </div>

                        <div
                            class="col-12 col-lg-10 row"
                            v-for="(
                                aboutUsContentTwo, key
                            ) in aboutUsContentTwo"
                            :key="key"
                        >
                            <div
                                class="col-12 border text-lg py-4 px-6 bg-secondary rounded-lg font-bold capitalize flex items-center"
                                :class="
                                    $q.screen.lt.lg
                                        ? 'justify-center text-center'
                                        : ''
                                "
                                style=""
                            >
                                {{ aboutUsContentTwo.content }}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div data-aos="flip-up" data-aos-duration="1200">
                            <q-img
                                src="images/about_us_two.jpg"
                                fit="contain"
                                class="rounded-lg"
                            >
                            </q-img>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import { ref } from 'vue';

export default {
    components: {
        BaseLayout,
    },

    setup() {
        const aboutUsContentOne = ref({});
        const aboutUsContentTwo = ref([]);

        aboutUsContentTwo.value = [
            { content: 'Serving with integrity' },
            {
                content:
                    'Conducting ourselves and our business in an honest, ethical, and trustworthy manner',
            },
            { content: 'Providing financial stewardship' },
            { content: 'Growing through innovation and creativity' },
        ];

        aboutUsContentOne.value = {
            title: 'Your Trusted Partner in Real Estate',
            content: `
                <div class='flex flex-col gap-4 text-lg'>
                    <div>
                        Amber Realty is a licensed real estate agent registered with
                        the Board of Valuers, Appraisers and Estate Agents of
                        Malaysia, and based in Kuala Lumpur the capital city of
                        Malaysian. 
                    </div>
                    <div>
                        Amber Realty has always been committed to
                        providing the highest standards in the practice of Real
                        Estate and unwavering dedication to the satisfaction of
                        customers. Amber Realty place equal significance on
                        personalized service and continuing innovation in building
                        lifetime relationships with our customers and communities.
                    </div>
                    <div>
                        Our Team of highly motivated and experienced negotiators is 
                        dedicated and committed to providing assistance to all real estate 
                        investment needs and complete transactions in the most efficient manner. 
                    </div>
                    <div>
                        Among the properties we handle are Residential, Commercial and Industrial, 
                        including Land for various types of use. 
                        We also undertake all categories of Projects Sales, on behalf of Developers. 
                    </div>
                    <div>
                        With many years of experience in this field Amber Realty is 
                        in a position to share feedbacks on requirements by the end-users.  
                        This allows us, when called upon by developers, to advise them with the planning of the layout, 
                        floor plans and the selling price, in accordance with the specific locations of the development.
                    </div>
                </div>`,
        };

        return {
            aboutUsContentOne,
            aboutUsContentTwo,
        };
    },
};
</script>
