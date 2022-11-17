<template lang="">
  <b-col sm="10">
    <b-table
      :fields="field"
      :items="list"
      striped
      hover
      ref="ClientTable"
      :current-page="currentPage"
      :per-page="perPage"
      
    >
      <template #cell(transacciones)="data">
        <div v-if="data">{{ sumT(data.item.transacciones) }}</div>
      </template>
      <template #cell(cantidad)="data">
        <div v-if="data">{{ cant(data.item.transacciones) }}</div>
      </template>
      <template #cell(boton)="data">
        <b-button
          v-b-modal.modal-1
          v-on:click="frmEditar(data.item)"
          class="btn btn-success"
          type="submit"
          v-if="data"
        >
          <b-icon-pencil></b-icon-pencil>
        </b-button>
        <b-button
          class="btn btn-danger"
          type="submit"
          v-on:click="deleteC(data.item.id)"
          v-if="data"
        >
          <b-icon-trash></b-icon-trash>
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalData"
      :per-page="perPage"
      first-number
      last-number
      class="mb-0 mt-1 mt-sm-0"
      prev-class="prev-item"
      next-class="next-item"
    >
      <template #prev-text>
        <feather-icon icon="ChevronLeftIcon" size="18" />
      </template>
      <template #next-text>
        <feather-icon icon="ChevronRightIcon" size="18" />
      </template>
    </b-pagination>
    <slot></slot>
  </b-col>
 
</template>
<script>
import {
  BTable,
  BCol,
  BIconTrash,
  BIconPencil,
  BButton,
  BPagination,
} from "bootstrap-vue";
import ClientService from "../service/client.service";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  components: {
    BTable,
    BCol,
    BIconTrash,
    BIconPencil,
    BButton,
    BPagination,
  },
  data() {
    return {
      totalRows: 1,
      totalData: "",
      perPage: 2,
      operacion: "",
      currentPage: 2,
      field: [
        {
          key: "id",
          label: "ID",
        },
        {
          key: "name",
          label: "NOMBRE",
        },
        {
          key: "year",
          label: "EDAD",
        },
        {
          key: "transacciones",
          label: "TOTAL PAGOS",
        },
        {
          key: "telefono",
          label: "TELEFONO",
        },
        {
          key: "fecha_nac",
          label: "FECHA DE NACIMIENTO",
        },
        {
          key: "boton",
          label: "ACCIONES",
        },
      ],
      client: {
        id: null,
        name: "",
        year: "",
        telefono: "",
        fecha_nac: "",
      },

      clients: [],
    };
  },
  methods: {
    async list() {
      this.clients = await ClientService.getClient();
      this.actualizarTabla(false);
      return this.clients;
    },
    ...mapMutations({
      actualizarTabla: "cambiar",
    }),
    async deleteC(id) {
      await ClientService.deleteClient(id);
      this.$refs.ClientTable.refresh();
    },
    sumT(transacciones) {
      let json = JSON.parse(transacciones);
      let to = json
        .map((item) => item.monto)
        .reduce((prev, curr) => prev + curr, 0);
      return to;
    },
    cant(transacciones) {
      let json = JSON.parse(transacciones);
      let to = json.map((item) => {
        return item;
      });
      return to.length;
    },
    frmEditar: function (data) {
      this.actualizarTabla(true);
      this.operacion = "editar";
      this.editarClient(data);
    },
    ...mapMutations({
      editarClient: "editar",
    }),
  },
  computed: {
    ...mapState({
      actualizar: (state) => state.storeClient.estado,
    }),
    ...mapState({}),
  },
  watch: {
    actualizar(newValue) {
      if (newValue) {
        this.$refs.ClientTable.refresh();
      }
    },
    client:{
      handler: (nuevoValor, valorAnterior) => {
			  console.log("La mascota era ", valorAnterior, " y ahora es", nuevoValor);
		}
    }
    
  },
  created() {
    console.log(this.$attrs)
  }
};
</script>
<style lang=""></style>
