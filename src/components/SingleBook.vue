<template lang="pug">
<v-container>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0"></h2>
              <p> </p>
              <h3>Actors:</h3>
               <h4>Awards:</h4> 
               <p>Genre:</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" >back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {
    name: 'SingleBook'
}
</script>
