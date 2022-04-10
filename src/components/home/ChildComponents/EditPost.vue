<template>
	<form>
		<div class="form-group">
			<label for="message">Edit Message:</label>
			<textarea v-model="updatedPost.message" class="form-control" id="message" />
		</div>
		<div class="row justify-content-between w-50 mx-auto">
			<button type="button" @click="cancel" class="btn btn-secondary my-3 col-5 fw-bold">Cancel</button>
			<button type="button" @click="confirm" class="btn btn-success my-3 col-5 fw-bold">Confirm</button>
		</div>
	</form>
</template>

<script>
export default {
	name: 'EditPost',
	props: {
		post: Object,
	},
	data() {
		return {
			updatedPost: {
				id: this.post.id,
				userId: this.post.userId,
				postedAt: this.post.postedAt,
				message: this.post.message
			}
		}
	},
	methods: {
		cancel() {
			this.$emit('cancel');
		},
		confirm() {
			this.$emit('confirm', this.updatedPost);
		},
	},
	mounted() {
		this.$emit('autoSize');
	}
}
</script>

<style scoped>
</style>