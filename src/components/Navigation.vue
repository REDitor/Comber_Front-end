<template>
	<nav class="navbar navbar-dark bg-dark py-2 navbar-expand-md">
		<div class="container">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" active-class="text-success">Home</router-link>
                </li>
                <li v-if="isLoggedIn()" class="nav-item">
                    <router-link to="/myposts" class="nav-link" active-class="text-success">My Posts</router-link>
                </li>
                <li v-if="isLoggedIn()">
                    <a v-on:click="logout()"></a>
                </li>
                <li v-if="!isLoggedIn()" class="nav-item ms-md-5">
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
            //TODO: create logout
        }
    },
}
</script>

<style scoped>
</style>