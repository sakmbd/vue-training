<template>
  <div class="home">
    <h1>Welcome to Home</h1>
    <br>
    <counter>
      <h2 slot='tittle'>This is counter</h2>
      <p slot="description">This is component slot data for countetr</p>
      <p>Default Slot data</p>
    </counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    Counter
  }
}
</script>
