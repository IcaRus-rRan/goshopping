import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引用这句话点击相同的路由不会报错
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [{
    //路由默认路径
    path: '',
    redirect: '/home', // 重定向  如果路径是空 就定向到home
  },{
    path: '/home',
    component: Home,
  },{
    path: '/category',
    component: Category
  },{
    path: '/shopcart',
    component: Shopcart
  },{
    path: '/profile',
    component: Profile
  },{
    // path: '/detail/:iid',
    path: '/detail/:acm',
    component: Detail
  }]
  
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
