<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
    >
      <v-list>
        <v-list-tile
          v-for = "link of links"
          :to   = "link.url"
          :key  = "link.title"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
<<<<<<< HEAD
      <v-toolbar-title>
        <router-link
          to    = "/"
          tag   = "span"
          class = "pointer"
        >
          Ad application
        </router-link>
      </v-toolbar-title>
=======
      <v-toolbar-title>Ad application</v-toolbar-title>
>>>>>>> 9859c093461cebe99c44f850f4c7b75717ce360d
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for = "link in links"
          :key  = "link.title"
          :to   = "link.url"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      right: null,
      drawer: false,
      links: [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
        {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
        {title: 'New ad', icon: 'note_add', url: '/new'},
        {title: 'My ads', icon: 'list', url: '/list'}
      ]
    }
  }
}
</script>
<<<<<<< HEAD

<style>
  .pointer { cursor: pointer }
</style>
=======
>>>>>>> 9859c093461cebe99c44f850f4c7b75717ce360d
