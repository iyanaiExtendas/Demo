<template>
  <SubViewHeader title="Charge Point Overview" />

  <form-overview
      :form-fields="formFields"
      :edit-route-path="editRoute.path"
      @delete-item-by-id="deleteChargePoint" />

</template>

<script>
import SubViewHeader from "@/components/SubViewHeader";
import router from "@/router";
import {deleteDoc, doc, getDoc} from "firebase/firestore";
import db, {auth} from "@/firebase/init";
import {deleteUser, signInWithEmailAndPassword} from "firebase/auth";

export default {
  name: "ChargePointOverview",
  components: {
    SubViewHeader,
  },
  data() {
    return {
      chargePoint: {},
      editRoute: ''
    }
  },
  mounted() {
    this.getChargePoint()
    this.editRoute =  router.resolve({
      name: 'ChargePointEdit',
      params: { id: this.$route.id }
    })
  },
  computed: {
    formFields() {
      return [
        {title: "name", value: this.chargePoint.name, type: "text"},
        {title: "status", value: this.chargePoint.status, type: "text"},
        {title: "auth_name", value: this.chargePoint.auth_name, type: "number"},
        {title: "availability", value: this.chargePoint.availability, type: "boolean"},
        {title: "tariff_group_id", value: this.chargePoint.tariff_group_id, type: "number"},
        {title: "configuration_group_id", value: this.chargePoint.configuration_group_id, type: "number"},
        {title: "free_of_charge_token_contract_id", value: this.chargePoint.free_of_charge_token_contract_id, type: "number"},
        {title: "connectors", value: this.chargePoint.connectors, type: "entity"},
        {title: "capabilities", value: this.chargePoint.capabilities, type: "options"},
      ]
    }
  },
  methods: {
    async getChargePoint() {
      try {
        const docSnap = await getDoc(doc(db, 'chargePoints', this.$route.params.id));

        if (docSnap.exists()) {
          this.chargePoint = docSnap.data();
        } else {
          console.error('Charge point does not exist');
        }
      } catch (error) {
        console.error('Error retrieving charge point :', error);
      }
    },

    async deleteChargePoint() {
      try {

        // Delete the charge point document from the 'chargePoints' collection in Firestore
        await deleteDoc(doc(db, 'chargePoints', this.$route.params.id));
        alert('Charge point deleted successfully');
        console.log('Charge point deleted successfully');

        // Redirect to the users page
        const route = router.resolve({
          name: 'ChargePoints',
        });
        this.$router.push(route.path);

      } catch (error) {
        console.error('Error deleting charge point :', error);
      }
    },
  },
}
</script>

<style scoped>

</style>
