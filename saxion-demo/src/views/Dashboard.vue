<template>
  <h1>Welcome {{displayName}}</h1>
  <h3>Your Dashboard!!!</h3>
</template>

<script>
import { auth } from '@/firebase/init.js'
export default {
  name: 'Dashboard',
  data() {
    return {
      displayName: '',
    }
  },
  mounted() {
    if (auth.currentUser) {
      // set local 'displayName' to user's displayName
      this.displayName = auth.currentUser.displayName
    }
  }

}

</script>
