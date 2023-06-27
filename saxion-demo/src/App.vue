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
import { createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth'
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
    }
  },

  //Only used to populate database with values when creating it or if it is empty
  created() {
    // this.createUsers()
    // this.createChargePoints()
  },

  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user;
    });
  },

  methods: {
    async createUsers() {
      const colRef = collection(db, 'users');
      const users = usersData;

      for (const user of users) {
        try {
          await addDoc(colRef, user);
          const credential = await createUserWithEmailAndPassword(auth, user.email, user.password);
          const authUser = credential.user;

          //Add user for authentication
          await updateProfile(authUser, {
            displayName: user.username
          });

          console.log("Users collection created with authentication", authUser);
        } catch (error) {
          console.log('Error creating user:', error.message);
        }
      }
    },

    async createChargePoints() {
      const colRef = collection(db, 'chargePoints');
      const chargePoints = chargePointData;

      for (const chargePoint of chargePoints) {
        try {
          await addDoc(colRef, chargePoint);
        } catch (error) {
          console.log('Error creating charge point:', error.message);
        }
      }

      console.log("chargePoints collection created");
    },

    login() {
      this.isLoggedIn = true;
    },

    async logOut() {
      await signOut(auth)
          .then(() => {
            alert("You are logged out");
            this.isLoggedIn = false;
          })
          .catch((error) => {
            console.log('Error signing out:', error.message);
          });
    }
  }
}
</script>
