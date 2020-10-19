<template>
  <q-page class="flex flex-left">
    <TableComponent></TableComponent>
  </q-page>
</template>

<script>
import TableComponent from "src/components/TableComponent.vue";
export default {
  name: "Home",
  components: {
    TableComponent
  }
};
</script>
