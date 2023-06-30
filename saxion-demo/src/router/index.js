import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/Dashboard";
import Users from "@/views/users/Users";
import UserOverview from "@/views/users/UserOverview";
import UserEdit from "@/views/users/UserEdit";
import UserAdd from "@/views/users/UserAdd";
import ChargePoints from "@/views/chargePoints/ChargePoints";
import ChargePointAdd from "@/views/chargePoints/ChargePointAdd";
import ChargePointOverview from "@/views/chargePoints/ChargePointOverview";
import ChargePointEdit from "@/views/chargePoints/ChargePointEdit";
import Groups from "@/views/Groups";
import Login from "@/views/Login";

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users
  },
  {
    path: '/User/Add',
    name: 'UserAdd',
    component: UserAdd
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
  {
    path: '/ChargePoint/Add',
    name: 'ChargePointAdd',
    component: ChargePointAdd
  },
  {
    path: '/ChargePoint/:id/Overview',
    name: 'ChargePointOverview',
    component: ChargePointOverview
  },
  {
    path: '/ChargePoint/:id/Edit',
    name: 'ChargePointEdit',
    component: ChargePointEdit
  },
  {
    path: '/Groups',
    name: 'Groups',
    component: Groups
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
