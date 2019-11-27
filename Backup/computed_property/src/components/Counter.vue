<template>
    <div>
        <button @click="increment">Increment</button>
        <br>
        Counter: {{ counter }}
    </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      counter: this.value
    }
  },
  created () {
    this.$emit('updatedCounterValue', this.counter)
  },
  methods: {
    increment () {
      this.counter = this.counter + 1
      this.$emit('updatedCounterValue', this.counter)
    }
  }
}
</script>
