<template lang="pug">
  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 mb-2 v-for="book, index in allBooks">
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
            <v-btn flat color="green" @click="singleBook(book.id)">View</v-btn>
            <v-spacer></v-spacer>
            <i @click="markAsFavorite()" :class="{isActive: isMark}" class="fas fa-heart"></i>
          </v-card-actions>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Books',
    data () {
        return {
            allBooks: [],
            books: [],
            isMark: false,
        }
    },
    mounted() {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=id:" + this.id)
            .then(response => {
                console.log(response)
                this.allBooks = response.data.items
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        singleBook(id) {
            this.$router.push('/book/' + id)
        },        
        markAsFavorite() {
            this.isMark = !this.isMark
        },
        bookAuthors(allBooks) {
            let authors = allBooks.volumeInfo.authors;
            if (authors.length < 3) {
                authors = authors.join(' and ')
            }
            else if (authors.length > 2) {
                let lastAuthor = ' and ' + authors.slice(-1);
                authors.pop()
                authors = authors.join(', ')
                authors += lastAuthor
            }
            return authors
        },
    }
}
</script>

<style>
.isActive{
    color: red;
}
</style>


// 
