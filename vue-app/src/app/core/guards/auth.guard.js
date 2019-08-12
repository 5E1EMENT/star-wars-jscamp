import firebase from 'firebase/app'
/**
 * Checks if the user is logged in and if he has access to the page.
 * Redirects to the requested page or another one depending on conditions
 * @param {Route} to - Target route being navigated to
 * @param {Route} from - Current route being navigated away from
 * @param {Function} next - Must be called to resolve the hook
 */
export function userLoggedIn(to, from, next) {
    const currentUser = firebase.auth().currentUser
  if (currentUser != null) {
    next();
  } else {
    next('login');
  }
}