<template>
  <ol v-if="this.$route.path == '/myposts'" class="breadcrumb px-2">
			<li class="breadcrumb-item"><a class="text-decoration-none text-success" href="/">Home</a></li>
			<li class="breadcrumb-item">My Posts</li>
		</ol>
		<ol v-if="this.$route.path == '/newpost'" class="breadcrumb px-2">
			<li class="breadcrumb-item"><a class="text-decoration-none text-success" href="/">Home</a></li>
			<li class="breadcrumb-item">New Post</li>
		</ol>
</template>

<script>
export default {
    name: 'Breadcumbs', 
}
</script>

<style scoped>

</style>