import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import firebase from "firebase/app";
import store from "./store/store";
import Ionic from "@ionic/vue";
import dateFilter from "@/app/core/filters/date.filter.js";
import { FingerprintAIO } from "@ionic-native/fingerprint-aio";
import "@ionic/core/css/ionic.bundle.css";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Ionic);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyBcE4tHDbQrvjjmL8DkmKzNGccGfz3Y8eE",
  authDomain: "ionic-app-680c5.firebaseapp.com",
  databaseURL: "https://ionic-app-680c5.firebaseio.com",
  projectId: "ionic-app-680c5",
  storageBucket: "",
  messagingSenderId: "915033293057",
  appId: "1:915033293057:web:0928fe56063179b4"
});

/**
 * Current application
 */
let app;

/**
 * Current user from local storage
 */
const currentUser = localStorage.getItem('user')
/** If current user doesn't exist we will not running figerprint verify
 * If current user exist we will run fingerprint verify
 */
if (!currentUser) {
  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        store,
        firebase,
        render: h => h(App)
      }).$mount("#app");
    }
  });
} else {
  FingerprintAIO.show(
    {
      clientId: "Fingerprint-Demo", //Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
      clientSecret: "o7aoOMYUbyxaD23oFAnJ" //Necessary for Android encrpytion of keys. Use random secret key.
    },
    successCallback,
    errorCallback
  );
}
/**
 * If fingerprint is correct
 */
function successCallback() {
  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        store,
        firebase,
        render: h => h(App)
      }).$mount("#app");
    }
  });
}
/**
 * If fingerprint doesn't work correct
 */
function errorCallback() {
  alert("Error touch id");
}

/** Event hub */
// eslint-disable-next-line
export const eventHub = new Vue();
