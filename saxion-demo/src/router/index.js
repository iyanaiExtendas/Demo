import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Users from "@/views/users/Users";
import ChargePoints from "@/views/chargePoints/ChargePoints";

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/ChargePoints',
    name: 'ChargePoints',
    component: ChargePoints
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
