<template>
  <SubViewHeader title="Edit Charge Point" />

  <form-edit
      v-if="formFields.length > 0"
      :form-fields="formFields"
      :payload="chargePointPayload"
      @edit-item="editChargePoint"
  />

</template>

<script>
import SubViewHeader from "@/components/SubViewHeader";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import db from "@/firebase/init";
import router from "@/router";

export default {
  name: "ChargePointEdit",
  components: {
    SubViewHeader,
  },
  data() {
    return {
      chargePoint: {},
      formFields: [],
      chargePointPayload: {
        name: "",
        status: "",
        auth_name: "",
        auth_password: "",
        tariff_group_id: "",
        configuration_group_id: "",
        connectors: [],
        capabilities: [],
        availability: '',
        free_of_charge_token_contract_id: ""
      },
    }
  },
  mounted() {
    this.getChargePoint()
  },
  methods: {
    async getChargePoint() {
      try {
        const docSnap = await getDoc(doc(db, 'chargePoints', this.$route.params.id));

        if (docSnap.exists()) {
          this.chargePoint = docSnap.data();
          this.populateFormFields();
        } else {
          console.error('Charge point does not exist');
        }
      } catch (error) {
        console.error('Error retrieving charge point :', error);
      }
    },
    populateFormFields() {
      this.formFields = [
        { title: "name", value: this.chargePoint.name, type: "text" },
        { title: "status", value: this.chargePoint.status, type: "text" },
        { title: "auth_name", value: this.chargePoint.auth_name, type: "text" },
        { title: "auth_password", value: this.chargePoint.auth_password, type: "password" },
        { title: "availability", value: this.chargePoint.availability, type: "text" },
        { title: "tariff_group_id", value: this.chargePoint.tariff_group_id, type: "number" },
        { title: "configuration_group_id", value: this.chargePoint.configuration_group_id, type: "number" },
        { title: "free_of_charge_token_contract_id", value: this.chargePoint.free_of_charge_token_contract_id, type: "number" },
        { title: "connectors", value: this.chargePoint.connectors, type: "entity" },
        { title: "capabilities", value: this.chargePoint.capabilities, type: "options" },
      ];
    },

    async editChargePoint() {
      try {

        const chargePointId = this.$route.params.id; // Get the user ID from the route parameter
        const chargePointData = this.chargePointPayload

        //If the filed has not been updated, then send current value
        for (const key in this.chargePointPayload) {
          if (this.chargePointPayload.hasOwnProperty(key)) {
            const value = this.chargePointPayload[key];

            if (value === null || value === "" || value.length === 0) {
              this.chargePointPayload[key] = this.chargePoint[key]
            }
          }
        }
        // Update the charge points document in the 'users' collection
        await updateDoc(doc(db, 'chargePoints', chargePointId), chargePointData);

        alert('Charge point updated successfully');
        console.log('Charge point updated successfully');

        // Redirect to the charge point overview page
        const route = router.resolve({
          name: 'ChargePointOverview',
          params: { id: chargePointId}
        });
        this.$router.push(route.path);
      } catch (error) {
        console.error('Error editing charge point:', error);
      }
    },
    setFields() {


    }

  },
}
</script>

<style scoped>

</style>
