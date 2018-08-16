<template>
  <div >
      <table>
        <ul v-for="post in posts" :key="post.id" class="list-group">
            <li class="list-group-item">Created at : {{post.createdAt}} Post title: {{post.title}}</li><hr>
            <h4>Blog Post</h4>
            <li class="list-group-item list-group-item-dark">{{post.text}}</li>
        </ul>
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