<template>
  <div >
      <table>
        <tr>
            <td >Title</td>
            <td >Post</td>
        </tr>
        <tr>
            <td >{{post.title}}</td>
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
        this.$route.params.id && posts.get(this.$route.params.id)
        .then((response) => {
        this.post = response.data
        })
    }
  
}
</script>