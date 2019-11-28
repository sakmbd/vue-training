<template>
    <div>
      <h2>Child components data</h2>
      <p>Counter Value: {{ getCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCounter'])
  }
}
</script>
