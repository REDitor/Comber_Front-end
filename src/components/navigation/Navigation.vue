<template>
	<nav class="navbar navbar-dark bg-dark py-2 navbar-expand-md">
		<a href="/" class="position-absolute text-decoration-none">
		<!-- logo from icons-icons.com -->
			<img src="../../assets/logo.png" height="50">
		</a>
		<div class="container">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/" class="nav-link" active-class="text-success">Home</router-link>
				</li>
				<li v-if="isLoggedIn()" class="nav-item">
					<router-link to="/myposts" class="nav-link" active-class="text-success">My Posts</router-link>
				</li>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link v-if="isLoggedIn()" to="/newpost" class="text-success text-decoration-none fas fa-plus"></router-link>
				</li>
			</ul>
			<ul class="navbar-nav">
				<li v-if="isLoggedIn()" class="nav-item">
					<a v-on:click="logout()" class="btn btn-outline-success" active-class="text-success">Logout</a>
				</li>
				<li v-if="!isLoggedIn()" class="nav-item">
					<router-link to="/login" class="btn btn-success" active-class="text-success">Login</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navigation",
	methods: {
		isLoggedIn() {
			return this.$store.state.token;
		},
		logout() {
			this.$store
				.dispatch('logout')
				.then(() => {
					this.$router.replace('/');
				})
				.catch((err) => console.error(err));
		},
	},
}
</script>

<style scoped>
@media (min-width: 800px) {
	img {
		display: block;
	}
}

@media (max-width: 800px) {
	img {
		display: none;
	}
}
</style>