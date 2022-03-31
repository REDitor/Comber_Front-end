<template>
	<Navigation v-if="this.$route.path != '/login'" class="fixed-top" />
	<div class="container page">
		<router-view />
	</div>
	<Footer class="fixed-bottom" />
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
	name: "App",
	components: {
		Navigation,
		Footer
	},
	created() {
		this.$store.dispatch('autoLogin');
	}
};
</script>

<style>
.page {
	margin-top: 6rem;
	margin-bottom: 6rem;
}
</style>
