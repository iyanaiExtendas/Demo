<template>
  <SubViewHeader title="Edit Charge Point" />

<!--  <FormEdit-->
<!--      :form-fields="formFields"-->
<!--      :payload="userPayload"-->
<!--      @edit-item="editUser"-->
<!--  />-->

</template>

<script>
import SubViewHeader from "@/components/SubViewHeader";
import FormEdit from "@extendas/extendas-component-library/src/components/form-types/FormEdit";

export default {
  name: "ChargePointEdit",
  components: {
    SubViewHeader,
    FormEdit
  },
}
</script>

<style scoped>

</style>
