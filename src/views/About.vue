<template>
  <div class="home">
    <h1>Wlecome to About!</h1>
    <input type="text" v-model="name">
    <br>
    <pre>
      {{ name }}
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Shakeel'
    }
  },
  watch: {
    name () {
      alert('You have changed the value' + this.name)
    }
  }
}
</script>
