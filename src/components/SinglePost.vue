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
      <AddComment :post="post" />
      <table class="table">
        <tr v-for="comment in post.comments" :key="comment.id">
            <td >{{comment.text}}</td>
        </tr>
      </table>
  </div>
  
</template>

<script>
import { posts } from '../services/Posts.js'
import AddComment from '../components/AddComment.vue'

export default {
    components: {
       AddComment
    },

    data()
    {
        return {
            post: {}
        }
    },
    created()
    {
        this.$route.params.id && posts.get(this.$route.params.id)
        .then((response) => {
        this.post = response.data
        })
        this.$emit("postId", this.$route.params.id);
    }
  
}
</script>