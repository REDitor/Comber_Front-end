<template>
	<div class="card">
		<div class="card-body row">
			<div v-if="this.$route.path == '/myposts'">
				<small class="card-text fw-bold">{{ formatDateTime(post.postedAt) }}</small>
				<h3 class="card-title">{{ post.postedBy }}</h3>
				<p class="card-text">{{ post.message }}</p>
			</div>
			<div v-else>
				<h3 class="card-title">{{ post.postedBy }}</h3>
				<p class="card-text">{{ post.message }}</p>
				<small class="card-text fw-bold">{{ formatDateTime(post.postedAt) }}</small>
			</div>
		</div>
		<div v-if="this.$route.path == '/myposts'" class="card-footer p-0">
			<EditPost class="container text-dark bg-white pt-3 pb-5" />
			<a class="btn btn-sm btn-secondary col-6" data-bs-target="#collapseEdit" data-bs-toggle="collapse">
				<i class="fas fa-pen-to-square"></i>
			</a>
			<a v-on:click="deletePost()" class="btn btn-sm btn-danger col-6">
				<i class="fas fa-trash-can"></i>
			</a>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import EditPost from './EditPost.vue'

export default {
	name: "Post",
	components: {
		EditPost,
	},
	props: {
		post: Object,
	},
	methods: {
		formatDateTime(dateTime) {
			return moment(dateTime).format('dddd MMMM Do YYYY') + ' at ' + moment(dateTime).format('h:mm a');
		},
		editPost() {
			console.log('post edited ' + this.post.id);

		},
		deletePost() {
			console.log('post deleted ' + this.post.id);
		}
	},
}
</script>

<style scoped>
.btn {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
</style>