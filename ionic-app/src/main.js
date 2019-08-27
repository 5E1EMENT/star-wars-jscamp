import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import firebase from "firebase/app";
import store from "./store/store";
import Ionic from "@ionic/vue";
import dateFilter from "@/app/core/filters/date.filter.js";
import { FingerprintAIO } from "@ionic-native/fingerprint-aio";
import { FingerprintShow } from "@/app/core/servicies/fingerprint.service.js";
import firebaseConfig from '@/app/core/configs/firebase.config.js'
import "@ionic/core/css/ionic.bundle.css";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Ionic);
Vue.filter("date", dateFilter);

/**
 * Firebase init app function
 */
firebase.initializeApp(firebaseConfig);

/**
 * Current application
 */
let app;

/**
 * Current user from local storage
 */
const currentUser = localStorage.getItem("user");

/**
 * Function checks if touch id available on current device or not
 * and runs appropriate callback
 */
FingerprintAIO.isAvailable(isAvailableSuccess, isAvailableError);

/**
 * If touch id is available
 */
function isAvailableSuccess() {
  /** If current user doesn't exist we will not running figerprint verify
   * If current user exist we will run fingerprint verify
   */
  if (!currentUser) {
    firebase.auth().onAuthStateChanged(() => {
      appInit();
    });
  } else {
    FingerprintShow();
  }
}
/**
 * If touch id unavailable
 */
function isAvailableError() {
  appInit();
}

/** Event hub */
export const eventHub = new Vue();

/**
 * Function initialize new vue app instance
 */
export function appInit() {
  if (!app) {
    app = new Vue({
      router,
      store,
      firebase,
      render: h => h(App)
    }).$mount("#app");
  }
}

export default { appInit };
