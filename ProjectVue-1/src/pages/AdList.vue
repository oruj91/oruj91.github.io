<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card v-for="ad in ads" v-bind:key="ad.id" class="elevation-10 mb-4">
          <v-layout wrap>
            <v-flex xs12 sm4>
              <v-img :src="ad.imgSrc" height="100%"></v-img>
            </v-flex>

            <v-flex xs12 sm8>
              <v-card-title>{{ad.title}}</v-card-title>
              <v-card-text class="text--secondary">{{ad.desc}}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  v-bind:to = "{ name: 'ad', params: ad.id, query: {title: ad.title, imgSrc: ad.imgSrc, desc: ad.desc}}"
                  class     = "info"
                  target    = "_blank"
                >
                  Open
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
       <div></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          id: '1',
          title: 'Squirrel',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloribus esse iste perferendis quas recusandae reprehenderit repudiandae totam unde vel!',
          promo: false,
          imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          id: '2',
          title: 'Sky',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, reiciendis.',
          promo: false,
          imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          id: '3',
          title: 'Eagle',
          desc: 'Lorem ipsum dolor sit.',
          promo: false,
          imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
