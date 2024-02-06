<template>
	<q-card
		class="p-3 md:p-8"
		square
		style="background-color: #0e2638;"
	>
		<q-card-section>
				<div class="row justify-center">
					<div class="col col-6 col-sm-5 col-md-4 col-lg-3">
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
		<q-card-section class="text-white">
			<div class="row justify-center">
				<div class="col col-auto">
					<q-btn
						flat
						dense
						color="white"
						:label="propertyTypeFilterLabel"
						icon-right="expand_more"
						class="text-capitalize"
						@click="openFilterDialog"
					>
					</q-btn>
				</div>
				<div class="col col-auto pl-2 md:pl-4">
					<q-btn
						flat
						dense
						color="white"
						:label="formInput.state?.name"
						icon-right="expand_more"
						class="text-capitalize"
						@click="openStateDialog"
					>
					</q-btn>
				</div>
			</div>
		</q-card-section>
	</q-card>

	<q-dialog
		v-model="propertyTypeFilterDialog"
	>
		<q-card>
			<q-card-section>
				<div class="text-center text-primary">Property Type</div>
			</q-card-section>
			<hr>
			<q-card-section style="overflow-y: auto; max-height: 65vh; padding: 0;">
				<q-list style="min-width: 280px;">
					<template v-for="propertyTypeFilterOption in propertyTypeFilterOptions" :key="propertyTypeFilterOption.id">
						<template v-if="propertyTypeFilterOption.id != null">
							<q-item
								clickable
								@click="selectPropertyType(propertyTypeFilterOption)"
							>
								<q-item-section avatar>
									<q-icon :name="selectedPropertyTypes.findIndex((item) => item.id == propertyTypeFilterOption.id) !== -1 ? 'check_box' : 'check_box_outline_blank'" />
								</q-item-section>
								<q-item-section>{{ propertyTypeFilterOption.name }}</q-item-section>
							</q-item>
						</template>
						<template v-else>
							<q-item
								clickable
								@click="selectPropertyType(propertyTypeFilterOption)"
							>
								<q-item-section class="font-bold">{{ propertyTypeFilterOption.name }}</q-item-section>
								<q-item-section avatar>
									<q-icon :name="selectedPropertyTypes.findIndex((item) => item.id == propertyTypeFilterOption.id) !== -1 ? 'check_box' : 'check_box_outline_blank'" />
								</q-item-section>
							</q-item>
						</template>
					</template>
				</q-list>
			</q-card-section>
			<hr>
			<q-card-actions>
				<q-space></q-space>
				<q-btn
					label="Apply Filters"
					class="text-capitalize"
					color="primary"
					@click="applyFilters"
				></q-btn>
			</q-card-actions>
		</q-card>
	</q-dialog>

	<q-dialog
		v-model="stateFilterDialog"
	>
		<q-card>
			<q-card-section>
				<div class="text-center text-primary">State</div>
			</q-card-section>
			<hr>
			<q-card-section style="overflow-y: auto; max-height: 65vh; padding: 0;">
				<q-list style="min-width: 280px;">
					<template v-for="stateFilterOption in stateFilterOptions" :key="stateFilterOption.id">
						<q-item
							clickable
							@click="selectState(stateFilterOption)"
						>
							<q-item-section avatar>
								<q-icon :name="this.formInput.state.id == stateFilterOption.id ? 'radio_button_checked' : 'radio_button_unchecked'" />
							</q-item-section>
							<q-item-section class="font-bold">{{ stateFilterOption.name }}</q-item-section>
						</q-item>
					</template>
				</q-list>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>

<script>
import { usePropertyWebStore } from '@store_web/property/index.js';
import { mapStores } from 'pinia'
export default {
	data(){
		return {
			formInput: {
				search: "",
				searchType: "buy",
				propertyTypes : [],
				selectedState: {},
			},
			selectedPropertyTypes : [],
			propertyTypeFilterOptions: [],
			propertyTypeFilterDialog: false,
			stateFilterOptions: [],
			stateFilterDialog: false,
		}
	},
	computed: {
		...mapStores(usePropertyWebStore),
		propertyTypeFilterLabel(){
			return 'Property Types (' + this.formInput.propertyTypes.filter((item)=> item.id != null).length +')'
		}
	},
	created(){
		this.propertyTypeFilterOptions = []
		this.formInput.propertyTypes = []
		this.formInput.state = { id: null, name: 'All State' }

		this.fetchPropertyFilterOptionGroup()
	},
	methods:{
		setSearchType(searchTypeVal){
			this.formInput.searchType = searchTypeVal
		},
		searchProperty(){
			const { searchType, search, propertyTypes, state } = this.formInput

			const hasAllPropertyOption = (propertyTypes.findIndex((item) => item.id === null) !== -1)
			let propertyTypesVal;
			if(hasAllPropertyOption){
				propertyTypesVal = 0
			}else{
				propertyTypesVal = propertyTypes.map((item) => item.id).join(',')
			}

			this.$router.push({
				name: 'property.list',
				query: {
					t: searchType,
					s: search,
					pt: propertyTypesVal,
					state: state.id,
				}
			})
		},
		async fetchPropertyFilterOptionGroup(){
			const payload = {
				propertyTypes : 1,
				states : 1,
			}
            const response = await this.property_webStore.fetchPropertyFilterOptionGroup(payload);
			const propertyTypes = response.property_types.map((item)=> {
				return {
					id: item.id,
					name: item.name,
				}
			})
			this.propertyTypeFilterOptions = [...propertyTypes]
			this.formInput.propertyTypes = this.propertyTypeFilterOptions.map((item) => item)
			this.selectedPropertyTypes = this.propertyTypeFilterOptions.map((item) => item)
			this.stateFilterOptions = [ { id: null, name: "All State" }, ...response.states ]
		},
		openFilterDialog(){
			this.selectedPropertyTypes = this.formInput.propertyTypes.map((item) => item)
			this.propertyTypeFilterDialog = true
		},
		applyFilters(){
			this.formInput.propertyTypes = this.selectedPropertyTypes.map((item) => item)
			this.propertyTypeFilterDialog = false
		},
		selectPropertyType(option){
			const index = this.selectedPropertyTypes.findIndex((item) => item.id === option.id)

			if(index === -1){
				this.selectedPropertyTypes.push(option)
			}else{
				this.selectedPropertyTypes.splice(index, 1)
			}

			// if(option.id === null){
			// 	if(index === -1){
			// 		this.selectedPropertyTypes = this.propertyTypeFilterOptions.map((item) => item)
			// 	}else{
			// 		this.selectedPropertyTypes = []
			// 	}
			// }
		},
		openStateDialog(){
			this.stateFilterDialog = true
		},
		selectState(option){
			this.formInput.state = option
			this.stateFilterDialog = false
		},
	}
}
</script>