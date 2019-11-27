<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="jumbotron">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/Nav.vue'
export default {
  components: {
    NavBar
  }
}
</script>
