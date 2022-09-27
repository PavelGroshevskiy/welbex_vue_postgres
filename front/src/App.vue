<template>
	<div id="app">
		<v-table :table_data="table" />
	</div>
</template>

<script>
import vTable from "./components/v-table.vue";
import axios from "axios";
export default {
	components: { vTable },
	data() {
		return {
			table: [],
		};
	},
	methods: {
		async fetchTable() {
			try {
				const response = await axios.get("http://localhost:5005/api/get");
				this.table = response.data;
			} catch (e) {}
		},
	},
	mounted() {
		this.fetchTable();
	},
};
</script>

<style></style>
