<template>
	<q-card>
		<div class="row">
			<div class="col col-4">
				<q-img></q-img>
			</div>
			<div class="col col-8">
				<div>{{ item.name }}</div>
				<div>{{ numberFormat(item.price, "RM ") }}</div>
			</div>
		</div>
		<hr>
		<q-card-section>
			<div class="row">
				<div class="col">List by {{ item.user?.name }}</div>
				<div class="col col-auto">
					<q-btn
						label="Contact Agent"
						outline
						class="text-capitalize"
					></q-btn>
				</div>
			</div>
		</q-card-section>
	</q-card>
			{{ item }}
</template>

<script>
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
		}
	}
}
</script>