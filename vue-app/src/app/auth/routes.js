export default [
  {
    path: "",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import('@/app/auth/components/LoginPage.vue')
  },
  {
    path: "/register",
    component: () => import('@/app/auth/components/RegisterPage.vue')
  }
];
