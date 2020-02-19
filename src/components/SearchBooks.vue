<template lang="pug">
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 mb-2 v-for="book in books">
        <v-card>
          <v-img  aspect-ratio="1" :src=" 'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'"></v-img>

          <v-card-title primary-title >
            <div>
              <h2></h2>
              <div>Title: {{ book.volumeInfo.title }}</div>
              <div>Author: {{ book.volumeInfo.authors }}</div>
              <div>Published in {{ book.volumeInfo.publishedDate }}</div>
              <div>IMDB-id: {{ book.id }} </div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat color="green" @click="singleBook(books.id)">View</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SearchBooks',
    props: ['name'],
    data () {
        return {
            books: []
        }
    },
    mounted() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.name)
            .then(
                response => {this.books = response.data.items
                console.log(response.data.items)
                })
    }
}
</script>
