<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2" 
				v-for="article in articles.data" 
				:key="article.postid">
				<Article :article="article" />
			</div>
		</div>
		<div class="loader text-center">
			<i class="fa fa-3x fa-spin fa-spinner"></i>
		</div>
	</div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';
import Article from '@/components/Article';

export default {
	components: {
		Article
	},
	mounted(){
		this.getArticles();
	},
	data() {
		return {
			articles: {}
		}
	},
	methods: {
		getArticles(){
			Axios.post(`${config.apiUrl}/getposts.php`,{key:'aaa'})
			.then(response => {
				this.articles = response.data.data;
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
}
</script>