<template>
    <div class="footer-container">
        <div
            class="row pb-14"
            :class="$q.screen.lt.lg ? 'text-center gap-4' : ''"
        >
            <div class="col-12 col-lg-4">
                <div
                    class="text-3xl font-bold pb-2 flex"
                    :class="$q.screen.lt.lg ? 'justify-center' : ''"
                >
                    <img :src="mainLogo" alt="" width="100" />
                </div>
                <div>Copyright © {{ yearNow }} Amber Realty</div>
            </div>
            <div class="col-12 col-lg-4 q-gutter-y-sm">
                <div class="text-2xl font-bold">About Us</div>
                <div :class="$q.screen.lt.lg ? 'w-full' : 'w-[300px]'">
                    Amber Realty is a licensed real estate agent registered with
                    the Board of Valuers, Appraisers and Estate Agents of
                    Malaysia, and based in Kuala Lumpur the capital city of
                    Malaysian.
                </div>
            </div>
            <div class="col-12 col-lg-4 q-gutter-y-sm">
                <div class="text-2xl font-bold">Contact Info</div>
                <div class="q-gutter-y-sm row">
                    <div class="col-12 text-xl font-bold">Account</div>
                    <div class="col-12">Public Bank: 3186084126</div>
                    <div class="col-12 text-xl font-bold">Address</div>
                    <div class="col-12">
                        No. 2774-2, Jalan Changkat Permata, Taman Permata 53300
                        Kuala Lumpur.
                    </div>
                    <div class="col-12 text-xl font-bold">Main</div>
                    <div class="col-12">
                        <a
                            href="tel:60123729668"
                            class="text-blue-600 font-bold"
                            >6012-3729668</a
                        >
                    </div>
                    <div class="col-12 text-xl font-bold">Admin</div>
                    <div class="col-12">
                        <a
                            href="tel:60192140561"
                            class="text-blue-600 font-bold"
                            >6019-2140561</a
                        >
                    </div>
                    <div class="col-12">
                        <a
                            href="tel:60193560561"
                            class="text-blue-600 font-bold"
                            >6019-3560561</a
                        >
                    </div>
                    <div class="col-12">
                        <a
                            href="tel:60123771428"
                            class="text-blue-600 font-bold"
                            >6012-3771428</a
                        >
                    </div>
                    <div class="col-12 text-xl font-bold">Office</div>
                    <div class="col-12">
                        <a
                            href="tel:60340222822"
                            class="text-blue-600 font-bold"
                            >603-40222822</a
                        >
                    </div>
                    <div class="col-12 text-xl font-bold">Email</div>
                    <div class="col-12">
                        <a
                            href="mailto:amberrealty88@gmail.com"
                            class="text-blue-600 font-bold"
                            >amberrealty88@gmail.com</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <q-separator />
        <div class="row pt-8" :class="$q.screen.lt.lg ? 'justify-center' : ''">
            <div class="col-12 col-md-6 text-2xl font-bold">
                <div
                    class="flex items-center gap-4"
                    :class="$q.screen.lt.lg ? 'justify-center' : ''"
                >
                    <div>Follow Us</div>
                    <div>
                        <a
                            href="https://www.facebook.com/amberrealtypropertiesandnews/"
                            target="_blank"
                        >
                            <img src="/images/amber_facebook.png" width="25" />
                        </a>
                    </div>
                </div>
            </div>
            <!-- <div
                class="col-12 col-md-6 flex items-center footer-follow-us justify-end gap-2"
            >
                <div>
                    <router-link to="#" class="font-bold"
                        >Terms & Conditions</router-link
                    >
                </div>
                <div>
                    <router-link to="#" class="font-bold"
                        >Privacy Policy</router-link
                    >
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import { ref } from 'vue';

export default {
    setup() {
        const yearNow = ref('');
        yearNow.value = dayjs().format('YYYY');

        return {
            yearNow,
        };
    },
};
</script>

<style>
.footer-container {
    padding: 88px 125px 88px 125px;
}

.footer-about-us {
    width: 300px;
}

@media (max-width: 1024px) {
    .footer-about-us {
        width: 100%;
    }
}

@media (max-width: 769px) {
    .footer-container {
        padding: 44px 1.25rem 44px 1.25rem;
    }

    .footer-container-main {
        text-align: center;
    }

    .footer-follow-us {
        justify-content: center;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
}
</style>
