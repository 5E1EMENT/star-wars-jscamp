import firebase from "firebase/app";
/**
 * Check is user admin
 * @returns {boolean} Returns admin permissions sign.
 */
const checkIsAdmin = () => {
  const adminEmail = firebase.auth().currentUser.email;
  return process.env.VUE_APP_ADMIN_EMAIL === adminEmail;
};

export default checkIsAdmin;
