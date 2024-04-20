import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CompareView from '../views/CompareView.vue'
import DrinksView from '../views/DrinksView.vue'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'Images',
    component: AboutView
  },
  {
    path: '/compare',
    name: 'Accordion',
    component: CompareView
  },
  {
    path: '/drinks',
    name: 'Grid System',
    component: DrinksView
  }
]

const router = new VueRouter({
  routes
})

export default router
