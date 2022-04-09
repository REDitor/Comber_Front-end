<template>
	<!-- Footer based from https://mdbootstrap.com/snippets/standard/mdbootstrap/2885069?view=side -->

		<footer class="container-fluid text-center text-lg-start text-white">
			<div class="container p-4 pb-0">
					<div class="row">
						<div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
							<h6 class="text-success text-uppercase mb-4 font-weight-bold">About Comber</h6>
							<p>
								Comber is a simple blog and social media initiative, created to share uncensored information with your peers.
							</p>
						</div>
						<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
							<h6 class="text-success text-uppercase mb-4 font-weight-bold">Contact</h6>
							<p>
								<i class="text-success fas fa-home mr-3"></i> IJmuiden, 1973 XT, The Netherlands
							</p>
							<p>
								<i class="text-success fas fa-envelope mr-3"></i> 650397@student.inholland.nl
							</p>
						</div>
					</div>
			</div>

			<div class="text-center py-3 mt-3 bg-dark">
				Comber © 2021 Copyright:
				<a class="text-success" href="https://github.com/REDitor" target="_blank">S. Harks @ GitHub</a>
			</div>
		</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
	background-color: #333;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
</style>