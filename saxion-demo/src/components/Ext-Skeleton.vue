<template>
  <SkeletonBase
      :application-title="applicationTitle"
      :menu-data="menuData"
      :application-modules="applicationModules"
      :user-data="userData"
      :impersonation-options="impersonationOptions"
      :notifications="notifications"
      @set-application-name="setApplicationName"
      @clear-notifications="clearNotifications"
      @go-to-route="goToRoute"
      @go-to-route-search="goToRoute"
      @stop-impersonation="handleStopImpersonation"
      @logout="handleLogout"
  ></SkeletonBase>

</template>

<script>

import SkeletonBase from "@extendas/extendas-component-library/src/components/skeleton/SkeletonBase"
import MenuData from "@/initData/menuData"
import ApplicationModules from "@/initData/applicationModules";
import ImpersonationOptions from "@/initData/impersonationOptions";
import Notifications from "@/initData/notifications"
import router from "@/router";
import { collection, getDocs, query, where } from 'firebase/firestore';
import db, {auth} from '@/firebase/init';
import { signOut } from 'firebase/auth'

export default {
  name: 'Dashboard',
  components: {
    SkeletonBase,
  },
  emits: ['logout'],
  props: {
    identifierAuth: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      applicationTitle: 'SPINcpi',
      menuData: MenuData,
      applicationModules: ApplicationModules,
      impersonationOptions: ImpersonationOptions,
      notifications: Notifications,
      userData: {},
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

          console.log("User data:", this.userData);

      } catch (error) {
        console.error('Failed to get user with ID: ', id, error)
      }
    },


  },

}

</script>
