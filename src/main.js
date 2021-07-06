import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//components
import Home from './components/GeneralViews/Home'
import About from './components/GeneralViews/About/About'
import Header from './components/GeneralViews/Header/Header'
import HomeList from './components/Views/Houses/HouseList'

createApp(App)
	.component('HomeList', HomeList)
	.component('Home', Home)
	.component('About', About)
	.component('Header', Header)
	.use(store)
	.use(router)
	.mount('body')
