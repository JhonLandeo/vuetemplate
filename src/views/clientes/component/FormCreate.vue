<template lang="">
  <b-col sm="2">
    <b-button v-b-modal.modal-1 class="btn btn-success" v-on:click="frmCrear"
      >Agregar</b-button
    >
    <b-modal id="modal-1" title="Formulario" hide-footer>
      <b-col sm="12">
        <b-form-group id="input-group-1" >
          <b-form-input
            id="name"
            type="text"
            placeholder="Nombre"
            required
            class="mt-2"
            v-model="formedit.name"
          ></b-form-input>
          <b-form-input
            id="input-1"
            type="number"
            placeholder="Edad"
            required
            class="mt-2"
            v-model="formedit.year"
          ></b-form-input>
          <b-form-input
            id="fecha_nac"
            type="date"
            placeholder="Fecha de nacimiento"
            required
            class="mt-2"
            v-model="formedit.fecha_nac"
          ></b-form-input>

          <b-form-input
            id="input-1"
            type="text"
            placeholder="Telefono"
            required
            class="mt-2"
            v-model="formedit.telefono"
          ></b-form-input>
        </b-form-group>
        <b-row class="mt-3">
          <b-col sm="2">
            <b-form-input
              v-model="pago.id"
              placeholder="ID"
              type="number"
              required
            >
            </b-form-input>
          </b-col>
          <b-col sm="4">
            <b-form-input
              v-model.number="pago.monto"
              placeholder="Monto"
              type="number"
              required
            >
            </b-form-input>
          </b-col>
          <b-col sm="4">
            <b-form-input
              v-model="pago.fecha"
              placeholder="ID"
              type="date"
              required
            >
            </b-form-input>
          </b-col>
          <b-col sm="2">
            <b-button
              v-on:click="agregar"
              type="submit"
              variant="primary"
              class="btn btn-success btn-sm"
              >+</b-button
            >
          </b-col>
          <b-list-group
            class="mt-3"
            v-for="(numero, index) in pag"
            :key="numero.id"
          >
            <b-row>
              <b-col sm="3">
                <b-form-input
                  :value="numero.id"
                  @change="editId($event, index)"
                ></b-form-input>
              </b-col>
              <b-col sm="3">
                <b-form-input
                  :value="numero.monto"
                  @change="editMonto($event, index)"
                  type="number"
                ></b-form-input>
              </b-col>

              <b-col sm="4">
                <b-form-input
                  :value="numero.fecha"
                  @change="editFecha($event, index)"
                  type="date"
                ></b-form-input>
              </b-col>
              <b-col sm="2">
                <b-button class="btn btn-danger btn-sm" v-on:click="quitar"
                  >x</b-button
                >
              </b-col>
            </b-row>
          </b-list-group>
        </b-row>
        <b-col class="mt-3">
          <b-button
            v-on:click="guardar"
            type="submit"
            class="btn btn-success"
            variant="primary"
            >Guardar</b-button
          >
        </b-col>
      </b-col>
    </b-modal>
  </b-col>
</template>
<script>
import {
  BCol,
  BFormGroup,
  BFormInput,
  BButton,
  BListGroup,
  BRow,
} from "bootstrap-vue";
import ClientService from "../service/client.service";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  components: {
    BCol,
    BFormGroup,
    BFormInput,
    BButton,
    BListGroup,
    BRow,
  },
  data() {
    return {
      clients: [],
      client: {
        id: null,
        name: "",
        year: "",
        telefono: "",
        fecha_nac: "",
      },
      operacion: "",
      pagos: [],
      pago: {
        id: null,
        monto: "",
        fecha: "",
      },
      pag:[]
    };
  },
  methods: {
    editId: function (id, index) {
      this.formedit[index].transacciones.id = parseInt(id);
    },
    editMonto: function (monto, index) {
      this.pagos[index].monto = parseInt(monto);
    },
    editFecha: function (fecha, index) {
      this.pagos[index].fecha = parseInt(fecha);
    },
    agregar() {
      this.pag.push(this.pago)
      this.pago = {
        id: null,
        monto: "",
        fecha: "",
      };
    },
    agr() {
      this.operacion = "Crear";
    },
    guardar: function () {
      if (this.operacion == "crear") {
        this.crear();
      } else {
        this.editar();
      }
    },
    quitar() {
      this.pag.pop(this.pago);
      this.client.total = [];
    },
    frmCrear: function () {
      this.operacion = "crear";
      if (this.operacion == "crear") {
        this.formedit.id = null;
        this.formedit.name = "";
        this.formedit.year = "";
        this.formedit.fecha_nac = "";
        this.formedit.telefono = "";
        this.formedit.transacciones = [];
        this.transacciones = [];
        this.pag = [];
      }
      this.actualizarTabla(true);
    },
    async editar() {
      let parametros = {
        id: this.formedit.id,
        name: this.formedit.name,
        year: this.formedit.year,
        telefono: this.formedit.telefono,
        fecha_nac: this.formedit.fecha_nac,
        transacciones: this.pagos,
      };
      await ClientService.putClient(this.client.id, parametros);
      this.actualizarTabla(true);
      this.$bvModal.hide("modal-1");
    },
    async crear() {
      let parametros = {
        name: this.formedit.name,
        year: this.formedit.year,
        transacciones: JSON.stringify(this.pag),
        fecha_nac: this.formedit.fecha_nac,
        telefono: this.formedit.telefono,
      };
      await ClientService.postClient(parametros);
      this.actualizarTabla(true);
      this.$bvModal.hide("modal-1");
      this.operacion = ""
    },
    ...mapMutations({
      actualizarTabla: "cambiar",
    }),
  },
  computed: {
    ...mapState({
      edi: (state) => state.storeClient.estado,
    }),
    ...mapState({
      formedit: (state) => state.storeClient.clients, 
    }),
    ...mapState({
      pag: (state) => state.storeClient.clients.transacciones, 
    }),
    
  },
  created() {
    console.log(this.formedit);
  },
};
</script>
<style lang=""></style>
