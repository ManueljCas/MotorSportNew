<template>
  <div class="footer">
    <div class="footer-top">
      <!-- Contact Info -->
      <div class="contact-info">
        <span class="icon"><i class="fas fa-phone"></i>+52 55 1234 5678</span>
        <span class="icon"><i class="fas fa-envelope"></i> motorsport@gmail.com</span>
      </div>
      <!-- Social Icons -->
      <div class="social-icons">
        <a href="https://www.facebook.com/KevinMor219">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.facebook.com/manueljesus.castropech">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/manueljesus.castropech">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
    <!-- Divider -->
    <hr class="footer-divider">
    <!-- Legal Links -->
    <div class="footer-bottom">
      <div class="legal-links">
        Aspectos legales | Políticas de privacidad | Seguridad | Administrar cookies
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

const FooterComponent = defineComponent({
  name: 'FooterComponent',
});
</script>



<style scoped>
/* footer */
.footer {
  width: 100%;
  padding-top: 5rem;
}

.footer-top,
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  /* Añade un poco de espacio alrededor del contenido */
}

.contact-info {
  display: flex;
  gap: 1rem;
  /* Espacio entre los elementos de contacto */
  color: white;
}

.social-icons {
  font-size: 1.5rem;
  /* Tamaño de los íconos de las redes sociales */
  display: flex;
  gap: 1rem;
  /* Espacio entre los íconos */
}

.footer-divider {
  border: 0;
  border-top: 10px solid #fff;
  /* Línea blanca para dividir las secciones */
  margin: 1rem 0;
}

.legal-links {
  text-align: center;
  padding: 0.5rem 0;
  color: #fff;
  /* Color de texto de los enlaces legales */
}

/* Iconos de FontAwesome */
.icon i,
.social-icons i {
  color: #fff;
  /* Color de los íconos */
}

/* Añade estilos para hover y focus según necesites */
.icon:hover,
.social-icons i:hover {
  color: #ddd;
  /* Cambio de color al pasar el mouse */
}
</style>
