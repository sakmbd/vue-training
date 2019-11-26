<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="containter">
      <div class="row">
        <div class="col-md-12 col-md-offset-3">
          <div class="jumbotron">
            <router-view/>
          </div>
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
