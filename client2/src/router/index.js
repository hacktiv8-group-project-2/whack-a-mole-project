import Vue from 'vue'
import VueRouter from 'vue-router'
import GameBoard from '../views/GameBoard.vue'
// import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GameBoard',
    component: GameBoard
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/*
router.beforeEach((to, from, next) => {
  console.log('test')
  if (to.name === 'GameBoard' && store.state.username === '') {
    next({ name: 'Login' })
  } else {
    next()
  }
})
*/

export default router
