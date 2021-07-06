import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//components
import Home from './components/GeneralViews/Home'
import HomeList from './components/Views/Homes/HomeList'

createApp(App)
	.component('HomeList', HomeList)
	.component('Home', Home)
	.use(store)
	.use(router)
	.mount('body')
