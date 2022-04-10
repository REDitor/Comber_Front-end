<template>
	<section>
		<div class="container">
			<div>
				<h2>Recent Posts:</h2>
				<PostList class="row" />
			</div>
		</div>
	</section>
</template>

<script>
import PostList from './childcomponents/PostList.vue';

export default {
	name: "Home",
	components: {
		PostList,
	},
};
</script>

<style scoped>
</style>