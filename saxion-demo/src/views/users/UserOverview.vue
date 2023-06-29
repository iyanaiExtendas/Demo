<template>
  <SubViewHeader title="User Overview" />

  <FormOverview
      :form-fields="formFields"
      :edit-route-path="editRoute.path"
      @delete-item-by-id="deleteUser" />

</template>

<script>
import SubViewHeader from "@/components/SubViewHeader";
import FormOverview from "@extendas/extendas-component-library/src/components/form-types/FormOverview";
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import {deleteUser, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '@/firebase/init.js'
import db from "@/firebase/init";
import router from "@/router";

export default {
  name: "UserOverview",
  components: {
    SubViewHeader,
    FormOverview
  },
  data() {
    return {
      user: {},
      editRoute: ''
    }
  },
  mounted() {
    this.getUser()
    this.editRoute =  router.resolve({
      name: 'UserEdit',
      params: { id: this.$route.id }
    })
  },
  computed: {
    formFields() {
      return [
        {title: "username", value: this.user.username, type: "text"},
        {title: "email", value: this.user.email, type: "text"},
        {title: "first_name", value: this.user.first_name, type: "text"},
        {title: "last_name", value: this.user.last_name, type: "number"},
        {title: "roles", value: this.user.roles, type: "properties"},
      ]
    }
  },
  methods: {
    async getUser() {
      try {
        const docSnap = await getDoc(doc(db, 'users', this.$route.params.id));

        if (docSnap.exists()) {
          this.user = docSnap.data();
        } else {
          console.error('User does not exist');
        }
      } catch (error) {
        console.error('Error retrieving user:', error);
      }
    },

    async deleteUser() {
      try {
        const email = this.user.email;
        const password = this.user.password;

        // Check if the current user is the user being deleted
        const currentUser = auth.currentUser;
        if (currentUser && currentUser.email === email) {
          alert('Cannot delete the currently signed-in user');
          return;
        }

        // Delete the user from Firebase Authentication
        await signInWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        await deleteUser(user);

        // Delete the user document from the 'users' collection in Firestore
        await deleteDoc(doc(db, 'users', this.$route.params.id));
        alert('User deleted successfully');
        console.log('User deleted successfully');

      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },



  },
}
</script>

<style scoped>

</style>
