<template lang="">
  <b-col sm="12">
    <button type="submit">Crear</button>
    <b-table :items="usuarios" :fields="field" responsive id="myTable" :per-page="perPage" :current-page="currentPage">
      <template #cell(status)="data">
        <div v-if="estado(data.item.status) == 'Active'">
          <b-badge href="#" variant="success">{{
            estado(data.item.status)
          }}</b-badge>
        </div>
        <div v-else>
          <b-badge href="#" variant="secondary">{{
            estado(data.item.status)
          }}</b-badge>
        </div>
      </template>
      <template #cell(status_session)="data">
        <div v-if="estadoSesion(data.item.status_session) == 'Active'">
          <b-icon-circleFill style="color: green"></b-icon-circleFill>
          <p>{{ estadoSesion(data.item.status_session) }}</p>
        </div>
        <div v-else>
          <b-icon-circleFill style="color: gray"></b-icon-circleFill>
          <p>{{ estadoSesion(data.item.status_session) }}</p>
        </div>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :per-page="perPage"
      aria-controls="my-table"
      :total-rows="rows"
    ></b-pagination>
  </b-col>
</template>
<script>
import UserService from "../service/index";
import {
  BTable,
  BCol,
  BBadge,
  BIconCircleFill,
  BPagination,
} from "bootstrap-vue";
export default {
  components: {
    BTable,
    BCol,
    BBadge,
    BIconCircleFill,
    BPagination,
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
          label: "Modulo",
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
      perPage: 8,
      currentPage:2
    };
  },
  methods: {
    async viewTable() {
      this.usuarios = await UserService.getUserData();
      return this.usuarios;
    },
    estado(dato) {
      return dato == 1 ? "Active" : "Desactive";
    },
    estadoSesion(dato) {
      return dato == 1 ? "Active" : "Offline";
    },
  },
  computed: {
    
      rows() {
        return this.usuarios.length
      }
  
  },
  created() {
    this.viewTable();
  },
};
</script>
<style lang=""></style>
