export default [
    {
        path: "",
        redirect: "/login"
      },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/app/auth/components/LoginPage.vue')
    }
]