<template>
  <div class="home">
    <h1>Wlecome to home page!</h1>
    <ol>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: {}
    }
  },
  created () {
    axios.get(process.env.VUE_APP_APIURL + '/posts').then(response => {
      this.posts = response.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
