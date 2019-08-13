import { authPageGuard } from '@/app/core/guards/auth.guard';

export default [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import('@/app/auth/components/LoginPage.vue'),
    beforeEnter: authPageGuard
  },
  {
    path: "/register",
    component: () => import('@/app/auth/components/RegisterPage.vue'),
    beforeEnter: authPageGuard
  }
];
