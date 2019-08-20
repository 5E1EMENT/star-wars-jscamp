import LoginPage from '@/app/auth/components/LoginPage.vue'
import RegisterPage from '@/app/auth/components/RegisterPage.vue'

export default [
    {
        path: "",
        redirect: "/login"
      },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    }
]