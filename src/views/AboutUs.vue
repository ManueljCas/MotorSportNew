<template>
  <div class="home">
      <NavBarComponent />

      <header class="about-header">
          <img src="@/assets/img/aboutus/header.jpeg" alt="Conócenos" class="header-image">
          <h1 class="header-title">Conócenos</h1>
      </header>

      <section class="about-us">
          <div class="mission-vision">
              <div class="mission">
                  <h2>Misión</h2>
                  <p>en motorsport nos dedicamos a inspirar y empoderar a los entusiastas del motor proporcionando una plataforma completa donde puedan descubrir y explorar los últimos modelos de autos y motos. Nuestra misión es ser una fuente confiable de conocimiento y recursos, promoviendo una comunidad inclusiva y acogedora para todos los amantes de los motores.</p>
              </div>
              <div class="vision">
                  <h2>Visión</h2>
                  <p>En motosport , nuestra visión es convertirnos en el destino preferido en línea para entusiastas del motor de todo el mundo. Nos esforzamos por ser reconocidos como la plataforma líder que ofrece una experiencia incomparable de descubrimiento y exploración de los últimos modelos de autos y motos. Aspiramos a ser un referente en la industria automotriz, brindando inspiración, conocimiento y conexión a una comunidad global de amantes del motor.</p>
              </div>
          </div>

          <div class="developers">
              <h2>Desarrolladores</h2>
              <div class="developer-cards">
                  <!-- Tarjetas de desarrolladores -->
                  <!-- Repite el siguiente bloque para cada desarrollador -->
                  <div class="developer-card">
                      <img src="@/assets/img/aboutus/misael.jpeg" alt="Nombre del desarrollador" />
                      <h3>MISAEL BRICEÑO</h3>
                  </div>
                  <!-- ... otros desarrolladores -->
                  <div class="developer-card">
                      <img src="@/assets/img/aboutus/yess.jpeg" alt="Nombre del desarrollador" />
                      <h3>YESENIA JIMENEZ</h3>
                  </div>
                  <div class="developer-card">
                      <img src="@/assets/img/aboutus/castro.jpeg" alt="Nombre del desarrollador" />
                      <h3>MANUEL CASTRO</h3>
                  </div>
                  <div class="developer-card">
                      <img src="@/assets/img/aboutus/kevin.jpeg" alt="Nombre del desarrollador" />
                      <h3>KEVIN RAMIREZ</h3>
                  </div>
              </div>
          </div>
      </section>

      <FooterComponent />
  </div>
</template>

<script>
import NavBarComponent from '@/components/shared/NavBarComponent.vue';
import FooterComponent from '@/components/shared/FooterComponent.vue';

export default {
  name: 'AboutUs',
  components: {
      NavBarComponent,
      FooterComponent
  }
};
</script>

<style scoped>

h2{
text-align: center;
}

.home {
  background-color: #8c8484;
}

.about-header {
  position: relative;
  text-align: center;
  color: #fff;
}

.header-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  /* Asegúrate que la imagen cubra el espacio asignado sin distorsionarse */
}

.header-title {
  position: absolute;
  color: black;
  top: 50%;
  /* Centra verticalmente */
  left: 50%;
  /* Centra horizontalmente */
  transform: translate(-50%, -50%);
  /* Ajuste fino para el centrado */
  font-size: 3rem;
  /* Tamaño de fuente grande */
  /* Añade estilos adicionales para el título si es necesario */
}

.about-us {
  text-align: center;
  padding: 4rem;
}

.title {
  margin-bottom: 2rem;
  font-size: 3rem;
}

.mission-vision {
  display: flex;
  justify-content: space-around;
  margin-bottom: 4rem;
  color: white;
}

.mission,
.vision {
  text-align: justify;
  flex-basis: 45%;
}

.developers {
  margin-bottom: 1rem;
  color: white;
}

.developer-cards {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.developer-card {
  width: 200px;
  text-align: center;
}

.developer-card img {
  border-radius: 50%;
  /* Hace la imagen redonda */
  width: 150px;
  /* Ancho fijo */
  height: 150px;
  /* Alto fijo */
  object-fit: cover;
  /* Asegura que la imagen cubra el área sin distorsión */
  margin-bottom: 1rem;
  /* Espacio debajo de la imagen */
  border: 3px solid white;
  /* Opcional: borde para la imagen */
}

/* Estilos para los nombres de los desarrolladores para asegurar consistencia */
.developer-card h3 {
  font-size: 1rem;
  margin-top: 0.5rem;
  /* Espacio encima del nombre */
  margin-bottom: 0.5rem;
  /* Espacio debajo del nombre */
  color: white;
}

/* Ajustes de diseño para las tarjetas de los desarrolladores */
.developer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  /* Opcional: fondo para las tarjetas */
  border-radius: 10px;
  /* Opcional: bordes redondeados para las tarjetas */
}

@media only screen and (max-width: 768px) {
  .mission-vision {
      flex-direction: column;
      align-items: center;
  }

  .mission,
  .vision {
      width: 100%;
      margin-bottom: 2rem;
  }

  .developer-cards {
      flex-wrap: wrap;
  }

  .developer-card {
      width: 100%;
      /* Ajusta esto para pantallas pequeñas */
      margin-bottom: 2rem;
  }

  .developer-card img {
      width: 150px;
      /* Tamaño fijo para imágenes */
      height: 150px;
      /* Tamaño fijo para imágenes */
      object-fit: cover;
      margin-bottom: 1rem;
  }

  .developer-card h3 {
      font-size: 1rem;
  }
}

@media only screen and (min-width: 769px) {
  .developer-cards {
      justify-content: space-around;
  }

  .developer-card {
      width: calc(33% - 4rem);
      /* Ajusta esto para pantallas medianas */
  }
}

@media only screen and (min-width: 1024px) {
  .developer-cards {
      justify-content: space-between;
  }

  .developer-card {
      width: calc(25% - 4rem);
      /* Ajusta esto para pantallas grandes */
  }
}
</style>