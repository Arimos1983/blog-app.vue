<template>
  <div >
      <table class="container">
          <tbody v-for="post in posts" :key="post.id" class="table">
        <tr >
            <td ><h4>{{post.title}}</h4></td>
        </tr>
        <tr >    
            <td >{{post.text}}</td>
            <router-link :to="{ name: 'add-posts', params:{id: post.id} }"><button name="view" class="btn btn-primary">View Post</button></router-link>
            <router-link :to="{ name: 'edit-posts', params:{id: post.id} }"><button name="edit" class="btn btn-primary">Edit Post</button></router-link>
        </tr>
          </tbody>
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