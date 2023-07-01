<template>
  <SubViewHeader title="Charge Points" />

  <v-btn prepend-icon="mdi-plus" class="text-white bg-green ml-6 mb-8 mt-5 text-center" text="Add Charge Point" @click="handleClick"></v-btn>

  <div class="table-container">
    <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="chargePoints"
        item-value="name"
        class="elevation-1"
        :class="{ 'no-data': chargePoints.length === 0 }"
        :footer-props="{
        itemsPerPageOptions: [5, 10, 25],
        'items-per-page-text': 'Items per page:',
        'show-current-page': true,
        'show-first-last-page': true
      }"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon @click="viewChargePoint(item)">mdi-eye</v-icon>
        <v-icon @click="editChargePoint(item)">mdi-pencil</v-icon>
      </template>
      <template v-slot:no-data>
        <v-alert color="info" icon="mdi-information" dense>No charge points found.</v-alert>
      </template>
    </v-data-table>

  </div>

</template>

<script>

import SubViewHeader from "@/components/SubViewHeader";
import {collection, getDocs, query} from "firebase/firestore";
import db from "@/firebase/init";
import router from "@/router";

export default {
  name: "ChargePoints",
  components: {
    SubViewHeader,
  },
  data() {
    return {
      itemsPerPage: 10,
      chargePoints: [],
      headers: [
        { title: 'Name', key: 'name' },
        { title: 'Status', key: 'status' },
        { title: 'Auth Name', key: 'auth_name' },
        { title: 'Availability', key: 'availability' },
        { title: 'Tariff Group ID', key: 'tariff_group_id' },
        { title: 'Actions', key: 'actions' }
      ],
    };
  },
  mounted() {
    this.queryChargePoints();
  },
  methods: {
    async queryChargePoints() {
      const querySnap = await getDocs(query(collection(db, 'chargePoints')));
      this.chargePoints = querySnap.docs.map((doc) => {
        const chargePointData = doc.data();
        chargePointData.id = doc.id;
        return chargePointData;
      });
    },
    viewChargePoint(chargePoint) {
      const name =  chargePoint.columns.name;
      const selectedChargePoint = this.chargePoints.find((c) => c.name === name);
      console.log( selectedChargePoint )

      const route = router.resolve({
        name: 'ChargePointOverview',
        params: { id: selectedChargePoint.id }
      });
      this.$router.push(route.path);
    },
    editChargePoint(chargePoint) {
      const name =  chargePoint.columns.name;
      const selectedChargePoint = this.chargePoints.find((c) => c.name === name);
      console.log( selectedChargePoint )

      const route = router.resolve({
        name: 'ChargePointEdit',
        params: { id: selectedChargePoint.id }
      });
      this.$router.push(route.path);

    },
    handleClick() {
      const route = router.resolve({
        name: 'ChargePointAdd',
      });
      this.$router.push(route.path);

    }
  },

}
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
