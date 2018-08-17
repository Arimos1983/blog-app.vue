<template>
  <div >
      <form @submit.prevent="submit" @reset="resetForm">
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
            <button type="reset" name="reset" class="btn btn-primary">Reset</button>
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

        submit(){
            if(this.post.id)
            {
                this.editPost()
            }
            else
            {
                this.addPost()
            }
        },
        addPost()
        {    posts.add(this.post)
            .then(response =>{
             this.$router.push('/posts')
            })
            .catch(err => console.log(err))
        },
        editPost()
        {
            posts.edit(this.post)
            .then(response =>{
             this.$router.push('/posts')
            })
            .catch(err => console.log(err))
        },
        resetForm(){
            return (this.post = {
                title: '',
                text: ''
            })
        }
    },
    created(){
        
        this.$route.params.id && posts.get(this.$route.params.id)
       .then((response) => {
        this.post = response.data
        })
    }
  
  
}
</script>