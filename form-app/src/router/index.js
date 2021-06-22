import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  
  {
    path: '/todo',
    name: 'ToDo',
    // route level code-splitting
    // this generates a separate chunk (todo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todo" */ '../views/ToDo.vue')
  },
  {
    path: '/spark',
    name: 'Spark',
    // route level code-splitting
    // this generates a separate chunk (spark.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "spark" */ '../views/Spark.vue')
  },
  {
    path: '/autocomplete',
    name: 'AutoComp',
    // route level code-splitting
    // this generates a separate chunk (auto.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auto" */ '../views/AutoComp.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
