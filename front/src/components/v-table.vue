<template>
	<div class="v-table">
		<div class="v-table__header">
			<p>Date</p>
			<p>Title</p>
			<p>Counr</p>
			<p>Distance</p>
		</div>
		<div class="v-table__body">
			<v-table-row v-for="(row, idx) in table_data" :key="idx" :table_data="row" />
		</div>
	</div>
</template>

<script>
import vTableRow from "./v-table-row";

export default {
	name: "v-table",
	components: { vTableRow },
	props: {
		table_data: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style scoped>
.v-table {
	max-width: 600px;
	margin: 0 auto;
}
.v-table__header {
	display: flex;
	justify-content: space-around;
	text-align: left;
	border-bottom: 1px solid black;
	margin-bottom: 10px;
}
.v-table__header p {
	flex-basis: 25%;
}
</style>
