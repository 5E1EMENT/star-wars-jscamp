import { userLoggedIn } from '@/app/core/guards/auth.guard';

export default [
  {
    path: "/home",
    name: "Home",
    meta: { auth: true },
    component: () => import("@/app/films/components/home/HomePage.vue"),
    beforeEnter: userLoggedIn
  },
  {
    path: "/film/:filmDbId",
    name: "Film",
    meta: { auth: true },
    component: () => import("@/app/films/components/film/Film.vue"),
    beforeEnter: userLoggedIn,
  }
];
