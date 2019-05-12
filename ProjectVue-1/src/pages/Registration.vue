<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration form</v-toolbar-title>
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
              <v-text-field
                prepend-icon = "lock"
                name         = "passwordConfirm"
                label        = "Confirm password"
                type         = "password"
                v-model      = "passwordConfirm"
                :rules       = "rulePasswordConfirm"
                autocomplete
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer class="hidden-xs-only"></v-spacer>
            <v-btn
              @click    = "validate"
              color     = "primary"
              :disabled = !valid
            >Create account</v-btn>
            <v-btn
              @click    = "reset"
              color     = "error"
            >Reset</v-btn>
            <v-btn
              @click    = "resetValidation"
              color     = "warning"
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
    passwordConfirm: '',
    valid: false
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
  },
  computed: {
    ruleEmail () {
      return [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    },
    rulePassword () {
      return [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 5 characters'
      ]
    },
    rulePasswordConfirm () {
      return [
        () => (this.password === this.passwordConfirm) || 'Passwords must be match'
      ]
    }
  }
}
</script>

<style scoped>

</style>
