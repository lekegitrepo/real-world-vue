import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import EventCreate from '../views/EventCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'events',
    component: EventList
  },
  {
    path: '/event',
    name: 'event',
    component: EventShow
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
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

export default router
