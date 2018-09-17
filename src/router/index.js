import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/view/homepage/welcome.vue'
import Home from '@/view/homepage/index'
import ResumeC from '@/view/resume/create'
import ResumeIndex from '@/view/resume/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/resume/create',
      component: ResumeC,
      name: 'ResumeC'
    },
    {
      path: '/resume',
      component: ResumeIndex,
      name: 'ResumeIndex'
    }
  ]
})

// export const asyncRouterMap = [
//   {
//     path: '/home',
//     component: Home,
//     name: 'Home',
//   }
// ]
