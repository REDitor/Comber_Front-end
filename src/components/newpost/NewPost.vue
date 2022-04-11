<template>
	<section>
		<div class="container">
			<h1 class="mb-4">Create a new post:</h1>
			<div>
				<form>
					<div class="form-group">
						<label class="text-success" for="message">{{ feedbackMessage }}</label>
						<textarea v-model="newPost.message" class="form-control border-success" placeholder="Enter your message..." name="message" id="messsage" rows="15" maxlength="8000"></textarea>
						<button @click="createPost" type="button" class="btn btn-success w-100 mt-3">POST</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import axios from './../../axios-auth';

export default {
	name: 'NewPost',
	data() {
		return {
			newPost: {
				userId: localStorage.getItem('id'),
				postedAt: "",
				message: ""
			},
			feedbackMessage: ""
		}
	},
	methods: {
		createPost() {
			this.newPost.postedAt = this.getDateTime();
			axios
				.post('/posts', this.newPost)
				.then((res) => {
					this.feedbackMessage = res.data;
                    this.newPost.message = "";
				})
                .then(() => {
                    this.$router.replace('/');
                })
				.catch((err) => {
                    this.feedbackMessage = err;
					console.error(err)
				});
		},
		getDateTime() {
			let postedAt = new Date();
			postedAt.setHours(postedAt.getHours() + 2);
			postedAt = postedAt.toISOString().slice(0, 19).replace('T', ' ');
			return postedAt;
		}
	}
}
</script>

<style scoped>
</style>