<template>
  <SubViewHeader title="Add Charge Point" />
  <form-add
      :form-fields="formFields"
      :payload="chargePointPayload"
      @add-item="addUser"/>


</template>

<script>
import SubViewHeader from "@/components/SubViewHeader";
import {addDoc, collection} from "firebase/firestore";
import db from "@/firebase/init";
import router from "@/router";

export default {
  name: "ChargePointAdd",
  components: {
    SubViewHeader,
  },
  data() {
    return {
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
      capabilityOptions: ["SUPER_ADMIN", "ADMIN", "MANAGER", "USER"],
      connectorEntity: [{
          number: null,
          status: "",
          standard: "",
          format: "",
          power_type: "",
          voltage: null,
          amperage: null
        }]

    }
  },
  computed: {
    formFields() {
      return [
        { title: "name", value:'', type: "text" },
        { title: "status", value: '', type: "text" },
        { title: "auth_name", value: '', type: "text" },
        { title: "auth_password", value: '', type: "password" },
        { title: "availability", value: '', type: "text" },
        { title: "tariff_group_id", value: '', type: "number" },
        { title: "configuration_group_id", value: '', type: "number" },
        { title: "free_of_charge_token_contract_id", value: '', type: "number" },
        { title: "connectors", value: this.connectorEntity, type: "entity" },
        { title: "capabilities", value: this.capabilityOptions, type: "options" },
      ];

    },

  },
  methods: {
    async addUser() {
      const colRef = collection(db, 'chargePoints');
      const chargePoint = this.chargePointPayload;

      try {
        await addDoc(colRef, chargePoint);

        alert("Charge Point Added");

        // Redirect to the chargePoint users page
        const route = router.resolve({
          name: 'ChargePoints',
        });
        this.$router.push(route.path);
      } catch (error) {
        console.log('Error creating chargePoint:', error.message);
      }
    },
  },
}
</script>

<style scoped>

</style>
