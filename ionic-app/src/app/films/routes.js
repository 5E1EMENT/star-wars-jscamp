export default [
    {
        path: '/films',
        name: 'films',
        meta: { auth: true },
        component: () => import('@/app/films/components/Films.vue')
    },
    {
        path: "/films/:filmId",
        name: "Film",
        meta: { auth: true },
        component: () => import("@/app/films/components/Film.vue")
      }
]