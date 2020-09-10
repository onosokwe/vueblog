import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Article from './views/ViewArticle.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes : [
		{
			path: '/login',
			component: Login
		},
		{
			path: '/signup',
			component: Signup
		},
		{
			path: '/home',
			component: Home
		},
		{
			path: '/admin',
			component: Admin
		},
		{
			path: '/article/:id',
			component: Article
		}
	]
})

export default router 
