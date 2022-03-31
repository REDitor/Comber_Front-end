<template>
	<div class="card">
		<div class="card-body">
			<h3 class="card-title">{{ post.postedBy }}</h3>
            <p class="card-text">{{ post.message }}</p>
            <small class="card-text">{{ post.postedAt }}</small>
		</div>
	</div>
</template>

<script>
export default {
	name: "Post",
	props: {
        post: Object,
    },
    methods: {

    }
}
</script>

<style scoped>
</style>