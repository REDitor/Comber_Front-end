<template>
	<section>
		<div class="container">
			<h1 class="mb-4">{{ this.getUsername() }}'s Posts:</h1>
			<div>
				<PostList class="row" />
			</div>
		</div>
	</section>
</template>

<script>
import PostList from '../home/childcomponents/PostList.vue';

export default {
	name: 'MyPosts',
	components: {
		PostList,
	},
	methods: {
		getUsername() {
			return localStorage.getItem('username');
		}
	}
}
</script>

<style scoped>
</style>