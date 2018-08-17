<template>
  <div >
      <table class="container">
        <tr v-for="post in posts" :key="post.id" class="table">
            <td ><h4>{{post.title}}</h4></td>
        </tr>
        <tr v-for="post in posts" :key="post.id">    
            <td >{{post.text}}</td>
            <router-link :to="{ name: 'add-posts', params:{id: post.id} }"><button class="btn btn-primary">View Post</button></router-link>
        </tr>
      </table>
  </div>
</template>

<script>

import { posts } from '../services/Posts.js'

export default {
  
  data()
  { 
      name:'AppPosts'
      return {
          posts: [],
          
      }
  },

  beforeRouteEnter(to, from, next) {
    posts.getAll()
      .then((response) => {
          next((vm) => {
            vm.posts = response.data
          })
      })
  }
  
}

</script>