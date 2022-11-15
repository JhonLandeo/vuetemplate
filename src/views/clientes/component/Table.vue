<template lang="">
  <b-col sm="10">
    <b-table :fields="field" :items="list" striped hover ref="ClientTable">
      <template #cell(transacciones)="data">
        <div v-if="data">{{ sumT(data.item.transacciones) }}</div>
      </template>
      <template #cell(cantidad)="data">
        <div v-if="data">{{ cant(data.item.transacciones) }}</div>
      </template>
      <template #cell(boton)="data">
        <b-button
          v-b-modal.modal-1
          v-on:click="frmEditar(data.item, data.item.transacciones)"
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
  </b-col>
</template>
<script>
import { BTable, BCol, BIconTrash, BIconPencil, BButton } from "bootstrap-vue";
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
  },
  data() {
    return {
      operacion: "",
      field: [
        "id",
        "name",
        "year",
        "transacciones",
        "cantidad",
        "telefono",
        "fecha_nac",
        "boton",
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
      /* this.$emit('act',this.clients) */
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
    frmEditar: function (data, pagos) {
      this.actualizarTabla(true);
      this.operacion = "editar";
      this.pagos = JSON.parse(pagos);
      this.editarClient(data,pagos);
    },
    ...mapMutations({
      editarClient: "editar",
    }),
  },
  computed: {
    ...mapState({
      actualizar: (state) => state.storeClient.estado,
    }),
  },
  watch: {
    actualizar(newValue) {
      if (newValue) {
        this.$refs.ClientTable.refresh();
      }
    },
  },
};
</script>
<style lang=""></style>
