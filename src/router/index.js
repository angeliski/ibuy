import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/features/login/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})


const isAuthRoute = route => route.path.indexOf('/login') !== -1;
const isLogged = () => sessionStorage.getItem('login_ibuy');

router.beforeEach((to, from, next) => {
    if (!isAuthRoute(to) && !isLogged()) {
        next('/login');
    } else if (isAuthRoute(to) && isLogged()) {
        next('/');
    } else {
        next();
    }
});


export default router;
