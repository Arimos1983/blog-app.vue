<template>
  <div >
      <table>
        <tr>
            <td >Title</td>
            <td >Post</td>
        </tr>
        <tr v-for="post in posts" :key="post.id" class="table">
            <td >{{post.title}}</td>
            <td >{{post.text}}</td>
            <router-link :to="{ name: 'posts', params:{id: post.id} }"><button>View Post</button></router-link>
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