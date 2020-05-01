import Vue from 'vue'
import Vuelidate from 'vuelidate'
import vuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'

Vue.use(Vuelidate)
Vue.use(vuelidateErrorExtractor, {
  /**
     * Optionally provide the template in the configuration.
     * or register like so Vue.component("FormField", templates.singleErrorExtractor.foundation6)
     */
  template: templates.singleErrorExtractor.foundation6, // you can also pass your own custom template
  messages: { required: 'The {attribute} field is required' }, // error messages to use
  attributes: { // maps form keys to actual field names
    firstName: 'First Name',
    lastName: 'Last Name',
    address1: 'Address 1',
    address2: 'Address 2'

  }
})
