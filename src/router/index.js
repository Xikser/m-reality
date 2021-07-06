import {createRouter, createWebHistory} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../components/GeneralViews/Home.vue')
	},
	{
		path: '/houses',
		name: 'houses',
		component: () => import('../components/Views/Houses/HouseList.vue')
	},
	{
		name: 'House',
		path: '/house/:id',
		component: () => import('../components/Views/Houses/HouseDetails/HouseDetails')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	mode: 'abstract'
})

export default router
