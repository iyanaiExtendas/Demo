<template>
  <group-tabs :tab-titles="['Users','ChargePoints']">

    <template v-slot:users>
      <div class="ma-8">
       <Users/>
      </div>
    </template>

    <template v-slot:chargepoints>
     <div class="ma-8">
       <ChargePoints/>
     </div>
    </template>


  </group-tabs>

</template>

<script>
import Users from "@/views/users/Users";
import ChargePoints from "@/views/chargePoints/ChargePoints";

export default {
  name: "Groups",
  components: {
    ChargePoints,
    Users,
  },
}
</script>

<style scoped>

</style>
