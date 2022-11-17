<template lang="">
  <b-col>
    <b-button v-b-modal.modal-form class="btn btn-success m-2"
      >Add Users</b-button
    >
    
      <b-form>
        <b-row>
          <b-col sm="6">
            <label for="first-name">First Name</label>
            <b-form-input id="first-name" type="text"></b-form-input>
          </b-col>
          <b-col sm="6">
            <label for="">Last Name</label>
            <b-form-input type="text"></b-form-input>
          </b-col>
          <b-col sm="6">
            <label for="">Phone</label>
            <b-form-input type="text"></b-form-input>
          </b-col>

          <b-col sm="6">
            <label for="">Extension</label>
            <b-form-input type="text"></b-form-input>
          </b-col>

          <b-col sm="6">
            <label for="">Date of Birth</label>
            <b-form-input type="date"></b-form-input>
          </b-col>

          <b-col sm="6">
            <label for="">Country</label>

            <b-form-radio name="country">PERU</b-form-radio>
            <b-form-radio name="country">UNITED STATES</b-form-radio>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col sm="6">
            <label for="email">Email (User Name) </label>
            <b-form-input id="email" type="email"></b-form-input>
          </b-col>
          <b-col sm="6">
            <label for="">Password</label>
            <b-form-input type="password"></b-form-input>
          </b-col>
          <b-col sm="6">
            <label for="">Roles</label>

            <b-form-radio name="country">CEO</b-form-radio>
            <b-form-radio name="country">OTHERS</b-form-radio>
          </b-col>
          <b-col sm="6">
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              :options="programs"
              text-field="value"
              value-field="id"
            >
            </b-form-checkbox>
          </b-col>
          <b-col sm="6">
            <b-form-select
              :options="options"
              value-field="id"
              text-field="name"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-form>
   
  </b-col>
</template>
<script>
import UserService from "../service/index";
import {
  BCol,
  BForm,
  BFormCheckboxGroup,
  BFormSelect,
  BButton,
  BModal,
  BFormInput,
  BRow,
  BFormRadio,
} from "bootstrap-vue";
export default {
  components: {
    BCol,
    BForm,
    BFormCheckboxGroup,
    BFormSelect,
    BButton,
    BModal,
    BFormInput,
    BRow,
    BFormRadio,
  },
  data() {
    return {
      rol: [],
      allModule: [],
      options: [],
      programs: [],
    };
  },
  methods: {
    /* async getModuleRol() {
      this.module = await UserService.getModuleRol();
      return this.module;
    }, */
    async getModule() {
      this.options = await UserService.getModule();
      return this.options;
    },
    async getProgram() {
      this.programs = await UserService.getProgram();
      console.log(this.programs);
      return this.programs;
    },
  },
  created() {
    /* console.log(this.module); */
    this.getModule();
    this.getProgram();
  },
};
</script>
<style lang=""></style>
