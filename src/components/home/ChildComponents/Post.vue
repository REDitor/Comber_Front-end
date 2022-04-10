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
			<button @click="toggleEdit()" class="btn btn-sm btn-secondary col-6" href="#edit">
				<i class="fas fa-pen-to-square"></i>
			</button>
			<button v-on:click="deletePost()" class="btn btn-sm btn-danger col-6">
				<i class="fas fa-trash-can"></i>
			</button>
			<EditPost v-if="this.hidden" @autoSize="autoSizeTextArea" @confirm="editPost" @cancel="cancelEdit" :post="this.post" class="container text-dark bg-white pt-3" id="edit" />
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import autosize from 'autosize';
import EditPost from './EditPost.vue';
import axios from './../../../axios-auth';

export default {
	name: "Post",
	components: {
		EditPost,
	},
	props: {
		post: Object,
	},
	data() {
		return {
			hidden: false
		}
	},
	methods: {
		toggleEdit() {
			if (!this.hidden)
				this.hidden = true;
			else {
				this.hidden = false;
				this.autoSizeTextArea();
			}
		},
		formatDateTime(dateTime) {
			return moment(dateTime).format('dddd MMMM Do YYYY') + ' at ' + moment(dateTime).format('h:mm a');
		},
		autoSizeTextArea() {
			autosize(document.querySelector('textarea'));
		},
		editPost(post) {
			axios
				.put(`/posts/${post.id}`, post)
				.then((res) => {
					console.log('post edited: ' + res.data);
					this.$emit('update');
					this.toggleEdit();
				})
				.catch((err) => console.error(err));
		},
		cancelEdit() {
			this.toggleEdit();
		},
		deletePost() {
			if (confirm("Are you sure you want to delete this post?")) {
				axios
					.delete(`/posts/${this.post.id}`)
					.then((res) => {
						console.log(res.data);
						this.$emit('update');
					})
					.catch((err) => console.error(err));
			}
		},
	},
}
</script>

<style scoped>
.btn {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
</style>