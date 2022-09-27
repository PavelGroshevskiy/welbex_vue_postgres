<template>
	<div class="v-table-row">
		<div class="table-row row-date">{{ table_data.date }}</div>
		<div class="table-row row-title">{{ table_data.title }}</div>
		<div class="table-row row-count">{{ table_data.count }}</div>
		<div class="table-row row-distance">{{ table_data.distance }}</div>
	</div>
</template>

<script>
export default {
	name: "v-table-row",
	props: {
		table_data: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
	data() {
		return {};
	},
};
</script>

<style scoped>
.v-table-row {
	display: flex;
}
.table-row {
	display: flex;
	flex-basis: 25%;
	text-align: left;
}
</style>
