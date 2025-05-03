import { createRouter, createWebHistory } from "vue-router";

// Lazy loaded
const Login = () => import('../pages/Login.vue')
const Dashboard = () => import('../pages/Dashboard.vue')
const Admin = () => import('../pages/Admin.vue')
import { useAuthStore } from '../store/auth'
import DynamicForm from "@/components/DynamicForm.vue";

const routes = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/form', name: 'Login', component: DynamicForm },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true, roles: ['user', 'admin'] }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true, roles: ['admin'] }
    },
    { path: '/', redirect: '/dashboard' }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })


  router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    if (to.meta.requiresAuth && !auth.isLoggedIn) {
      return next('/login')
    }
  
    if (to.meta.roles && !to.meta.roles.includes(auth.user?.role)) {
      return next('/dashboard')
    }
  
    next()
  })


  export default router
