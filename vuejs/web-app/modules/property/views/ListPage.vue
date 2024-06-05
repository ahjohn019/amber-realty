<template>
    <BaseLayout>
        <template #content>
            <div class="bg-primary" data-aos="fade-up">
                <div
                    class="container mx-auto text-white h-[45vh] flex justify-center items-center flex-col gap-2"
                >
                    <div class="text-5xl text-center col-12">Property List</div>
                    <div>
                        <q-breadcrumbs
                            active-color="secondary"
                            class="flex justify-center"
                        >
                            <q-breadcrumbs-el label="Home" icon="home" to="/" />
                            <q-breadcrumbs-el label="Property List" />
                        </q-breadcrumbs>
                    </div>
                </div>
            </div>
            <div class="row justify-center p-4 md:p-8">
                <div class="container">
                    <div class="row q-gutter-y-sm">
                        <!-- search bar -->
                        <div class="col col-12 col-md-6">
                            <div class="row">
                                <div class="col">
                                    <q-input
                                        v-model="formInput.search"
                                        placeholder="Search Property"
                                        outlined
                                        class="bg-white"
                                        clearable
                                        dense
                                        :loading="entityLoading"
                                        @keyup.enter="fetchEntityList(1)"
                                    >
                                    </q-input>
                                </div>
                                <div class="col col-auto">
                                    <q-btn
                                        color="primary"
                                        :loading="entityLoading"
                                        class="fill-height text-capitalize"
                                        @click="fetchEntityList(1)"
                                        >Search</q-btn
                                    >
                                </div>
                            </div>
                        </div>

                        <!-- filter & sorting -->
                        <div class="col col-12 col-md-auto pb-4 md:pl-2">
                            <q-btn
                                label="Filter"
                                outline
                                icon="tune"
                                class="text-capitalize"
                                style="height: 40px"
                                @click="openFilterDialog"
                            ></q-btn>
                            <q-btn-dropdown
                                :label="
                                    'Sort By: ' + formInput.sortOption?.text
                                "
                                class="text-capitalize ml-2"
                                outline
                                style="height: 40px"
                            >
                                <q-list>
                                    <template
                                        v-for="(sortOption, i) in sortOptions"
                                        :key="i"
                                    >
                                        <q-item
                                            clickable
                                            v-close-popup
                                            @click="
                                                selectSortOption(sortOption)
                                            "
                                        >
                                            <q-item-section>
                                                <div>
                                                    <q-icon
                                                        :name="
                                                            formInput.sortOption
                                                                .text ==
                                                            sortOption.text
                                                                ? 'radio_button_checked'
                                                                : 'radio_button_unchecked'
                                                        "
                                                    ></q-icon>
                                                    <span class="pl-3">{{
                                                        sortOption.text
                                                    }}</span>
                                                </div>
                                            </q-item-section>
                                        </q-item>
                                    </template>
                                </q-list>
                            </q-btn-dropdown>
                        </div>
                    </div>

                    <!-- body -->
                    <template v-if="entityLoading">
                        <div class="row q-gutter-y-sm">
                            <template v-for="i in 4" :key="i">
                                <div class="col col-12">
                                    <q-skeleton height="150px" />
                                </div>
                            </template>
                        </div>
                    </template>
                    <template v-else-if="entityList.length > 0">
                        <div class="pt-4">
                            <div class="italic">
                                Displaying {{ entityPaginationData.from }} -
                                {{ entityPaginationData.to }} results of
                                {{ entityPaginationData.total }}
                            </div>
                        </div>
                        <div class="pt-4">
                            <div class="row q-gutter-y-sm">
                                <template
                                    v-for="property in entityList"
                                    :key="property.id"
                                >
                                    <div class="col col-12">
                                        <router-link
                                            :to="{
                                                name: 'property.details',
                                                params: { id: property.id },
                                            }"
                                        >
                                            <PropertyCard
                                                :item="property"
                                            ></PropertyCard>
                                        </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="pt-4">
                            <q-pagination
                                v-model="formInput.page"
                                :max="
                                    Math.ceil(
                                        entityPaginationData.total /
                                            formInput.items_per_page
                                    )
                                "
                                direction-links
                                @update:model-value="fetchEntityList"
                            />
                        </div>
                    </template>
                    <template v-else>
                        <div class="px-8 py-16 text-center">
                            <div><q-icon name="info" size="35px"></q-icon></div>
                            <div class="font-bold italic pt-2">
                                No Data Available
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <q-dialog v-model="filterDialog">
                <q-card>
                    <q-card-section>
                        <div class="row">
                            <div class="col">
                                <div class="text-h6 font-bold">Filter</div>
                            </div>
                            <div class="col col-auto">
                                <q-btn
                                    icon="close"
                                    size="sm"
                                    flat
                                    round
                                    @click="filterDialog = false"
                                ></q-btn>
                            </div>
                        </div>
                    </q-card-section>
                    <hr />
                    <div class="row">
                        <q-btn-group
                            v-model="filterForm.listing_type"
                            square
                            unelevated
                            class="fill-width"
                        >
                            <q-btn
                                square
                                :outline="filterForm.listing_type == 'buy'"
                                unelevated
                                :color="
                                    filterForm.listing_type == 'buy'
                                        ? 'primary'
                                        : 'white text-black'
                                "
                                label="Buy"
                                class="text-capitalize fill-width"
                                @click="setListingType('buy')"
                            />
                            <q-btn
                                square
                                :outline="filterForm.listing_type == 'rent'"
                                unelevated
                                :color="
                                    filterForm.listing_type == 'rent'
                                        ? 'primary'
                                        : 'white text-black'
                                "
                                label="Rent"
                                class="text-capitalize fill-width"
                                @click="setListingType('rent')"
                            />
                        </q-btn-group>
                    </div>
                    <hr />
                    <q-card-section
                        class="overflow-auto"
                        style="max-height: 70vh"
                    >
                        <div class="row q-gutter-y-md">
                            <div class="col col-12">
                                <div class="row q-gutter-y-sm">
                                    <div class="col col-12">
                                        <div class="font-bold">
                                            Property Type:
                                        </div>
                                    </div>
                                    <div class="col col-12 q-gutter-x-sm">
                                        <template
                                            v-for="propertyTypeFilterOption in propertyTypeFilterOptions"
                                            :key="propertyTypeFilterOption.id"
                                        >
                                            <q-checkbox
                                                v-model="
                                                    filterForm.property_types
                                                "
                                                :label="
                                                    propertyTypeFilterOption.name
                                                "
                                                :val="
                                                    propertyTypeFilterOption.id
                                                "
                                            />
                                        </template>
                                    </div>
                                </div>
                                <hr class="mt-2 mx-2" />
                            </div>
                            <div class="col col-12">
                                <div class="row q-gutter-y-sm">
                                    <div class="col col-12">
                                        <div class="font-bold">Price:</div>
                                    </div>
                                    <div class="col col-12">
                                        <div class="mx-0 row q-gutter-sm">
                                            <div class="col">
                                                <div class="pb-1">Minimum</div>
                                                <q-input
                                                    v-model="
                                                        filterForm.min_price
                                                    "
                                                    placeholder="Min"
                                                    dense
                                                    outlined
                                                    @update:model-value="
                                                        (value) =>
                                                            formatNumberInput(
                                                                'min_price',
                                                                value,
                                                                2
                                                            )
                                                    "
                                                >
                                                    <template #prepend>
                                                        <div class="text-body2">
                                                            RM
                                                        </div>
                                                    </template>
                                                </q-input>
                                            </div>
                                            <div class="col">
                                                <div class="pb-1">Maximum</div>
                                                <q-input
                                                    v-model="
                                                        filterForm.max_price
                                                    "
                                                    placeholder="Max"
                                                    dense
                                                    outlined
                                                    @update:model-value="
                                                        (value) =>
                                                            formatNumberInput(
                                                                'max_price',
                                                                value,
                                                                2
                                                            )
                                                    "
                                                >
                                                    <template #prepend>
                                                        <div class="text-body2">
                                                            RM
                                                        </div>
                                                    </template>
                                                </q-input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-4 mx-2" />
                            </div>
                            <div class="col col-12">
                                <div class="row q-gutter-y-sm">
                                    <div class="col col-12">
                                        <div class="font-bold">Floor Size:</div>
                                    </div>
                                    <div class="col col-12">
                                        <div class="mx-0 row q-gutter-sm">
                                            <div class="col">
                                                <div class="pb-1">Minimum</div>
                                                <q-input
                                                    v-model="
                                                        filterForm.min_floor_size
                                                    "
                                                    placeholder="Min"
                                                    dense
                                                    outlined
                                                    @update:model-value="
                                                        (value) =>
                                                            formatNumberInput(
                                                                'min_floor_size',
                                                                value
                                                            )
                                                    "
                                                >
                                                    <template #append>
                                                        <div class="text-body2">
                                                            sqft
                                                        </div>
                                                    </template>
                                                </q-input>
                                            </div>
                                            <div class="col">
                                                <div class="pb-1">Maximum</div>
                                                <q-input
                                                    v-model="
                                                        filterForm.max_floor_size
                                                    "
                                                    placeholder="Max"
                                                    dense
                                                    outlined
                                                    @update:model-value="
                                                        (value) =>
                                                            formatNumberInput(
                                                                'max_floor_size',
                                                                value
                                                            )
                                                    "
                                                >
                                                    <template #append>
                                                        <div class="text-body2">
                                                            sqft
                                                        </div>
                                                    </template>
                                                </q-input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-4 mx-2" />
                            </div>
                            <div class="col col-12">
                                <div class="row q-gutter-y-sm">
                                    <div class="col col-12">
                                        <div class="font-bold">Tenure:</div>
                                    </div>
                                    <div class="col col-12 q-gutter-x-sm">
                                        <template
                                            v-for="tenureFilterOption in tenureFilterOptions"
                                            :key="tenureFilterOption.value"
                                        >
                                            <q-checkbox
                                                v-model="filterForm.tenures"
                                                :label="tenureFilterOption.text"
                                                :val="tenureFilterOption.value"
                                            />
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-12">
                                <div class="row q-gutter-y-sm">
                                    <div class="col col-12">
                                        <div class="font-bold">State:</div>
                                    </div>
                                    <div class="col col-12 q-gutter-x-sm">
                                        <q-select
                                            v-model="filterForm.state"
                                            outlined
                                            dense
                                            :options="stateFilterOptions"
                                            option-label="name"
                                            option-value="id"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </q-card-section>
                    <hr />
                    <q-card-actions>
                        <q-space></q-space>
                        <q-btn
                            color="primary"
                            label="Apply Filter"
                            class="text-capitalize"
                            @click="applyFilter"
                        ></q-btn>
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@web/modules/layout/BaseLayout.vue';
import PropertyCard from '@web/components/property/PropertyCard.vue';
import { usePropertyWebStore } from '@store_web/property/index.js';
import { mapStores } from 'pinia';

export default {
    components: {
        BaseLayout,
        PropertyCard,
    },
    data() {
        return {
            entityList: [],
            entityLoading: false,
            entityPaginationData: {},
            formInput: {},
            filterDialog: false,
            sortOptions: [],
            filterForm: {},
            propertyTypeFilterOptions: [],
            tenureFilterOptions: [],
            stateFilterOptions: [],
        };
    },
    async created() {
        if (this.$route.query.t) {
            this.formInput.listing_type = this.$route.query.t;
        }
        if (this.$route.query.s) {
            this.formInput.search = this.$route.query.s;
        }

        this.formInput.property_types = [];
        if (this.$route.query.pt) {
            this.formInput.property_types = this.$route.query.pt
                .split(',')
                .map((item) => parseInt(item));
        }

        this.formInput.items_per_page = 20;
        this.formInput.tenures = [];
        this.formInput.state = { id: null, name: 'All State' };

        await this.fetchPropertyFilterOptionGroup();

        if (this.$route.query.state) {
            const state = this.stateFilterOptions.find(
                (item) => item.id === parseInt(this.$route.query.state)
            );
            if (state) {
                this.formInput.state = state;
            }
        }

        this.initPage();
    },
    computed: {
        ...mapStores(usePropertyWebStore),
    },
    methods: {
        initPage() {
            this.sortOptions = [
                { sortBy: 'date', sortDesc: 1, text: 'Newest' },
                { sortBy: 'date', sortDesc: 0, text: 'Oldest' },
                { sortBy: 'price', sortDesc: 1, text: 'Highest Price' },
                { sortBy: 'price', sortDesc: 0, text: 'Lowest Price' },
            ];
            this.formInput.sortOption = this.sortOptions[0];

            this.tenureFilterOptions = [
                { text: 'Freehold', value: 'freehold' },
                { text: 'Leasehold', value: 'leasehold' },
            ];

            this.fetchEntityList(1);
        },
        async fetchEntityList(page) {
            if (page) {
                this.formInput.page = page;
            }

            const payload = {
                // general
                page: this.formInput.page,
                items_per_page: this.formInput.items_per_page,
                sort_by: this.formInput.sortOption.sortBy,
                sort_desc: this.formInput.sortOption.sortDesc,
                search: this.formInput.search,
                search_by: 'name',
                // special
                listing_type: this.formInput.listing_type,
                property_types: this.formInput.property_types,
                min_floor_size: this.formInput.min_floor_size,
                max_floor_size: this.formInput.max_floor_size,
                min_price: this.formInput.min_price,
                max_price: this.formInput.max_price,
                tenures: this.formInput.tenures,
                state_id: this.formInput.state?.id,
            };
            this.entityLoading = true;
            this.entityList = [];

            const response = await this.property_webStore.fetchPropertyList(
                payload
            );
            this.entityLoading = false;
            this.entityList = response.data;
            this.entityPaginationData = {
                total: response.total,
                to: response.to,
                from: response.from,
            };
        },
        async fetchPropertyFilterOptionGroup() {
            const payload = {
                propertyTypes: 1,
                states: 1,
            };
            const response =
                await this.property_webStore.fetchPropertyFilterOptionGroup(
                    payload
                );
            this.propertyTypeFilterOptions = response.property_types;
            this.stateFilterOptions = [
                { id: null, name: 'All State' },
                ...response.states,
            ];
        },
        setListingType(listingTypeVal) {
            this.filterForm.listing_type = listingTypeVal;
        },
        selectSortOption(option) {
            this.formInput.sortOption = option;
            this.fetchEntityList(1);
        },
        applyFilter() {
            this.formInput.listing_type = this.filterForm.listing_type;
            this.formInput.min_price = this.filterForm.min_price;
            this.formInput.max_price = this.filterForm.max_price;
            this.formInput.min_floor_size = this.filterForm.min_floor_size;
            this.formInput.max_floor_size = this.filterForm.max_floor_size;
            this.formInput.property_types = this.filterForm.property_types;
            this.formInput.tenures = this.filterForm.tenures;
            this.formInput.state = this.filterForm.state;

            this.filterDialog = false;
            this.fetchEntityList(1);
        },
        openFilterDialog() {
            this.filterForm.listing_type = this.formInput.listing_type;
            this.filterForm.min_price = this.formInput.min_price;
            this.filterForm.max_price = this.formInput.max_price;
            this.filterForm.min_floor_size = this.formInput.min_floor_size;
            this.filterForm.max_floor_size = this.formInput.max_floor_size;
            this.filterForm.property_types = this.formInput.property_types;
            this.filterForm.tenures = this.formInput.tenures;
            this.filterForm.state = this.formInput.state;

            this.filterDialog = true;
        },
        formatNumberInput(model, value, decimalPlaces = 0) {
            value = value.replace(/[^\d.]/g, '').replace(/^0+(\d)/, '$1');

            const parts = value.split('.');
            const integerPart = parts[0];

            if (decimalPlaces === 0) {
                this.filterForm[model] = integerPart;
                return;
            }

            let decimalPart = parts[1] || '';
            if (value[value.length - 1] === '.') {
                this.filterForm[model] = integerPart + '.';
            } else {
                decimalPart = decimalPart.slice(0, decimalPlaces);
                this.filterForm[model] =
                    integerPart + (decimalPart ? '.' + decimalPart : '');
            }
        },
    },
};
</script>
