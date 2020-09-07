import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Welcome from './views/Home.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

const router = new Router({
	// mode: 'history',
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
			component: Welcome
		},
		{
			path: '/admin',
			component: Admin
		}
	]
})

export default router 