<template>
	<footer class="position-fixed">
		<div class="container">
			<div class="row align-items-center h-100">
				<div 
				v-for="(item, i) in menu"
				:key="i"
				class="col-3 text-center"
				:class="this.$route.name == menu[i].url ? 'active' : ''"
				>
					<router-link class="text-muted" :to="'/'+menu[i].url">
						<span class="ic-menu" 
						:class="menu[i].url"
						></span>
						<span class="fs-5 mt-3 d-inline-block">{{ menu[i].name }}</span>
					</router-link>	
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FixedFooter',
	props: {
		menu: Array
	},
	data(){
		return {

		}
	},
	mounted(){
	},
	methods: {
	}
}
</script>

<style>

</style>