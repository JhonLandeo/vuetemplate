<template lang="">
  <b-col>
    <b-button v-b-modal.modal-form class="btn btn-success m-2">Add Users</b-button>
    <b-modal id="modal-form" hide-footer>
      <b-form inline>
        <b-col sm="4">
            <label for="">First Name</label>
        <b-form-input
            type="text"
        ></b-form-input>
        </b-col>
       
        <label for="">Last Name</label>
        <b-form-input
            type="text"
        ></b-form-input>
        <label for="">Phone</label>
        <b-form-input
            type="text"
        ></b-form-input>
        <label for="">Extension</label>
        <b-form-input
            type="text"
        ></b-form-input>
        <label class="mr-sm-2" for="inline-form-custom-select-pref"
          >Preference</label>
        <b-form-select
          id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']"
          :value="null"
        ></b-form-select>

        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
          >Remember my preference</b-form-checkbox
        >
        </b-form-input>

        <b-button variant="primary">Save</b-button>
      </b-form>
    </b-modal>
  </b-col>
</template>
<script>
import {
  BCol,
  BForm,
  BFormCheckbox,
  BFormSelect,
  BButton,
  BModal,
  BFormInput
} from "bootstrap-vue";
export default {
  components: {
    BCol,
    BForm,
    BFormCheckbox,
    BFormSelect,
    BButton,
    BModal,
    BFormInput
  },
};
</script>
<style lang=""></style>
