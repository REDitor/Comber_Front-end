<template>
	<div class="card">
		<div class="card-body">
			<h3 class="card-title">{{ post.postedBy }}</h3>
            <p class="card-text">{{ post.message }}</p>
            <small class="card-text">{{ formatDateTime(post.postedAt) }}</small>
		</div>
	</div>
</template>

<script>
import moment from 'moment';

export default {
	name: "Post",
	props: {
        post: Object,
    },
    methods: {
		formatDateTime(dateTime) {
			return moment(dateTime).format('dddd MMMM Do YYYY') + ' at ' + moment(dateTime).format('h:mm a');
		}
    }
}
</script>

<style scoped>
</style>