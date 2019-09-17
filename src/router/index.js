import Vue from 'vue'
import Router from 'vue-router'
import AppWelcome from '@/components/AppWelcome'
import AppChat from '@/components/AppChat'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Welcome',
			component: AppWelcome
		},
		{
			path: '/chat',
			name: 'Chat',
			component: AppChat,
			props: true,
			beforeEnter: (to, from, next)=> {
				console.log(to.params.name);
				if(to.params.name) {
					next()
				} else {
					next({name: 'Welcome'})
				}
			}
		}
	]
})