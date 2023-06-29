<template>
  <SubViewHeader title="Users" />

  <v-btn prepend-icon="mdi-plus" class="text-white bg-green ml-6 mb-8 mt-5 text-center" text="Add User" @click="handleClick"></v-btn>

  <div class="table-container">
    <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
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
import SubViewHeader from "@/components/SubViewHeader";

export default {
  name: "Users",
  components: {
    SubViewHeader,
  },
  data() {
    return {
      itemsPerPage: 10,
      users: [],
      headers: [
        { title: 'Username', key: 'username' },
        { title: 'First Name', key: 'first_name' },
        { title: 'Last Name', key: 'last_name' },
        { title: 'Email', key: 'email' },
        { title: 'Actions', key: 'actions' }
      ],
    };
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
    handleClick() {
      const route = router.resolve({
        name: 'UserAdd',
      });
      this.$router.push(route.path);

    }
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
