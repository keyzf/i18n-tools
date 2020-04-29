import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/',
      name: 'index-page',
      component: require('@/pages/home').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
