<template>
    <div class="bg-secondary">
        <div
            class="row container mx-auto call-to-action-container gap-6 md:gap-0"
        >
            <div class="col-12 col-md-6 cta-title">
                Contact Us to Start Your Real Estate Journey !
            </div>
            <div
                class="col-12 col-md-6 text-right flex items-center cta-contact text-white"
            >
                <router-link to="#">
                    <div class="bg-primary px-8 py-4 rounded row">
                        <div class="col-2">
                            <img
                                src="/images/amber_whatsapp.png"
                                alt=""
                                width="55"
                            />
                        </div>
                        <div class="col-10">0192140561</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style>
.call-to-action-container {
    padding: 88px 125px 88px 125px;
}

.cta-title {
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
}

.cta-contact {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    justify-content: end;
}

@media only screen and (max-width: 768px) {
    .call-to-action-container {
        padding: 88px 0 88px 0;
        text-align: center;
    }

    .cta-contact {
        justify-content: center;
    }
}
</style>
