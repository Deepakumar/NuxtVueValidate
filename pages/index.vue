<template>
  <div class="container">
    <div>
      <div>Validation Spike</div>
      <div>
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        />
        <!-- <pre>{{ $v }}</pre> -->
      </div>
      <owner />
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import owner from '@/components/OwnerComponent'
export default {
  components: {
    owner
  },
  validations: {
    email: {
      required
    },
    addresses: {
      minLength: minLength(5)
    }
  },
  data () {
    return {
      email: '',
      addresses: ['Addrees1', 'Address2']
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
