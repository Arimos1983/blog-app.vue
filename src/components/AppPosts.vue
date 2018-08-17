<template>
  <div >
      <table class="container">
          <tbody v-for="post in posts" :key="post.id" class="table">
        <tr >
            <td ><h4>{{post.title}}</h4></td>
            <td ><h4>{{post.comments.length}}</h4></td>
        </tr>
        <tr >    
            <td >{{post.text}}</td>
            <template class="btn-group">
            <router-link :to="{ name: 'add-posts', params:{id: post.id} }"><button style="width: 100px" name="view" class=" btn btn-primary">View Post</button></router-link>
            <router-link :to="{ name: 'edit-posts', params:{id: post.id} }"><button style="width: 100px" name="edit" class=" btn btn-primary">Edit Post</button></router-link>
            <button @click="deletePost(post)" name="delete" style="width: 100px" class="span3 btn btn-primary" >Delete Post</button>
            </template>
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
  },
  methods:{

      deletePost(post)
      {
          posts.deletePost(post.id)
          .then((response) => {
          this.posts = this.posts.filter(posts => posts !== post)
        })
      }
  }  
}

</script>