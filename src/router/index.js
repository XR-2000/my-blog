import Vue from 'vue';
import Router from 'vue-router';
//import Home from '../views/home/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: () => import('../views/login/Login.vue'),
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/login/Login.vue')
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('../views/home/Home.vue'),
			children: [
				{
					path: '/my',
					name: 'my',
					component: () => import('../views/home/my/My.vue')
				}
			]
		}
	]
});
