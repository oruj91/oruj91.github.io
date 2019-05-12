<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-2">Orders</h1>
        <v-list>
          <v-list-tile
            v-for = "order in orders"
            :key  = "order.id"
          >
            <v-list-tile-action>
              <v-checkbox
                :input-value = "order.done"
                @change      = "changeCheckbox(order)"
                color        = "success"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                :to   = "'/ad/' + order.adID"
                class = "primary"
              >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 'fdf12',
          name: 'Oruj',
          phone: '0558526053',
          adID: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    changeCheckbox (order) {
      console.log(order)
      order.done = true
    }
  }
}
</script>

<style scoped>

</style>
