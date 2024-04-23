<template>
  <div>
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/aboutus">Nosotros</router-link></li>
        <li><router-link to="/blogAutos">Blog Autos</router-link></li>
        <li><router-link to="/blogMotos">Blog Motos</router-link></li>
        <li><router-link to="/Comparar">Comparar</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
      </ul>
      
      <div class="circle-menu" @click="toggleMenu">☰</div>
      <div v-if="showMenu" class="menu-options">
        <ul>
          <li v-if="!user"><router-link to="/login">Iniciar sesión</router-link></li>
          <li v-if="!user"><router-link to="/register">Registrarse</router-link></li>
          <li v-if="user"><button @click="logout">{{ user.displayName || user.email }} Salir</button></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../services/firebase/firebaseConfig';

const user = ref(null);
const showMenu = ref(false);

const router = useRouter();

onAuthStateChanged(auth, (authUser) => {
  user.value = authUser;
});

const logout = async () => {
  await signOut(auth);
  user.value = null;
  router.push('/');
  showMenu.value = false; // Cerrar el menú al cerrar sesión
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value; // Cambiar el estado de visibilidad del menú
};
</script>

<style scoped>
/* Estilos para la barra de navegación */
.navbar {
  background-color: #333;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.nav-links {
  list-style-type: none;
  padding: 10;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
}

.nav-links li a:hover {
  text-decoration: underline;
}

/* Estilo para el botón de menú */
.circle-menu {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 200;
}

/* Estilos para el menú desplegable */
.menu-options {
  position: absolute;
  right: 1rem;
  top: 60px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.menu-options ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-options li a,
.menu-options li button {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  background: none;
  border: none;
  text-align: left;
}

.menu-options li a:hover,
.menu-options li button:hover {
  background-color: #eee;
}
</style>
