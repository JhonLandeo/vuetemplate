<template lang="">
  <b-container class="container-fluid">
    <b-row class="row">
      <Table/>
      <FormCreate @frmEditar="clients=$event" />
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
  data() {
    return {
      clients:[]
    }
  },
 
};
</script>
<style lang=""></style>
