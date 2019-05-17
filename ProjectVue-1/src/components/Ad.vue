<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-img :src="ad.imgSrc"></v-img>
          <v-card-title>
            <h1 class="text--primary">{{$route.query.title}}</h1>
          </v-card-title>
          <v-card-text>{{$route.query.desc}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning">EDIT</v-btn>
            <v-btn class="success">BUY</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adByID(id)
    }
  }
}
</script>

<style scoped>

</style>
