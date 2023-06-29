<template>
  <skeleton-base
      :application-title="applicationTitle"
      :menu-data="menuData"
      :application-modules="applicationModules"
      :user-data="userData"
      :impersonation-options="impersonationOptions"
      :notifications="notifications"
      :img-src1="imgSrc1"
      :img-src2="imgSrc2"
      @set-application-name="setApplicationName"
      @clear-notifications="clearNotifications"
      @go-to-route="goToRoute"
      @go-to-route-search="goToRoute"
      @stop-impersonation="handleStopImpersonation"
      @logout="handleLogout"
  ></skeleton-base>

</template>

<script>

import MenuData from "@/initData/menuData"
import ApplicationModules from "@/initData/applicationModules";
import ImpersonationOptions from "@/initData/impersonationOptions";
import Notifications from "@/initData/notifications"
import router from "@/router";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db, {auth} from '@/firebase/init';

export default {
  name: 'Dashboard',

  emits: ['logout'],
  data() {
    return {
      applicationTitle: 'SPIN',
      menuData: MenuData,
      applicationModules: ApplicationModules,
      impersonationOptions: ImpersonationOptions,
      notifications: Notifications,
      userData: {},
      imgSrc1: require('@/assets/extendas-square-vector.svg'),
      imgSrc2: require('@/assets/extendas-name-logo-vector.svg'),
    }
  },
  mounted() {

    this.queryUserByName(auth.currentUser.displayName)
  },
  methods: {
    setApplicationName(name) {
      this.applicationTitle = name
      alert("You are now using SPIN Module: " + this.applicationTitle)
    },
    clearNotifications(clearedNotifications) {
      this.notifications = clearedNotifications
    },
    goToRoute(routeToGo) {
      const route = router.resolve({
        name: routeToGo,
      });
      this.$router.push(route.path);

    },
    handleStopImpersonation() {
      //Implement logout functionality here
      alert("You are no logger impersonating")
    },
    handleLogout() {
      this.$emit('logout')

    },
    async queryUserByName(username) {

      const usersRef = collection(db, "users");

      // Query the collection for a specific user based on firstName
      const q = query(usersRef, where("username", "==", username));

      try {
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          // User not found
          console.log("User not found");
          return;
        }

        // Get the user data from the query result
        const userDoc = querySnapshot.docs[0];
        this.userData = userDoc.data();

      } catch (error) {
        console.error('Failed to get user with ID: ', id, error)
      }
    },


  },

}

</script>
