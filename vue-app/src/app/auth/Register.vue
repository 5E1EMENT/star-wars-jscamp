<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="indigo"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  />
                  <v-text-field
                    v-model.trim="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  />
                  <v-text-field
                    v-model.trim="password"
                    :error-messages="passwordErrors"
                    label="Password"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <p>
                  Already have an account?
                  <router-link to="/login">
                    Login
                  </router-link>
                </p>
                <v-spacer />
                <v-btn
                  color="indigo"
                  dark
                  type="submit"
                  @click="submitHandler"
                >
                  Register
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { validationMixin } from 'vuelidate'
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data: () => ({
    name:'',
    email: '',
    password: ''
  }),
  validations: {
    name: {required},
    email: { required, email },
    password: {required, minLength: minLength(6)}
  },
  computed: {
    nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push(`Password should be at least ${this.$v.password.$params.minLength.min} symbols. Now: ${this.password.length} `)
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },
  methods: {
    async submitHandler() {
    if(this.$v.$invalid) {
      this.$v.$touch()
      return
    }
    const formData = {
      email: this.email,
      password: this.password,
      name: this.name
    }
   try {
      await this.$store.dispatch('register', formData)
      this.$router.push('/home')
    } catch(err) {
      console.log(err)
    }
  }
  }
}
</script>
<style scoped lang="scss">
  a {
    text-decoration: none;
  }
</style>
