import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import EventCreate from '../views/EventCreate.vue'
import PageNotFound from '../views/PageNotFound.vue'
import NProgress from 'nprogress'
import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'events',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '*',
    component: PageNotFound
  }
  // {
  //   path: "/event",
  //   name: "Event",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach((routeTo, routeFrom, next) => {
  NProgress.done()
})

export default router
