import VueRouter from 'vue-router'

const home=()=>import('./components/home.vue')
const vip=()=>import('./components/vip.vue')
const cart=()=>import('./components/cart.vue')
const profile=()=>import('./components/profile.vue')

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
  }
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router