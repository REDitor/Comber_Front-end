<template>
	<Navigation v-if="this.$route.path != '/login'" class="fixed-top" />
	<div class="container page">
		<Breadcrumbs />
		<router-view :class="{ notLoggedIn: !this.$store.state.token && this.$route.path != '/login' }" />
	</div>
	<Footer v-if="this.$route.path != '/login'" class="bottom-0" />
</template>

<script>
import Navigation from './components/navigation/Navigation.vue';
import Footer from './components/Footer.vue';
import Breadcrumbs from './components/navigation/Breadcrumbs.vue';

export default {
	name: "App",
	components: {
		Navigation,
		Footer,
		Breadcrumbs
	},
	created() {
		this.$store.dispatch('autoLogin');
	},
};
</script>

<style>
.page {
	margin-top: 4rem;
	margin-bottom: 6rem;
	min-height: 55.5vh;
}

.notLoggedIn {
	filter: blur(4px);
}
</style>
