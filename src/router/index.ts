import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "../../page/HomePage.vue";
import UserLoginPage from '../../page/user/UserLoginPage.vue'
import UserRegisterPage from '../../page/user/UserRegisterPage.vue'
import UserManagePage from '../../page/admin/UserManagePage.vue'
import AddPicturePage from '../../page/AddPicturePage.vue'
import PictureManagePage from '../../page/admin/PictureManagePage.vue'
import PictureDetailPage from '../../page/PictureDetailPage.vue'
import AddPictureBatchPage from '../../page/AddPictureBatchPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: UserLoginPage,
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: UserRegisterPage,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/add_picture',
      name: '创建图片',
      component: AddPicturePage,
    },
    {
      path: '/add_picture/batch',
      name: '批量创建图片',
      component: AddPictureBatchPage,
    },
    {
      path: '/admin/pictureManage',
      name: '图片管理',
      component: PictureManagePage,
    },
    {
      path: '/picture/:id',
      name: '图片详情',
      component: PictureDetailPage,
      props: true,
    },
  ],
})

export default router
