<template>
    <div class="footer-container">
        <div class="row pb-14 footer-container-main gap-4 md:gap-0">
            <div class="col-12 col-md-4">
                <div class="text-3xl font-bold pb-2">Amber Realty</div>
                <div>Copyright © 2023 Amber Realty</div>
            </div>
            <div class="col-12 col-md-4 q-gutter-y-sm">
                <div class="text-2xl font-bold">About Us</div>
                <div class="footer-about-us">
                    Hac ullamcorper diam lacus eget amet penatibus. Consectetur
                    non hendrerit vel amet in eu adipiscing scelerisque.
                </div>
            </div>
            <div class="col-12 col-md-4 q-gutter-y-sm">
                <div class="text-2xl font-bold">Contact Info</div>
                <div class="q-gutter-y-sm">
                    <div>
                        64, Jalan Kuantan, Titiwangsa 53200 Kuala Lumpur,
                        Malaysia
                    </div>
                    <div>0192140561</div>
                    <div>amberrealty88@gmail.com</div>
                </div>
            </div>
        </div>
        <q-separator />
        <div class="row pt-8">
            <div class="col-12 col-md-6 text-2xl font-bold">
                <div class="flex items-center gap-4 footer-follow-us">
                    <div>Follow Us</div>
                    <div>
                        <img src="/images/amber_facebook.png" width="25" />
                    </div>
                </div>
            </div>
            <div
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
            </div>
        </div>
    </div>
</template>

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
