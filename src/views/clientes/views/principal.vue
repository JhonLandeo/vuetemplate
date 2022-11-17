<template lang="">
  <b-container fluid>
    <b-row class="row">
      <Table><div>Hola</div></Table>
      <FormCreate />
    </b-row>
  </b-container>
</template>
<script>
import Table from "../component/Table.vue";
import FormCreate from "../component/FormCreate.vue";
import { BRow, BContainer } from "bootstrap-vue";

export default {
  props:['dato'],
  components: { Table, FormCreate, BRow, BContainer },
  
 
};
</script>
<style lang=""></style>
