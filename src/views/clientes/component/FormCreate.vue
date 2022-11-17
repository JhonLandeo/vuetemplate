<template lang="">
  <b-col sm="2">
    <b-button
      v-b-modal.modal-crear
      class="btn btn-success"
      v-on:click="frmCrear"
      >Agregar</b-button
    >
    <b-modal id="modal-crear" title="Formulario" hide-footer>
      <b-col sm="12">
        <b-form-group id="input-group-1">
          <b-form-input
            id="name"
            type="text"
            placeholder="Nombre"
            required
            class="mt-2"
            v-model="client.name"
          ></b-form-input>
          <b-form-input
            id="input-1"
            type="number"
            placeholder="Edad"
            required
            class="mt-2"
            v-model="client.year"
          ></b-form-input>
          <b-form-input
            id="fecha_nac"
            type="date"
            placeholder="Fecha de nacimiento"
            required
            class="mt-2"
            v-model="client.fecha_nac"
          ></b-form-input>

          <b-form-input
            id="input-1"
            type="text"
            placeholder="Telefono"
            required
            class="mt-2"
            v-model="client.telefono"
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
            v-for="(numero, index) in pagos"
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
            v-on:click="crear"
            type="submit"
            class="btn btn-success"
            variant="primary"
            >Guardar</b-button
          >
        </b-col>
      </b-col>
    </b-modal>
    <b-modal id="modal-1" title="Formulario" hide-footer>
      <b-col sm="12">
        <b-form-group id="input-group-1">
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
            v-for="(numero, index) in valid"
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
                <b-button
                  class="btn btn-danger btn-sm"
                  v-on:click.prevent="elimi(numero.id)"
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
      question: "",
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
    };
  },
  methods: {
    editId: function (id, index) {
      this.pag[index].id = parseInt(id);
    },
    editMonto: function (monto, index) {
      this.pag[index].monto = parseInt(monto);
    },
    editFecha: function (fecha, index) {
      this.pag[index].fecha = parseInt(fecha);
    },
    quitar() {
      if (this.operacion == "crear") {
        this.pagos.pop(this.pago);
      }
    },
    agregar() {
      let limite = this.pagos.length;
      if (this.operacion == "crear" && limite < 5) {
        this.pagos.push(this.pago);
      }
      let limiteO = this.pag.length;
      console.log(this.pag);
      if (limiteO < 5) {
        this.pag.push(this.pago);
      }

      this.pago = {
        id: null,
        monto: "",
        fecha: "",
      };
    },

    guardar: function () {
      if (this.operacion == "crear") {
        this.crear();
      } else {
        this.editar();
      }
    },

    frmCrear: function () {
      this.operacion = "crear";
      if (this.operacion == "crear") {
        this.client.id = null;
        this.client.name = "";
        this.client.year = "";
        this.client.fecha_nac = "";
        this.client.telefono = "";
        this.client.transacciones = [];
        this.transacciones = [];
        this.pagos = [];
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
        transacciones: this.pag,
      };
      await ClientService.putClient(this.client.id, parametros);
      this.actualizarTabla(true);
      this.$bvModal.hide("modal-1");
      console.log(this.pag);
    },
    async crear() {
      let parametros = {
        name: this.client.name,
        year: this.client.year,
        transacciones: JSON.stringify(this.pagos),
        fecha_nac: this.client.fecha_nac,
        telefono: this.client.telefono,
      };
      await ClientService.postClient(parametros);
      this.actualizarTabla(true);
      this.$bvModal.hide("modal-crear");
      this.operacion = "";
      this.pagos=[];
      this.client.transacciones = [];
        this.transacciones = [];
    },
    
    ...mapMutations({
      actualizarTabla: "cambiar",
    }),
    ...mapMutations({
      elimi: "quitar",
    }),
  },
  computed: {
    ...mapState({
      edi: (state) => state.storeClient.estado,
    }),
    
    ...mapState({
      pag: (state) => state.storeClient.clients.transacciones,
    }),
    valid(){
      if (this.pag==undefined) {
        return false
      } else{
        return JSON.parse(this.pag)
      }
    },
    ...mapState({
      formedit: (state) => state.storeClient.clients,
    }),
  },
  watch: {
    client: {
      deep: true,
      handler: (nuevoValor, valorAnterior) => {
        console.log("El objeto era ", valorAnterior, " y ahora es", nuevoValor);
      },
    },
  },
 updated() {
  
 },
};
</script>
<style lang=""></style>
