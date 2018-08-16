<template>
  <div >
      <form @submit.prevent="submit">
        <div class="form-group" >
            <label for="title">Title</label>
            <input name="title" type="text" class="form-control" id="title" minlength="2" required="required" placeholder="Title" v-model="post.title">
        </div>
        <div class="form-group">
            <label for="text">Body</label>
            <textarea name="text" type="text" class="form-control"  id="text" maxlength="300" required="required" v-model="post.text"></textarea>
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
    data() {
        return {
            post: {}
        }
        
    },
    methods:{

        submit()
        {    posts.addPost(this.post)
            .then(response =>{
             this.$router.push('/posts')
        })
        .catch(err => console.log(err))
        }
    }
  
  
}
</script>