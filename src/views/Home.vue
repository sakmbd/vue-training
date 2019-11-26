<template>
  <div class="home">
    {{ reversName }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'shakeel'
    }
  },
  computed: {
    reversName () {
      return this.name.split('').reverse().join('')
    }
  },
  created () {
    console.log('[Created Hook triggered]')
  },
  mounted () {
    console.log('[Mounted Hook triggered]')
  }
}
</script>
