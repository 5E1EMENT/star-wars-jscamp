export default [
    {
        path: '/films',
        name: 'films',
        component: () => import('@/app/films/components/Films.vue')
    },
    {
        path: "/films/:filmId",
        name: "Film",
        meta: { auth: true },
        component: () => import("@/app/films/components/Film.vue")
      }
]