<template>
  <div class="login-container">
      <div class="login-card">
          <div class="login-image-section">
              <!-- La imagen de fondo se define en el CSS -->
          </div>
          <div class="login-form-section">
              <h2>Inicio de sesión</h2>
              <p>Por favor ingrese los siguientes datos</p>
              <form @submit.prevent="login">
                  <div class="input-group">
                      <input type="email" id="email" placeholder="Correo electrónico" v-model="email" required>
                  </div>
                  <div class="input-group">
                      <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
                  </div>
                  <button type="submit">Iniciar sesión</button>
              </form>
              <p class="signup-prompt">¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { loginUser } from '../services/authenticathion/authService';
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importamos useRouter para acceder a $router

const router = useRouter(); // Usamos useRouter para obtener el objeto $router

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
    if (!email.value || !password.value) {
        errorMessage.value = 'Todos los campos son obligatorios.';
        alert(errorMessage.value);
        return;
    }

    try {
        await loginUser(email.value, password.value);
        router.push('/'); // Usamos router en lugar de $router
    } catch (error) {
        errorMessage.value = error.message;
        alert(errorMessage.value);
    }
};
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
}

.login-card {
  display: flex;
  width: 70%; /* Ancho del card */
  max-width: 800px; /* Máximo ancho del card */
  height: 70%; /* Altura del card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
}

.login-image-section {
  background: url('@/assets/img/login.jpeg') no-repeat center center;
  background-size: cover;
  flex: 1; /* O cualquier proporción que necesites para el lado de la imagen */
  border-top-left-radius: 20px; /* Redondear las esquinas izquierdas superiores */
  border-bottom-left-radius: 20px; /* Redondear las esquinas izquierdas inferiores */
}

.login-form-section {
  flex: 1;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #918f8f; /* Fondo gris para la sección del formulario, como en Register.vue */
  color: white; /* Texto en blanco */
}

.input-group {
  margin-bottom: 1em;
}

input {
  width: 100%;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-top: 0.5em;
  background: white; /* Fondo de los inputs */
  color: #333; /* Color del texto para los inputs */
}

button {
  width: 100%;
  padding: 1em;
  border: none;
  border-radius: 5px;
  background-color: #e3dfdf; /* Fondo de los botones, como en Register.vue */
  color: black; /* Texto de los botones en negro */
  font-weight: bold;
  margin-top: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #cacaca; /* Color al pasar el ratón por encima del botón */
}

.signup-prompt {
  text-align: center;
  margin-top: 1em;
  color: white; /* Texto del enlace en blanco */
}

.signup-prompt a {
  color: #333333; /* Enlace en blanco */
  text-decoration: none;
}

.signup-prompt a:hover {
  text-decoration: underline;
  color: #ccc; /* Enlace al pasar el ratón por encima */
}
</style>
