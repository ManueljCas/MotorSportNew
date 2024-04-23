// router/index.ts
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue'; 
import Register from '../views/Register.vue'; 
import AboutUs from '../views/AboutUs.vue'; 
import BlogAutos from '../views/BlogAutos.vue'
import BlogMotos from '../views/BlogMotos.vue'
import FAQ from '../views/FAQ.vue';
import Comparar from '../views/ComparadorVehiculos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/blogAutos',
    name: 'BlogAutos',
    component: BlogAutos,
  },
  {
    path: '/blogMotos',
    name: 'BlogMotos',
    component: BlogMotos,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/Comparar',
    name: 'Comparar',
    component: Comparar,
  },
  // ... otras rutas
];

const router = createRouter({
  // Usa import.meta.env.VITE_BASE_URL en lugar de process.env.BASE_URL
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});


// Crear instancia de autenticación
const auth = getAuth();

router.beforeEach((to, from, next) => {
  // Comprobar el estado de autenticación en cada cambio de ruta
  onAuthStateChanged(auth, (user) => {
    if (user && (to.name === 'Login' || to.name === 'Register')) {
      // Si el usuario está autenticado y la ruta es login o register, redirige a Home
      next({ name: 'Home' });
    } else {
      // En cualquier otro caso, sigue con la navegación prevista
      next();
    }
  });
});

export default router;