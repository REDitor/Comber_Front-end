<template>
	<Post v-for="post in posts" :key="post.id" :post="post" class="my-4 bg-success text-light" />
</template>

<script>
import Post from './Post.vue';
import axios from './../../../axios-auth';

export default {
	name: "PostList",
	components: {
		Post,
	},
	data() {
		return {
			posts: [],
		}
	},
	mounted() {
		this.updatePosts();
	},
	methods: {
		updatePosts() {
			switch (this.$route.path) {
				case '/':
					axios
						.get('/posts')
						.then((res) => {
							this.posts = res.data;
						})
						.catch((err) => console.error(err));
					break;

				case '/myposts':
					axios
						.get('/posts/' + localStorage.getItem('id'))
						.then((res) => {
							this.posts = res.data;
						})
						.catch((err) => console.error(err));
					break;
			}
		}
	}
}
</script>

<style scoped>
</style>