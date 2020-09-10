<template>
	<div class="container">
		<div class="row" v-if="!loading">
			<div class="col-md-8 offset-md-2" >
				<div class="card my-3">
					<div class="card-header text-center font-weight-bold">{{ article.title }}</div>
					<div class="card-body">
						<img :src="article.image" alt="" class="card-img-top" height="320px" />
						<div class="card-content" v-html="article.post"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="loader text-center" v-else>
			<i class="fa fa-3x fa-spin fa-spinner"></i>
		</div>
	</div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';

export default {
	mounted(){
		this.getArticle();
	},
	data() {
		return {
			article: '',
			loading: true
		}
	},
	methods: {
		getArticle(){
			Axios.post(`${config.apiUrl}/getsinglepost.php`, {postid: `${this.$route.params.id}` })
			.then(response => {
				this.loading = false;
				this.article = response.data.data;
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
}
</script>

<style>
img {
	max-width: 100%;
	margin: 0 auto;
}
</style>
