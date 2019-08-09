import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "@/router/router.js";
import store from "@/store/store.js";
import Vuelidate from "vuelidate";

import Loader from "./app/utils/TheLoader";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.component("Loader", Loader);
/**
 * Firebase init configuration
 */
firebase.initializeApp({
  apiKey: "AIzaSyCBGN-YS3QdzS3FFWOJpHPI5PS8lHiRaB4",
  authDomain: "vue-film-app.firebaseapp.com",
  databaseURL: "https://vue-film-app.firebaseio.com",
  projectId: "vue-film-app",
  storageBucket: "",
  messagingSenderId: "339337547545",
  appId: "1:339337547545:web:ee902236417440d2"
});

/**
 * Current application
 */
let app;

/**
 * Allows to display app
 */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      firebase,
      render: h => h(App)
    }).$mount("#app");
  }
});
