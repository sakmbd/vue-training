<template>
  <div>
    <h3>Login page!</h3>
    <form>
        <div class="form-group">
            <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            v-model="formData.email"
            >
        </div>
        <div class="form-group">
            <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="formData.password"
            >
        </div>
        <button type="submit" @click="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      axios.post(process.env.VUE_APP_APIURL + '/posts', this.formData)
        .then(response => {
          console.log(response)
        }).catch(error => console.log(error))
    }
  }
}
</script>
