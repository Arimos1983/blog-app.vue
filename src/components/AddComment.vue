<template>
  <div >
      <form @submit.prevent="addComment(post.id)" >
        <div class="form-group">
            <label for="text">Body</label>
            <textarea name="text" type="text" class="form-control"  id="text" maxlength="300" required="required" v-model="comments.text"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
  </div>
</template>

<script>
import { posts } from '../services/Posts.js'
export default {
  name: 'AddComment',
  props: ['post'],

  data()
  {
      return {
          comments: {}
      }
  },
  methods: {
      addComment(id){
          console.log(id)
          let comment = {
              ...this.comments,
              id
          }
           posts.addComment(this.comments,id)
            .then(response =>{
             this.$router.go(0)
            })
            .catch(err => console.log(err))
      }
  }
  

  
  
}
</script>