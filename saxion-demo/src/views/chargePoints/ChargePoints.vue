<template>
  <SubViewHeader title="Charge Points" />

  <v-btn prepend-icon="mdi-plus" class="text-white bg-green ml-6 mb-8 text-center" text="Add User" @click="handleClick"></v-btn>

  <div class="table-container">
    <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headersWithActions"
        :items="users"
        item-value="name"
        class="elevation-1"
        :class="{ 'no-data': users.length === 0 }"
        :footer-props="{
        itemsPerPageOptions: [5, 10, 25],
        'items-per-page-text': 'Items per page:',
        'show-current-page': true,
        'show-first-last-page': true
      }"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon @click="viewUser(item)">mdi-eye</v-icon>
        <v-icon @click="editUser(item)">mdi-pencil</v-icon>
      </template>
      <template v-slot:no-data>
        <v-alert color="info" icon="mdi-information" dense>No users found.</v-alert>
      </template>
    </v-data-table>

  </div>

</template>

<script>

import SubViewHeader from "@/components/SubViewHeader";

export default {
  name: "ChargePoints",
  components: {
    SubViewHeader,
  },
  data() {
    return {
      itemsPerPage: 5,
      users: [],
      headers: [
        { title: 'Username', key: 'username' },
        { title: 'First Name', key: 'first_name' },
        { title: 'Last Name', key: 'last_name' },
        { title: 'Email', key: 'email' },
      ],
    };
  },
  computed: {
    headersWithActions() {
      return [...this.headers, { title: 'Actions', key: 'actions' }];
    },
  },
}
</script>

<style scoped>

</style>
