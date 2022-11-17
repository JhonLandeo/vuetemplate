<template lang="">
  <b-col sm="12">
    <b-table :items="usuarios" :fields="field" responsive>
      <template slot="usuarios" slot-scope="usuarios"> 
      </template>
      <template #cell(status) >
        <b-col v-if="usuarios[0].status == 1">

          <b-badge href="#" variant="success">ACTIVE</b-badge>
        </b-col>
      </template>
      <template #cell(status_session) >
        <b-col v-if="usuarios[0].status_session == 1">
          <b-icon-circleFill style="color:green"></b-icon-circleFill><p>Active</p>
        </b-col>
      </template>
    </b-table>
    
  </b-col>
</template>
<script>
import UserService from "../service/index";
import { BTable, BCol, BBadge, BIconCircleFill } from "bootstrap-vue";

export default {
  components: {
    BTable,
    BCol,
    BBadge,
    BIconCircleFill
  },
  data() {
    return {
      usuarios: [],
      field: [
        {
          key: "Nombre",
          label: "USERS",
        },
        {
          key: "status_session",
          label: "SESSION STATUS",
        },
        {
          key: "email",
          label: "EMAIL",
        },
        {
          key: "status",
          label: "STATUS",
        },
        {
          key: "Modulo",
          label: "Module",
        },
        {
          key: "module_id",
          label: "MAIN MODULE",
        },
        {
          key: "Rol",
          label: "ROLE",
        },
        {
          key: "phone",
          label: "PHONE NUMBER",
        },
        {
          key: "Creado por",
          label: "CREATED BY",
        },
      ],
    };
  },
  methods: {
    async viewTable() {
      this.usuarios = await UserService.getUserData();
      return this.usuarios;
    },
  },
  computed: {
    estado() {
    
    },
  },
  created() {
    console.log(this.viewTable());
  },
};
</script>
<style lang=""></style>
