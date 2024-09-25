import './assets/main.css'
import Home from './pages/Home.vue'

import { createApp } from 'vue'
import Favorites from './pages/Favorites.vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')
