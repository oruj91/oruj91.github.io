<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-2">Create new ad</h1>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            name     = "title"
            label    = "Ad title"
            type     = "text"
            v-model  = "title"
            :rules   = "[v => !!v || 'Title is required']"
            outline
            required
          ></v-text-field>
          <v-textarea
            name         = "description"
            label        = "Ad description"
            type         = "text"
            v-model      = "description"
            :rules       = "[v => !!v || 'Description is required']"
            outline
            required
          ></v-textarea>
        </v-form>
        <v-layout column>

          <v-flex xs12>
            <v-btn
              color="blue-grey"
              class="white--text"
              mt-3
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>

          <v-flex xs12 mt-3>
<!--            <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" width="100%" alt="Some image">-->
          </v-flex>

          <v-flex>
            <v-switch
              @change = "switсhChange"
              v-model = "promo"
              :label  = "`Add to promo? ${promo === true ? 'YES' : 'NO'}`"
              color   = "primary"
            ></v-switch>
          </v-flex>

          <v-flex xs12>
            <v-btn
              @click    = "createAd"
              class     = "success"
              :disabled = "!valid"
            >
              Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      title: '',
      description: '',
      promo: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }

        console.log(ad)
      }
    },
    switсhChange () {
      console.log(this.promo)
    }
  }
}
</script>

<style scoped>

</style>
