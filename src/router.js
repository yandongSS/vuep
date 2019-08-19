import VueRouter from 'vue-router'

const home=()=>import('./components/home.vue')
const vip=()=>import('./components/vip.vue')
const cart=()=>import('./components/cart.vue')
const profile=()=>import('./components/profile.vue')
const news=()=>import('./components/news/newsList.vue')
const newsInfo=()=>import('./components/news/newsInfo.vue')
const photoList=()=>import('./components/photos/photoList.vue')
const photoInfo=()=>import('./components/photos/photoInfo.vue')
const goods=()=>import ('./components/goods/goodsList.vue')
const goodInfo=()=>import('./components/goods/goodInfo.vue')

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/home'
  },{
    path:'/home',
    component:home
  },{
    path:'/vip',
    component:vip
  },{
    path:'/cart',
    component:cart
  },{
    path:'/profile',
    component:profile
  },{
    path:'/home/news',
    component:news
  },{
    path:'/home/news/:id',
    component:newsInfo
  },{
    path:'/home/photos',
    component:photoList
  },{
    path:'/home/photoInfo/:id',
    component:photoInfo
  },{
    path:'/home/goods',
    component:goods
  },{
    path:'/home/goodInfo/:id',
    component:goodInfo
  }
  ],
  linkActiveClass:'mui-active',
  // mode:'history'
})

// 把路由对象暴露出去
export default router