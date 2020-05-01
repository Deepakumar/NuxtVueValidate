<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group :validator="$v.form.firstName"
        id="firstnamelabel"
        label="First Name"
        label-for="firstnameInput"
        description="Owners First Name"
      >
        <b-form-input
          id="firstnameInput"
          v-model="form.firstName"
          type="email"
          placeholder="Owners First Name"
        ></b-form-input>
        {{$v.form.firstName}}
        {{$v}}
      </b-form-group>

      <b-form-group id="lastnamelabel" :validator="$v.form.lastName"
      label="Last Name" 
      label-for="lastnameInput">
        <b-form-input
          id="lastnameInput"
          v-model="form.lastName"
          placeholder="Owners Last Name"
        ></b-form-input>
      </b-form-group>

      <AddressComponent v-bind:data="$v.form.address" />

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
      <pre>{{$v}}</pre>
    </b-card>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import AddressComponent from "@/components/OwnerAddressComponent";
export default {
  components: {
    AddressComponent
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        address: {
          address1: "",
          address2: ""
        }
      },
      show: true
    };
  },
  validations: {
    form: {
      firstName: { required },
      lastName: { required },
      address : {
          address1: { required},
          address2: { required}
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      console.log(this.$v)
    },
    mounted() {
        console.log($v)
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