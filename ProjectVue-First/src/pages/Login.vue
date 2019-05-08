<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                prepend-icon = "person"
                name         = "email"
                label        = "Email"
                type         = "email"
                v-model      = "email"
                :rules       = "ruleEmail"
                @keypress    = "keypress"
                required
              ></v-text-field>
              <v-text-field
                prepend-icon = "lock"
                name         = "password"
                label        = "Password"
                type         = "password"
                v-model      = "password"
                :rules       = "rulePassword"
                autocomplete
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color     = "primary"
              @click    = "validate"
              :disabled = !valid
            >Login</v-btn>
            <v-btn
              color     = "error"
              @click    = "reset"
            >Reset</v-btn>
            <v-btn
              color     = "warning"
              @click    = "resetValidation"
            >Reset validation</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    email: '',
    password: '',
    valid: false,
    ruleEmail: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    rulePassword: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 5 characters'
    ]
  }),
  props: {
    source: String
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        console.log(this.email)
        console.log(this.password)
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    keypress () {
      console.log(this.valid)
    }
  }
}
</script>

<style scoped>

</style>
