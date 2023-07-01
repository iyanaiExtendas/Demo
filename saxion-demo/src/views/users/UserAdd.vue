<template>
  <SubViewHeader title="Add User" />
  <form-add
      :form-fields="formFields"
      :payload="userPayload"
      @add-item="addUser"/>


</template>

<script>
import SubViewHeader from "@/components/SubViewHeader";
import {addDoc, collection} from "firebase/firestore";
import db, {auth} from "@/firebase/init";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import router from "@/router";

export default {
  name: "UserAdd",
  components: {
    SubViewHeader,

  },
  data() {
    return {
      userPayload: {
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        profilePicture: "",
        roles: [],
      },
      userRoleOptions: ["SUPER_ADMIN", "ADMIN", "MANAGER", "USER"]
    }
  },
  computed: {
    formFields() {
      return [
        {title: "username", value: '', type: "text"},
        {title: "email", value: '', type: "text"},
        {title: "password", value: '', type: "password"},
        {title: "first_name", value: '', type: "text"},
        {title: "last_name", value: '', type: "text"},
        {title: "profilePicture", value: '', type: "text"},
        {title: "roles", value: this.userRoleOptions, type: "options"},
      ]
    }
  },
  methods: {
    async addUser() {
      const colRef = collection(db, 'users');
      const user = this.userPayload;

        try {
          await addDoc(colRef, user);
          const credential = await createUserWithEmailAndPassword(auth, user.email, user.password);
          const authUser = credential.user;

          //Add user for authentication
          await updateProfile(authUser, {
            displayName: user.username
          });

          console.log("Users collection created with authentication");

          // Redirect to the user users page
          const route = router.resolve({
            name: 'Users',
          });
          this.$router.push(route.path);
        } catch (error) {
          console.log('Error creating user:', error.message);
        }

    },
  },
}
</script>

<style scoped>

</style>
