<template>
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
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
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
                Don't have any account?
                <router-link to="/register">
                  Register
                </router-link>
              </p>
              <v-spacer />
              <v-btn
                color="indigo"
                dark
                type="submit"
                @click="submitHandler"
              >
                Login
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <b>{{ error }}</b>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
/** Mehtods allows to validate form fields */
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  /**
   * Login data
   */
  data: () => ({
    email: "",
    password: "",
    error: ""
  }),
  /**
   * Spectial object field
   * to validate form fields
   */
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  computed: {
    /**
     * Password error handler
     */
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push(
          `Password should be at least ${this.$v.password.$params.minLength.min} symbols. Now: ${this.password.length} `
        );
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    /**
     * Email error handler
     */
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    /**
     * Submit form handler
     * Emit's login action in auth store
     * and if no errors redirect to the
     * home page
     */
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      /* Object whitch will besent into firebase */
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/home");
      } catch (err) {
        /** Simple error handler */
        this.error = err.code;
      }
    }
  }
};
</script>
<style lang="scss" module>
a {
  text-decoration: none;
}
main .v-content {
  padding-top: 0 !important;
}
</style>