<template>
  <div>
    <b-form-group
      id="input-group-1"
      label="Address 1"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input id="input-1" v-model="data.address1.$model" type="email" placeholder="Address 1"></b-form-input>
      {{$v.data.address1}}
    </b-form-group>

    <b-form-group id="input-group-2" label="Address 2" label-for="input-2">
      <b-form-input id="input-2" v-model="data.address2.$model" placeholder="Address 2"></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      address: {
        address1: "",
        address2: ""
      },
      show: true
    };
  },
  props: ['data'],
  validations: {
    data: {
      address1email: { required },
      address1: { required }
    }
  },
  methods: {
    onSubmit(evt) {
        this.$v.$touch()
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>