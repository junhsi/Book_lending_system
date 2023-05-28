import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/SideMenu_element/userinfo',
        name: 'UserInfo',
        component: () => import('../views/SideMenu_element/UserInfo.vue')
      },
      {
        path: '/SideMenu_element/book',
        name: 'Book',
        component: () => import('../views/SideMenu_element/Book.vue')
      },
      {
        path: '/SideMenu_element/book_borrowed',
        name: 'Book_borrowed',
        component: () => import('../views/SideMenu_element/Book_borrowed.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
