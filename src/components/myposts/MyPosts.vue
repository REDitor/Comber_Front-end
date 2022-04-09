<template>
  <section>
		<div class="container">
			<h1 class="mb-5">{{ this.getUsername() }}</h1>
			<div>
        <h2>Your Posts:</h2>
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