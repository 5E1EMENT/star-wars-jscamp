import { authPageGuard } from '@/app/core/guards/auth.guard';
import LoginPage from '@/app/auth/components/LoginPage.vue';
import registrationPage from '@/app/auth/components/RegisterPage.vue'
export default [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/login",
    component: LoginPage,
    beforeEnter: authPageGuard
  },
  {
    path: "/register",
    component: registrationPage,
    beforeEnter: authPageGuard
  }
];
