import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Users from "@/views/users/Users";
import UserOverview from "@/views/users/UserOverview";
import UserEdit from "@/views/users/UserEdit";
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
    path: '/User/:id/Overview',
    name: 'UserOverview',
    component: UserOverview
  },
  {
    path: '/User/:id/Edit',
    name: 'UserEdit',
    component: UserEdit
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
