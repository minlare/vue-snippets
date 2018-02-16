import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Projects from '@/components/Projects'
import Project from '@/components/Project'
import Grid from '@/components/Grid'
import PromoBar from '@/components/PromoBar'
import BannerBar from '@/components/BannerBar'
import Form from '@/components/Form'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/projects',
      name: 'Project List',
      component: Projects
    },
    {
      path: '/projects/:id',
      name: 'project/view',
      component: Project
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/promo-bar',
      name: 'promo-bar',
      component: PromoBar
    },
    {
      path: '/banner-bar',
      name: 'banner-bar',
      component: BannerBar
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    }
  ]
})
