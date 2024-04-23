<template>
  <div class="register-container">
    <div class="register-card">
      <div class="register-image-section">
        <!-- La imagen de fondo se define en el CSS -->
      </div>
      <div class="register-form-section">
        <h2>Regístrate</h2>
        <p>Por favor ingrese los siguientes datos</p>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <form @submit.prevent="register">
          <div class="input-group">
            <input type="text" id="full-name" placeholder="Nombre completo" v-model="fullName" required>
          </div>
          <div class="input-group">
            <input type="email" id="email" placeholder="Correo electrónico" v-model="email" required>
          </div>
          <div class="input-group">
            <input type="password" id="password" placeholder="Contraseña" v-model="password" required>
          </div>
          <button type="submit">Registrarse</button>
        </form>
        <p class="signin-prompt">¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { registerUser } from '../services/authenticathion/authService';
export default {
  name: 'Register',
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      // Agregar un mensaje de error
      errorMessage: '',
    };
  },
  methods: {
    async register() {
      // Validar los campos del formulario
      if (!this.fullName || !this.email || this.password.length < 8) {
        // Aquí puedes manejar la validación y establecer un mensaje de error
        this.errorMessage = 'Por favor, rellene todos los campos y asegúrese de que la contraseña tenga al menos 8 caracteres.';
        alert(this.errorMessage);
        return;
      }

      try {
        await registerUser(this.email, this.password, this.fullName);
        // Mostrar mensaje de éxito
        alert('Registro exitoso. Ahora serás redirigido a la página de inicio de sesión.');
        // Redirigir al usuario a la página de inicio de sesión
        this.$router.push('/login');
      } catch (error) {
        // Manejar el error, mostrar mensaje al usuario
        this.errorMessage = error.message;
        alert(this.errorMessage);
      }
    },
  },
};
</script>

<!-- <script>
import { registerUser } from '../services/authentication/authService';
export default {
  name: 'Register',
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        await registerUser(this.email, this.password, this.fullName);
        // Redirigir al usuario o mostrar mensaje de éxito
      } catch (error) {
        // Manejar el error, mostrar mensaje al usuario
      }
    },
  },
};
</script>
 -->
<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* Fondo semi-transparente */
}

.register-card {
  display: flex;
  width: 70%;
  /* Ancho del card */
  max-width: 800px;
  /* Máximo ancho del card */
  height: 70%;
  /* Altura del card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
}

.register-image-section {
  background: url('@/assets/img/register.jpeg') no-repeat center center;
  background-size: cover;
  flex: 1;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.register-form-section {
  flex: 1;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #918f8f;
  /* Color de fondo para la sección del formulario */
  color: white;
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
}

button {
  color: black;
  width: 100%;
  padding: 1em;
  border: none;
  border-radius: 5px;
  background-color: #e3dfdf;
  font-weight: bold;
  margin-top: 1em;
  cursor: pointer;
}

button:hover {
  background-color: #555555;
}

.signin-prompt {
  text-align: center;
  margin-top: 1em;
}

.signin-prompt a {
  color: #333333;
  text-decoration: none;
}

.signin-prompt a:hover {
  text-decoration: underline;
}
.error-message {
  color: red;
  margin-bottom: 1em;
}

</style>