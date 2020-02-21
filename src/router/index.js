import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchBooks from '@/components/SearchBooks.vue'
import Books from '@/components/Books.vue'
import SingleBook from '@/components/SingleBook.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'Books',
        props: true,
        component: Books
      },
      {
        path: '/search/:name',
        name: 'SearchBooks',
        props: true,
        component: SearchBooks
      },
      {
        path: '/book/:id',
        name: 'SingleBook',
        props: true,
        component: SingleBook
      }
    ],
    mode: 'history'
  })