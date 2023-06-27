<template>
  <h2 class="ml-5 my-8">Overview</h2>
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
import { collection, getDocs, query } from 'firebase/firestore';
import db from '@/firebase/init';
import router from '@/router/index'
import UserEdit from "@/views/users/UserEdit";

export default {
  name: "Users",
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
  mounted() {
    this.queryUsers();
  },
  methods: {
    async queryUsers() {
      const querySnap = await getDocs(query(collection(db, 'users')));
      this.users = querySnap.docs.map((doc) => {
        const userData = doc.data();
        userData.id = doc.id;
        return userData;
      });
    },
    viewUser(user) {
      const username =  user.columns.username;
      const selectedUser = this.users.find((u) => u.username === username);
      console.log( selectedUser )

      const route = router.resolve({
        name: 'UserOverview',
        params: { id: selectedUser.id }
      });
      this.$router.push(route.path);
    },
    editUser(user) {
      const username =  user.columns.username;
      const selectedUser = this.users.find((u) => u.username === username);
      console.log( selectedUser )

      const route = router.resolve({
        name: 'UserEdit',
        params: { id: selectedUser.id }
      });
      this.$router.push(route.path);

    },
  },
};
</script>

<style scoped>
.table-container {
  margin-left: 25px;
  width: 80%;
}

.no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
}

.v-data-footer .v-select__selections input {
  padding: 6px 4px;
}

</style>
