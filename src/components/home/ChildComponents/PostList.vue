<template>
        <Post v-for="post in posts" :key="post.id" :post="post" class="my-4 bg-success text-light" />
</template>

<script>
import Post from './Post.vue';
import axios from 'axios';

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
			axios
				.get('http://localhost/posts')
				.then((res) => {
					console.log(res.data);
					this.posts = res.data;
				})
				.catch((err) => console.error(err));
		}
	}
}
</script>

<style scoped>
</style>