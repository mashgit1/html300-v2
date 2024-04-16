import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import HistoryPage from './components/HistoryPage.vue'
import ComparisonPage from './components/ComparisonPage.vue'
import DrinksPage from './components/DrinksPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/history', component: HistoryPage },
  { path: '/comparison', component: ComparisonPage },
  { path: '/drinks', component: DrinksPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')