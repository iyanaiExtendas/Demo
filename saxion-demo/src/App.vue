<template>

  <Login
      v-if="!isLoggedIn"
      @loggedIn="login"/>
  <ExtSkeleton
      v-else
      @logout="logOut"/>


</template>


<script>
import ExtSkeleton from '@/components/Ext-Skeleton'
import { addDoc, collection, setDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import db from '@/firebase/init';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import { auth } from '@/firebase/init'
import usersData from '@/initData/users'
import chargePointData from '@/initData/chargePoints'
import Login from "@/views/Login";



export default {
  name: 'App',

  components: {
    Login,
    ExtSkeleton,
  },
  data() {
    return {
      isLoggedIn: false,
      isAuthResolved: false
    }
  },
  //Only used to populate database with values when creating it or if it is empy
  created() {
    // this.createUsers()
    // this.createChargePoints()
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user;
      this.isAuthResolved = true;
    });
  },
  methods: {

    async createUsers() {
      // 'users' collection reference
      const colRef = collection(db, 'users');

      // Data from the JavaScript file
      const users = usersData

      // Create a document for each user
      for (const user of users) {
        await addDoc(colRef, user);
        // register new user
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((credential) => {

              updateProfile(auth.currentUser, {
                displayName: user.username
              })
              // registered and signed in
              console.log(credential.user)
            })
            .catch((error) => {
              console.log(error.message)
            })
      }

      console.log("Users collection created, with authentication");
    },

    async createChargePoints() {
      // 'chargePoints' collection reference
      const colRef = collection(db, 'chargePoints');

      // Data from the JavaScript file
      const chargePoints = chargePointData

      // Create a document for each chargePoint
      for (const chargePoint of chargePoints) {
        await addDoc(colRef, chargePoint);
      }

      console.log("chargePoints collection created");
    },

    login() {
      this.isLoggedIn = true;
    },

    logOut() {

      signOut(auth)
          .then(() => {
            // user signed-out
            alert("You are logged out")

          })

    }

  }
}
</script>
