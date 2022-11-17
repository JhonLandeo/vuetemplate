<template lang="">
    <b-container class="container-fluid">
      <Form />
      <b-row class="row">
        <TableUser />
      </b-row>
    </b-container>
  </template>
  <script>
  
  import TableUser from '../component/TableUser.vue';
  import Form from '../component/Form.vue'
  import { BRow, BContainer } from "bootstrap-vue";
  
  export default {
    
    components: { TableUser, BRow, BContainer, Form },
  };
  </script>
  <style lang=""></style>
  