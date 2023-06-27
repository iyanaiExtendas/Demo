<template>
  <div class="header-container">
    <BackButton />
    <h1>{{ title }} </h1>
  </div>
</template>

<script>
import BackButton from "@extendas/extendas-component-library/src/components/utilities/general-utils/BackButton";

export default {
  name: "SubViewHeader",
  components: {
    BackButton,
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }

}
</script>

<style scoped>

.header-container {
  display: flex;
  flex-direction: row;
}

h1 {
  font-weight: normal;
}

</style>
