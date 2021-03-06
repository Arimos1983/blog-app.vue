import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Posts from './components/AppPosts'
import SinglePost from './components/SinglePost'
import AddPost from './components/AppAddPost'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/posts' },
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: SinglePost, name: 'add-posts'},
  {path: '/add', component: AddPost},
  {path: '/edit/:id', component: AddPost, name: 'edit-posts' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
