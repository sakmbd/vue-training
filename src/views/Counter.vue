<template>
  <div class="counter">
    <h1>Parent Component</h1>
    <button @click="inc">Increment</button>
    <p>Counter Value: {{ getCounter }}</p>
    <br>
    <hr>
    <counter/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Counter from '@/components/Counter.vue'
export default {
  components: {
    Counter
  },
  computed: {
    ...mapGetters(['getCounter'])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['increment']),
    inc () {
      this.increment()
    }
  }
}
</script>
