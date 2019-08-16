import checkIsAdmin from "@/app/core/helpers/checkIsAdmin.js";

/**
 * Checks if the user is admin
 * Redirects to the requested page or another one depending on conditions
 * @param {Route} to - Target route being navigated to
 * @param {Route} from - Current route being navigated away from
 * @param {Function} next - Must be called to resolve the hook
 */
export function isUserAdmin(to, from, next) {
  if (checkIsAdmin()) {
    next();
  } else {
    next("/login");
  }
}
