import {isUserAdmin} from '@/app/core/guards/admin.guard.js'

export default [
    {
      path: "/films",
      name: "Films",
      meta: { auth: true, admin: true },
      component: () => import("@/app/admin/components/AdminFilms.vue"),
      beforeEnter: isUserAdmin
    },
    {
      path: "/editfilm/:filmDbId",
      name: "Edit film",
      meta: { auth: true, admin: true },
      component: () => import("@/app/admin/components/AdminFilm.vue"),
      beforeEnter: isUserAdmin
    }
  ];
  