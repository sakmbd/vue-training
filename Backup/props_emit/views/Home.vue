<template>
  <div class="home">
    <h1>Welcome to Home</h1>
    <h2>{{ childValue }}</h2>
    <br>
    <counter :value="defaultCounterValue" @updatedCounterValue="updateValue"></counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
export default {
  data () {
    return {
      defaultCounterValue: 100,
      childValue: ''
    }
  },
  methods: {
    updateValue (v) {
      this.childValue = v
    }
  },
  components: {
    Counter
  }
}
</script>
