<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Book's freak
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span style='cursor: pointer' class="mr-2" @click="favourite">Favorite</span>
      <v-icon color="blue darken-2">fas fa-heart</v-icon>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label='Books name'
          v-model="name"
          >
        </v-text-field>
        </v-flex>
      <v-btn color="green" text @click="catchThis" >
      <span class="mr-2">Search</span>
      </v-btn>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    catchThis() {
      console.log(this.name)
      this.$router.push('/search/:' + this.name)
      this.name = ''
    },
    favourite(){
      this.$router.push('/favourite')
    }
    
  }
}
</script>
