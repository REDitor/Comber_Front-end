<template>
	<nav class="navbar navbar-dark bg-dark py-2 navbar-expand-md">
		<div class="container">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" active-class="text-success">Home</router-link>
                </li>
                <!-- FIXME: v-if's only happening upon extra reload (not when page loads) -->
                <li class="nav-item">
                    <router-link v-if="this.$store.state.token" to="/myposts" class="nav-link" active-class="text-success">My Posts</router-link>
                </li>
                <li v-if="!this.$store.state.token" class="nav-item ms-md-5">
                    <router-link to="/login" class="btn btn-success" active-class="text-success">Login</router-link>
                </li>
            </ul>
        </div>
	</nav>
</template>

<script>
export default {
	name: "Navigation",
}
</script>

<style scoped>
</style>