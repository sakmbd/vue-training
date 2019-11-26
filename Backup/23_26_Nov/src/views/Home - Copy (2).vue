<template>
  <div class="home">
    <input type="text" v-model="email" v-backgound:color="msg">
    <br>
    <pre>
      {{ email }}
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World',
      email: 'example@gmail.com'
    }
  },
  directives: {
    backgound: {
      bind: function (el, binding) {
        el.style.color = 'red'
      }
    }
  }
}
</script>
