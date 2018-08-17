<template>
  <div >
      <table>
        <tr>
            <td ><h4>{{post.title}}</h4></td>
        </tr>
        <tr>
            <td >{{post.text}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
import { posts } from '../services/Posts.js'

export default {

    data()
    {
        return {
            post: []
        }
    },
    created()
    {
        this.$route.params.id && posts.getPost(this.$route.params.id)
        .then((response) => {
        this.post = response.data
        })
    }
  
}
</script>