import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../services/Helpers'

const routes = [
  //login and Logout
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "usuarios" */ '@/components/user/login/Login')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "usuarios" */ '@/components/user/login/Logout')
  },
  //views
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //components
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "usuarios" */ '@/components/ventas/Ventas'),
  },
  {
    path: '/compras',
    name: 'Compras',
    component: () => import(/* webpackChunkName: "usuarios" */ '@/components/almacen/compras/Compras'),
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "usuarios" */ '@/components/user/usuarios/Usuarios'),

  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "Error" */ '@/components/error/error_acceso/Error'),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {

  //comprobamos si está logueado
  if (to.name !== "Home" && to.name !== "About" && to.name !== "Login" && !await Auth.isLoggedIn()) {
    next("/login");
  } else {
    //comprobamos si admin o empleado
    if (to.name === "Usuarios" && !await Auth.isAdministrator() && !await Auth.isEmployee()) {
      next("/error")
    } else {
      //comprobamos si es admin o almacenero
      if (to.name === "Compras" && !await Auth.isAdministrator() && !await Auth.isGrocer()) {
        next("/error")
      } else {
        //comprobamos si es admin o vendedor 
        if (to.name === "Ventas" && !await Auth.isAdministrator() && !await Auth.isSeller()) {
          next("/error")
        } else {
          //Si no es ninguno continuamos
          next()
        }
      }
    }
  }
});

export default router
