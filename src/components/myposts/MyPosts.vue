<template>
  <section>
		<div class="container">
			<h1 class="mb-5">Welcome to Comber</h1>
			<div>
        <h2>Recent Posts:</h2>
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
    }
}
</script>

<style scoped>

</style>