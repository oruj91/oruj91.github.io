<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for = "ad in ads"
              :key  = "ad.id"
              :src  = "ad.imgSrc"
            >
              <div class="carousel-link">
                <v-btn
                  class     = "error"
                  v-bind:to = "{name: 'ad', params: ad.id, query: {title: ad.title, imgSrc: ad.imgSrc, desc: ad.desc}}"
                >{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12 sm6 md4
          v-for = "ad of ads"
          :key  = "ad.id"
        >
          <v-card>
            <v-img
              :src         = ad.imgSrc
              height       = "200px"
              aspect-ratio = "2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div> {{ ad.desc }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-bind:to = "{name: 'ad', params: ad.id, query: {title: ad.title, imgSrc: ad.imgSrc, desc: ad.desc}}"
                flat color="orange"
              >
                Open
              </v-btn>
              <v-btn flat raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
.carousel-link {
  position: absolute;
  left: 50%;
  bottom: 50px;
  padding: 5px 15px;
  background: rgba(0,0,0,.5);
  transform: translate(-50%, 0);
}
</style>
