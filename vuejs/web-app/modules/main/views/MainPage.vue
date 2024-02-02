<template>
    <BaseLayout>
        <template #content>
            <q-layout class="mt-20">
				<SearchCard></SearchCard>
                <HeaderContainer data-aos="fade-up" />

				<!-- <div class="row justify-center">
					<div class="col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 p-4 md:p-10">
						<SearchCard style="margin-top: -100px;"></SearchCard>
					</div>
				</div> -->
                <PropertiesContainer data-aos="fade-left" />
                <MissionStatement data-aos="fade-right" />
                <SocialProof data-aos="fade-right" />
                <CallToAction data-aos="fade-left" />
            </q-layout>
        </template>
    </BaseLayout>
</template>

<script>
import HeaderContainer from '@web/components/main/HeaderContainer.vue';
import PropertiesContainer from '@web/components/main/PropertiesContainer.vue';
import SocialProof from '@web/components/main/SocialProof.vue';
import CallToAction from '@web/components/main/CallToAction.vue';
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import MissionStatement from '@web/components/main/MissionStatement.vue';
import SearchCard from '@web/components/main/SearchCard.vue';
export default {
    components: {
        BaseLayout,
        HeaderContainer,
        PropertiesContainer,
        SocialProof,
        CallToAction,
		SearchCard,
        MissionStatement,
    },
};
</script>
