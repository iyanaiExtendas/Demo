<template>

  <h2>Overview</h2>


    <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="desserts"
        item-value="name"
        class="elevation-1"
    ></v-data-table>



</template>

<script>
export default {
  name: "Users"
}
</script>

<style scoped>

</style>
