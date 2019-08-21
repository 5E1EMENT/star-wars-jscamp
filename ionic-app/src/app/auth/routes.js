import { authPageGuard } from "@/app/core/guards/auth.guard";
import LoginPage from "@/app/auth/components/LoginPage.vue";
import RegisterPage from "@/app/auth/components/RegisterPage.vue";

export default [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    beforeEnter: authPageGuard
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
    beforeEnter: authPageGuard
  }
];
