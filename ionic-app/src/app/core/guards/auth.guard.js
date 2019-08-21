import firebase from "firebase/app";

/**
 * Doesn't allow to get in to the Auth page if user is logged in
 * @param {Route} to - Target route being navigated to
 * @param {Route} from - Current route being navigated away from
 * @param {Function} next - Must be called to resolve the hook
 */
export function authPageGuard(to, from, next) {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      next("films");
    } else {
      next();
    }
  }
  