<template>
  <div class="home">
    <div class="row" v-for="user in users" :key="user.id">
      <div class="col-md-10">{{ user.name | uppercase }}</div>
    </div>
    <br>
    <h2 v-html="google"></h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World',
      show: false,
      users: [
        {
          id: 1,
          name: 'shakeel'
        },
        {
          id: 2,
          name: 'amit'
        },
        {
          id: 3,
          name: 'rahul'
        },
        {
          id: 4,
          name: 'amit2'
        }
      ],
      google: '<a href="google.com">google</a>'
    }
  },
  filters: {
    uppercase (value) {
      console.log(value)
      return value.split('').reverse().join('')
    }
  }
}
</script>
