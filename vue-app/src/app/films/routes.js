export default [
  {
    path: "/home",
    name: "Home",
    meta: { auth: true },
    component: () => import("@/app/films/components/home/HomePage.vue")
  },
  {
    path: "/film/:filmDbId",
    name: "Film",
    component: () => import("@/app/films/components/film/Film.vue")
  }
];
