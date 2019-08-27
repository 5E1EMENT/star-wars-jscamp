<template>
  <div class="ion-page" main>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Register Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <form @submit.prevent="submitHandler">
        <ion-list lines="full" class="ion-no-margin ion-no-padding">
          <ion-item>
            <ion-label position="stacked">
              Name
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input required type="text" :value="name" @input="name = $event.target.value"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              Email
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input required type="email" :value="email" @input="email = $event.target.value"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              Password
              <ion-text color="danger">*</ion-text>
            </ion-label>
            <ion-input required type="text" :value="password" @input="password = $event.target.value"></ion-input>
          </ion-item>
        </ion-list>
        <div class="ion-padding">
          <ion-button expand="block" type="submit" class="ion-no-margin">Register</ion-button>
        </div>
      </form>
    </ion-content>
  </div>
</template>
<script>
/* eslint-disable */
import {mapActions} from 'vuex'
export default {
  data: () => ({
    name: "",
    email: "",
    password: ""
  }),
  methods: {
      ...mapActions(['register']),
    /**
     * Submit form handler
     * Emit's login action in auth store
     * and if no errors redirect to the
     * home page
     */
    async submitHandler() {
      /* Object whitch will besent into firebase */
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      try {
        await this.register(formData);
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