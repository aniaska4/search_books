<template lang="pug">
<v-container>
    <v-layout wrap style="height: 250px">
      <v-flex xs12 mr-1 ml-1 v-for="info in singleBook">
        <v-card>
          <v-img  aspect-ratio="1" :src=" 'http://books.google.com/books/content?id=' + info.id + '&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0"></h2>
              <div>Title: {{ info.volumeInfo.title }}</div>
              <div>Author: {{ info.volumeInfo.authors }}</div> 
              <div>Description: {{ info.volumeInfo.description }}</div> 
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" >back</v-btn>
            <v-btn flat color="green" >add to favour</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'singleBook',
    props: ['id'],
    data() {
      return {
        singleBook: []
      }
    },
    mounted(){
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.id)
          .then(
            response => { 
            this.singleBook = response.data.items            
            console.log(response.data.items)
            })
          .catch(
            error => console.log(error)
            )
    }
}
</script>
