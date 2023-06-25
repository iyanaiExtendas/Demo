<template>
  <v-form @submit.prevent="login" class="login-form">
    <h2 class="form-title">Log in</h2>
    <v-text-field
        v-model="email"
        label="Email"
        type="email"
        required
        outlined
        dense
    ></v-text-field>
    <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
        outlined
        dense
    ></v-text-field>
    <v-btn color="#DD4814" dark block type="submit">Log in</v-btn>
    <v-alert
        v-if="showAlert"
        color="error"
        closable
        close-label="Close Alert"
        class="mt-5"
    > User not found or does not exist
    </v-alert>
  </v-form>


</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/init.js'

export default {
  name: 'Login',
  emits: ['loggedIn'],
  data() {
    return {
      email: '',
      password: '',
      showAlert: false
    }
  },
  methods: {
    login() {
      // login user
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            // emit event for member area
            this.$emit('loggedIn');
            console.log("User Logged in")
          })
          .catch((error) => {
            // handle login error
            console.error("Credentials are wrong or user does not exist");
            this.showAlert = true;

          });
    }

  }
}
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 0 auto;
}

.form-title {
  color: #DD4814;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
}
</style>
