<template>
  <div class="ion-page" main>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Login Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <form @submit.prevent="submitHandler">
        <ion-list lines="full" class="ion-no-margin ion-no-padding">
          <ion-item>
            <ion-label position="stacked">
              Email
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input
              required
              type="text"
              :value="email"
              @input="email = $event.target.value"
              placeholder="dan@mail.ru"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              Password
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input
              required
              type="text"
              :value="password"
              @input="password = $event.target.value"
              placeholder="111111"
            ></ion-input>
          </ion-item>
        </ion-list>
        <div class="ion-padding">
          <ion-button expand="block" type="submit" class="ion-no-margin">Login</ion-button>
        </div>
      </form>
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions } from "vuex";
import { Plugins } from "@capacitor/core";

// import { FingerPrintAuth } from "capacitor-fingerprint-auth";

export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    ...mapActions(["login"]),
    /**
     * Submit form handler
     * Emit's login action in auth store
     * and if no errors redirect to the
     * home page
     */
    async submitHandler() {
      /* Object whitch will besent into firebase */
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.login(formData);
        this.$router.push("/films");
      } catch (err) {
        /** Simple error handler */
        // this.error = err.code;
        console.log(err);
      }
    }
  },
  async mounted() {}
};
</script>