<template>
    <BaseLayout>
        <template #content>
            <div class="bg-primary" data-aos="fade-up">
                <div
                    class="container mx-auto text-white h-[45vh] flex justify-center items-center"
                >
                    <div class="text-5xl text-center">Property List</div>
                </div>
            </div>
			<div class="row justify-center p-4 md:p-8">
				<div class="container">
					<div class="row">
						<div class="col col-12 col-md-6">
							<q-input
								v-model="formInput.search"
								outlined
								placeholder="Search"
							>
								<template #append>
									<q-icon name="search" />
								</template>
							</q-input>
						</div>
						<div class="col col-12 col-md-6">Filter & Sort</div>
					</div>
					<template v-if="entityList.length > 0">
						<div class="pt-2">
							<div>Displaying {{ entityPaginationData.from }} - {{ entityPaginationData.to }} results of {{ entityPaginationData.total }}</div>
						</div>
						<div class="pt-2">
							<div class="row q-gutter-sm">
								<template v-for="property in entityList" :key="property.id">
									<div class="col col-12">
										<PropertyCard
											:item="property"
										></PropertyCard>
									</div>
								</template>
							</div>
						</div>
						<div class="pt-2">
							<q-pagination
								v-model="formInput.page"
								:max="Math.ceil(entityPaginationData.total / formInput.items_per_page)"
								direction-links
								@update:model-value="fetchEntityList"
							/>
						</div>
					</template>
				</div>
			</div>
            <!-- <div
                class="container mx-auto py-8 px-4 md:px-0"
                data-aos="fade-left"
            >
                <LatestComponent />
            </div> -->
            <!-- <FeaturedComponent /> -->
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import PropertyCard from '@web/components/property/PropertyCard.vue';
import { usePropertyWebStore } from '@store_web/property/index.js';
import { mapStores } from 'pinia'
// import LatestComponent from '@web/components/property/LatestComponent.vue';
// import FeaturedComponent from '@web/components/property/FeaturedComponent.vue';

export default {
    components: {
		BaseLayout,
		PropertyCard,
	},
	data(){
		return {
			entityList: [],
			entityLoading: false,
			entityPaginationData: {},
			formInput: {},
		}
	},
	created(){
		if(this.$route.query.t){
			this.formInput.type = this.$route.query.t
		}
		if(this.$route.query.s){
			this.formInput.search = this.$route.query.s
		}

		this.formInput.items_per_page = 2
		this.initPage();
	},
	computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(usePropertyWebStore)
  },
	methods:{
		initPage(){
			this.formInput.page = 1;
			this.fetchEntityList()
		},
		async fetchEntityList() {
			const payload = {
				// general
				page: this.formInput.page,
				items_per_page: this.formInput.items_per_page,
				sort_by: this.formInput.sort_by,
				sort_desc: this.formInput.sort_desc,
				search: this.formInput.search,
				search_by: "name",
				// special
				type: this.formInput.type,
			}
			this.entityLoading = true;
			this.entityList = [];

            const response = await this.property_webStore.fetchPropertyList(payload);
			this.entityLoading = false;
            this.entityList = response.data
			this.entityPaginationData = {
				total: response.total,
				to: response.to,
				from: response.from,
			}
        }
	}
};
</script>
