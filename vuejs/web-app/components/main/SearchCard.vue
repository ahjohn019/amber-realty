<template>
	<q-card
		class="p-3 md:p-6"
		style="background-color: #0e2638e6; border-radius: 15px;"
	>
		<q-card-section>
				<div class="row justify-center">
					<div class="col col-11 col-sm-10 col-md-8 col-lg-6">
						<q-btn-group
							v-model="formInput.searchType"
							rounded
							class="fill-width"
						>
							<q-btn
								rounded
								:color="formInput.searchType == 'buy' ? 'primary' : 'white text-black' "
								label="Buy"
								class="text-capitalize fill-width"
								@click="setSearchType('buy')"
							/>
							<q-btn
								rounded
								:color="formInput.searchType == 'rent' ? 'primary' : 'white text-black' "
								label="Rent"
								class="text-capitalize fill-width"
								@click="setSearchType('rent')"
							/>
						</q-btn-group>
					</div>
				</div>
		</q-card-section>
		<q-card-section>
			<div>
				<div class="row">
					<div class="col">
						<q-input
							v-model="formInput.search"
							placeholder="Search Property"
							outlined
							class="bg-white"
							style="border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
						>
						</q-input>
					</div>
					<div class="col col-auto">
						<q-btn
							color="primary"
							class="fill-height text-capitalize"
							style="border-top-right-radius: 15px; border-bottom-right-radius: 15px;"
							@click="searchProperty"
						>Search</q-btn>
					</div>
				</div>
			</div>
		</q-card-section>
	</q-card>
</template>

<script>
export default {
	data(){
		return {
			formInput: {
				search: "",
				searchType: "buy",
			},
		}
	},
	methods:{
		setSearchType(searchTypeVal){
			this.formInput.searchType = searchTypeVal
		},
		searchProperty(){
			const { searchType, search } = this.formInput
			this.$router.push({
				name: 'property.list',
				query: { t: searchType, s: search }
			})
		}
	}
}
</script>