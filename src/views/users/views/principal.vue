<template lang="">
    <b-container class="container-fluid">
     
      <b-row class="row">
        <TableUser />
      </b-row>
    </b-container>
  </template>
  <script>
  
  import TableUser from '../component/TableUser.vue';
 
  import { BRow, BContainer } from "bootstrap-vue";
  
  export default {
    
    components: { TableUser, BRow, BContainer },
  };
  </script>
  <style lang=""></style>
  