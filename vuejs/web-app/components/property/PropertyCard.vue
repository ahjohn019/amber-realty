<template>
	<q-card>
		<div class="row">
			<div class="col col-12 col-md-4">
				<q-img
					src="https://cdn.quasar.dev/img/parallax2.jpg"
          			:ratio="4/3"
				>
				<div class="absolute-bottom text-subtitle2">
					N <q-icon size="18px" name="image"></q-icon>
				</div>
				</q-img>
			</div>
			<div class="col col-12 col-md-8 p-4 md:pt-8 q-gutter-y-sm">
				<div class="text-h5" style="font-weight: bold;">{{ item.name }}</div>
				<div class="text-body1" style="font-weight: bold;">{{ numberFormat(item.price, "RM ") }}</div>
				<div class="row q-gutter-sm text-body2">
					<div class="col col-auto">{{ item.details.bedroom }}<q-icon name="bed"></q-icon></div>
					<div class="col col-auto">{{ item.details.bathroom }}<q-icon name="bathtub"></q-icon></div>
					<div class="col col-auto"><q-icon name="circle" size="5px"></q-icon></div>
					<div class="col col-auto">{{ item.details.square_feet }} sqft</div>
					<div class="col col-auto"><q-icon name="circle" size="5px"></q-icon></div>
					<div class="col col-auto">{{ getPricePerSquareFeet(item) }} psf</div>
				</div>
				<div class="row">
					<div class="col">
						<q-chip dense outline square color="primary">{{ item.propertyType.name }}</q-chip>
						<q-chip dense outline square color="primary">{{ item.details.tenure }}</q-chip>
					</div>
					<div class="col col-auto"><q-icon name="schedule"></q-icon> {{ getDateDifferenceLabel(item.updated_at) }}</div>
				</div>
			</div>
		</div>
		<hr>
		<q-card-section>
			<div class="row q-gutter-sm">
				<div class="col col-12 col-md align-self-center">Listed by <span class="font-bold">{{ item.user?.name }}</span></div>
				<div class="col col-12 col-md-auto">
					<q-btn
						label="Contact Agent"
						outline
						class="text-capitalize fill-width"
						href="https://wa.me/60123771428"
						target="_blank"
					></q-btn>
				</div>
			</div>
		</q-card-section>
	</q-card>
</template>

<script>
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInWeeks, differenceInYears } from 'date-fns';

export default {
	props: {
		item: {
			type: Object,
			default: () => ({})
		}
	},
	methods:{
		numberFormat(number, symbol = 'RM'){
			const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			return `${symbol}${formattedNumber}`;
		},
		getPricePerSquareFeet(item){
			const psf = item.price/item.details.square_feet
			return this.numberFormat(psf.toFixed(2), "RM ")
		},
		getDateDifferenceLabel(lastUpdatedAt) {
			const lastUpdated = new Date(lastUpdatedAt);
			const now = new Date();

			const minutesDiff = differenceInMinutes(now, lastUpdated);
			if (minutesDiff < 60) {
				return `${minutesDiff}m`;
			}

			const hoursDiff = differenceInHours(now, lastUpdated);
			if (hoursDiff < 24) {
				return `${hoursDiff}h`;
			}

			const daysDiff = differenceInDays(now, lastUpdated);
			if (daysDiff < 30) {
				return `${daysDiff}d`;
			}

			const weeksDiff = differenceInWeeks(now, lastUpdated);
			if (weeksDiff < 4) {
				return `${weeksDiff}w`;
			}

			const monthsDiff = differenceInMonths(now, lastUpdated);
			if (monthsDiff < 12) {
				return `${monthsDiff}mon`;
			}

			const yearsDiff = differenceInYears(now, lastUpdated);
			return `${yearsDiff}y`;
		}
	}
}
</script>