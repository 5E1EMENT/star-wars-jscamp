export default [
  {
    path: "/home",
    name: "Home",
    meta: { auth: true },
    component: () => import('@/app/films/components/home/HomePage.vue')
  }
];
