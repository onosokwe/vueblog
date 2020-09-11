import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus, {
	shortname: 'vueblog-5'
})

Vue.config.productionTip = false

const authData = localStorage.getItem("auth")
const adminData = localStorage.getItem("admin")

new Vue({
	router,
	data: {
		auth: authData ? JSON.parse(authData) : null,
		admin: adminData ? JSON.parse(adminData) : null,
	},
	render: h => h(App),
}).$mount('#app')
