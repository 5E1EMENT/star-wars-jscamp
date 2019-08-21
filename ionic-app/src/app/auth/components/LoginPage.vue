<template>
  <div class="ion-page" main>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Login</ion-title>
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
            <ion-input required type="text" :value="email" @input="email = $event.target.value"></ion-input>
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
            ></ion-input>
          </ion-item>
        </ion-list>
        <div class="ion-padding">
          <ion-button expand="block" type="submit" class="ion-no-margin">Login</ion-button>
        </div>
      </form>
      <ion-button @click="openStart">Open Start Menu</ion-button>
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import {mapActions} from 'vuex'

export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
      ...mapActions(['login']),
      openStart() {
      document.querySelector("ion-menu-controller").open("start");
    },
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
        await this.login(formData)
          this.$router.push("/films");
      } catch (err) {
        /** Simple error handler */
        // this.error = err.code;
        console.log(err)
      }
    }
  }
};
</script>