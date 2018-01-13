// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueRouter from 'vue-router'
import App from './App'
// import Post from '@/pages/Post.vue'

// Vue.use(VueRouter)
// Vue.use(ElementUI)
Vue.config.productionTip = false
// const Home = { template: '<div>home</div>'}
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/',
//       component: Home
//     },
//     {
//       path: '/post/:id',
//       component: Post
//     }
//   ]
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
