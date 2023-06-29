<template>
  <SubViewHeader title="Edit User" />

  <FormEdit
      :form-fields="formFields"
      :payload="userPayload"
      @edit-item="editUser"
  />

</template>

<script>
import SubViewHeader from "@/components/SubViewHeader"
import FormEdit from "@extendas/extendas-component-library/src/components/form-types/FormEdit";
import db from "@/firebase/init";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import router from "@/router";

export default {
  name: "UserEdit",
  components: {
    SubViewHeader,
    FormEdit
  },
  data() {
    return {
      user: {},
      userPayload: {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        roles: [],
      },
      userRoleProperties: ["SUPER_ADMIN", "ADMIN", "MANAGER", "USER"]
    }
  },
  mounted() {
    this.getUser()
  },
  computed: {
    formFields() {
      return [
        {title: "username", value: this.user.username, type: "text"},
        {title: "email", value: this.user.email, type: "text"},
        {title: "password", value: this.user.password, type: "password"},
        {title: "first_name", value: this.user.first_name, type: "text"},
        {title: "last_name", value: this.user.last_name, type: "text"},
        {title: "roles", value: this.userRoleProperties, type: "properties"},
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

    async editUser() {
      try {

        const userId = this.$route.params.id; // Get the user ID from the route parameter
        const userData = this.userPayload

        //If the filed has not been updated, then send current value
        for (const key in this.userPayload) {
          if (this.userPayload.hasOwnProperty(key)) {
            const value = this.userPayload[key];

            if (value === null || value === "" || value.length === 0) {
              this.userPayload[key] = this.user[key]
            }
          }
        }
        // Update the user document in the 'users' collection
        await updateDoc(doc(db, 'users', userId), userData);

        alert('User updated successfully');
        console.log('User updated successfully');

        // Redirect to the user overview page
        const route = router.resolve({
          name: 'UserOverview',
          params: { id: userId}
        });
        this.$router.push(route.path);
      } catch (error) {
        console.error('Error editing user:', error);
      }
    },

  },
}
</script>

<style scoped>

</style>
