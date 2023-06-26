<template>

  <h1 class="text-center mt-5 text-md-h2" style="color: #009b80 ">Saxion Demo Application</h1>
  <div class="login-container">
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
  </div>
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
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
              console.error('Credentials are wrong or user does not exist');
              this.showAlert = true;
            } else {
              alert('An error occurred during login')
              console.error('An error occurred during login:', error.message);
            }
          });
    }

  }
}
</script>

<style scoped>

.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.login-form {
  width: 500px;
  margin: 0 auto;
}

.form-title {
  color: #DD4814;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
}
</style>
