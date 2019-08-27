import { appInit } from "@/main.js";
import firebase from "firebase/app";
import { FingerprintAIO } from "@ionic-native/fingerprint-aio";
/**
 * If fingerprint is correct
 */
function successFingerprint() {
  firebase.auth().onAuthStateChanged(() => {
    appInit();
  });
}
/**
 * If fingerprint doesn't work correct
 */
function errorFingerprint() {
  alert("Error touch id");
}

/**
 * Function allows to initiaalize touch id modal
 * if user device supports it
 */
export function FingerprintShow() {
  FingerprintAIO.show(
    {
      clientId: "Fingerprint-Demo", //Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
      clientSecret: "o7aoOMYUbyxaD23oFAnJ" //Necessary for Android encrpytion of keys. Use random secret key.
    },
    successFingerprint,
    errorFingerprint
  );
}

export default { FingerprintShow };
