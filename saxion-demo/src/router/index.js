import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Users from "@/views/Users";
import ChargePoints from "@/views/ChargePoints";

const routes = [
  {
    path: '/Dashboard',
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
