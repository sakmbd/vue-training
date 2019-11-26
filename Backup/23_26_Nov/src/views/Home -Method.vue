<template>
  <div class="home">
    <div v-if="show">{{ msg}}</div>
    <br>
    <button @click="toggle(2)">Toggle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World',
      show: false
    }
  },
  methods: {
    toggle (id) {
      if (id > 1) {
        this.show = !this.show
      }
    }
  }
}
</script>
