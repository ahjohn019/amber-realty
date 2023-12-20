<template>
    <div class="bg-secondary">
        <div
            class="row justify-around items-center container mx-auto call-to-action-container q-gutter-y-lg"
        >
            <div class="col-12 col-md-7 text-2xl md:text-4xl font-bold">
                Contact Us to Start Your Real Estate Journey !
            </div>
            <div
                class="col-12 col-md-3 text-center text-xl font-bold text-white"
                style="width: 250px"
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
    padding: 88px 0 88px 0;
}

@media only screen and (max-width: 768px) {
    .call-to-action-container {
        text-align: center;
    }

    .cta-contact {
        justify-content: center;
    }
}
</style>
