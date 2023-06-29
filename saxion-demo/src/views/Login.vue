<template>
  <div class="page-container">
    <h1 class="text-center mt-5 text-lg-h2" style="color: #009b80 ">Saxion Demo Application</h1>
    <div class="login-container">
      <v-form @submit.prevent="login" class="login-form">
        <div class="logo-container pl-2">
          <v-img
              aspect-ratio="16/9"
              :width="230"
              src="@/assets/extendas-name-logo-vector.svg"
          ></v-img>
          <h2 class="form-title">Log in</h2>
        </div>

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
        <v-btn color="#DD4814" class="text-white" dark block type="submit">Log in</v-btn>
        <v-alert
            v-if="showAlert"
            color="error"
            closable="true"
            close-label="Close Alert"
            class="mt-5"
        > User not found or does not exist
        </v-alert>
      </v-form>
    </div>

  </div>

</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/init.js'
import router from "@/router";

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
      const route = router.resolve({
        name: 'Dashboard',
      });
      this.$router.push(route.path);
    }

  }
}
</script>

<style scoped>

.page-container {
  background-image: url(../assets/saxion-bg.jpg);
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  padding-top: 10px;
  height: 100vh;
}


.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 40%;
  margin: 4rem auto;
  padding: 0;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
