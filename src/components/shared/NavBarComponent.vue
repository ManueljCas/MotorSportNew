<template>
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
</template>

<script>
import { auth } from '../../services/firebase/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  name: 'NavBarComponent',
  data() {
    return {
      user: null,
      showMenu: false, // Controla la visibilidad del menú desplegable
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  methods: {
    async logout() {
      await signOut(auth);
      this.user = null;
      this.$router.push('/'); // Redirige al inicio después de cerrar sesión
      this.showMenu = false; // Cierra el menú hamburguesa
    },
    toggleMenu() {
      this.showMenu = !this.showMenu; // Cambia el estado de visibilidad del menú
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
.fondo {
background-color:cornsilk;
opacity: 0.10;
}

/* Estilo consistente para el círculo del menú */
.circle-menu {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative; /* Asegura que el z-index tenga efecto */
  z-index: 200; /* Mantiene el círculo del menú encima de otros elementos */
}

/* Estilos para las opciones del menú */
.menu-options {
  position: absolute;
  right: 1rem;
  top: 60px; /* Ajusta este valor según sea necesario para que no se superponga con otros elementos */
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

.menu-options li a, .menu-options li button {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  background: none; /* Quitar cualquier fondo que pueda haber */
  border: none; /* Quitar bordes */
  text-align: left; /* Alinea el texto a la izquierda */
}

.menu-options li a:hover, .menu-options li button:hover {
  background-color: #eee; /* Cambio sutil al pasar el ratón */
}

</style>