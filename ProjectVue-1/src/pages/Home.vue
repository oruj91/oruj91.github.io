<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for = "ad in promoAds"
              :key  = "ad.id"
              :src  = "ad.imgSrc"
            >
              <div class="carousel-link">
                <v-btn
                  class     = "error"
                  v-bind:to = "{
                    name: 'ad',
                    params: {id: ad.id},
                    query: {
                      title: ad.title,
                      imgSrc: ad.imgSrc,
                      desc: ad.desc
                    }
                  }"
                >
                  {{ad.title}}
                </v-btn>
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
                v-bind:to = "{
                  name: 'ad',
                  params: {id: ad.id},
                  query: {
                    title: ad.title,
                    imgSrc: ad.imgSrc,
                    desc: ad.desc
                  }
                }"
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
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.allAds
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
