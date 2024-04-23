<template>
  <div class="home">
    <!-- Barra de navegación simulada -->
    <NavBarComponent />
    <!-- Contenedor del nombre de la empresa -->
    <div class="company-name-bar">MOTORSPORT</div>

    <!-- Área principal de Motorsport con imagen destacada -->
    <section class="motorsport-highlight">
      <!-- La imagen se establecerá en el CSS -->
    </section>
    <div class="carousel-header">
      MEJORES MARCAS
    </div>
    <!-- Contenedor Principal para los Carruseles -->
    <div class="carousel-container">
      <!-- Carrusel Izquierdo -->
      <div class="carousel left-carousel">
        <div class="arrow left-arrow" @click="prevLeftImage">&#10094;</div>
        <div class="brand-image-container">
          <img :src="currentLeftImage" alt="Left Brand" class="brand-image" />
        </div>
        <div class="arrow right-arrow" @click="nextLeftImage">&#10095;</div>
      </div>

      <!-- Carrusel Central -->
      <div class="carousel center-carousel">
        <div class="arrow left-arrow" @click="prevImage">&#10094;</div>
        <div class="brand-image-container">
          <img :src="currentImage" alt="Center Brand" class="brand-image" />
        </div>
        <div class="arrow right-arrow" @click="nextImage">&#10095;</div>
      </div>

      <!-- Carrusel Derecho -->
      <div class="carousel right-carousel">
        <div class="arrow left-arrow" @click="prevRightImage">&#10094;</div>
        <div class="brand-image-container">
          <img :src="currentRightImage" alt="Right Brand" class="brand-image" />
        </div>
        <div class="arrow right-arrow" @click="nextRightImage">&#10095;</div>
      </div>
    </div>
    
    <!-- Bloques de contenido con imagen y texto -->
    <div class="content-blocks">
      <div>
        <section class="content-block">
          <div class="content-image">
            <a href="https://www.tesla.com/es_mx/modelx">
              <img src="@/assets/img/tesla.jpeg" alt="Descripción">
            </a>
          </div>
          <div class="content-text">
            <p class="titulo-texto">TESLA</p>
            <p>Tesla, la compañía de vehículos eléctricos y tecnología energética, revoluciona la industria automotriz
              con
              sus innovaciones en baterías, conducción autónoma y energía solar, liderando el camino hacia un futuro
              sostenible..</p>
          </div>
        </section>
        <div class="divider-content"></div>
        <div class="video-text-block">
          <div class="text-content">
            <p class="titulo-texto">AUDI</p>
            <p>Sumérgete en el mundo del lujo y la alta velocidad con el Audi RS C8, un automóvil que redefine la
              excelencia en ingeniería automotriz. Diseñado para los verdaderos conocedores del automóvil que buscan la
              combinación perfecta de rendimiento excepcional, tecnología de vanguardia y estilo impecable, el RS C8 es
              más que un automóvil; es una obra maestra de la innovación que lleva la experiencia de conducción a nuevas
              alturas</p>
          </div>
          <div class="youtube-video-container">
            <iframe width="560" height="315" :src="videoUrl" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>




      <div class="divider-content"></div>

      <!-- Bloque inferior -->
      <section class="content-block">
        <div class="content-image">
          <a href="https://www.ducati.com/mx/es/motocicletas/panigale/superleggera-v4">
            <img src="@/assets/img/titi.jpeg" alt="Descripción">
          </a>
        </div>
        <div class="content-text">
          <p class="titulo-texto">DUCATI</p>
          <p>DUCATI, el gigante japonés del automóvil, ofrece una amplia gama de vehículos confiables y eficientes,
            desde
            automóviles compactos hasta SUVs y motocicletas de alto rendimiento, combinando calidad, tecnología y diseño
            innovador.</p>
        </div>
      </section>

      <div class="divider-content"></div>
      <div class="video-text-block">
        <div class="text-content">
          <p class="titulo-texto">YAMAHA</p>
          <p>Adéntrate en el mundo de la velocidad y el rendimiento con la Yamaha YZF-R1, una motocicleta que lleva la
            excelencia en ingeniería a nuevos límites. Diseñada para aquellos que buscan la emoción pura y la adrenalina
            de la competición, la R1 es más que una simple motocicleta; es una obra maestra de la ingeniería que
            redefine lo que es posible en el asfalto.</p>
        </div>
        <div class="youtube-video-container">
          <iframe width="560" height="315" :src="videoUrl2" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>





    </div>


    <!-- Pie de página -->
    <FooterComponent />

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import NavBarComponent from '../components/shared/NavBarComponent.vue';
import FooterComponent from '../components/shared/FooterComponent.vue';

const currentImageIndex = ref(0);
const images = ref([
  new URL('@/assets/img/nissan.jpeg', import.meta.url).href,
  new URL('@/assets/img/HondaL.jpeg', import.meta.url).href,
  new URL('@/assets/img/citroen.jpeg', import.meta.url).href,
  new URL('@/assets/img/bmwL.jpeg', import.meta.url).href,
]);

const currentLeftImageIndex = ref(0);
const leftImages = ref([new URL('@/assets/img/nissan.jpeg', import.meta.url).href,
        new URL('@/assets/img/HondaL.jpeg', import.meta.url).href,
        new URL('@/assets/img/citroen.jpeg', import.meta.url).href,
        new URL('@/assets/img/bmwL.jpeg', import.meta.url).href]);

const currentRightImageIndex = ref(0);
const rightImages = ref([ new URL('@/assets/img/nissan.jpeg', import.meta.url).href,
        new URL('@/assets/img/HondaL.jpeg', import.meta.url).href,
        new URL('@/assets/img/citroen.jpeg', import.meta.url).href,
        new URL('@/assets/img/bmwL.jpeg', import.meta.url).href]);


const currentImage = computed(() => images.value[currentImageIndex.value]);
const currentLeftImage = computed(() => leftImages.value[currentLeftImageIndex.value]);
const currentRightImage = computed(() => rightImages.value[currentRightImageIndex.value]);
const videoUrl = ref('https://www.youtube.com/embed/dPb3ig0LdqM');
const videoUrl2 = ref('https://www.youtube.com/embed/zINZq9Bt8YU');

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
}

function prevImage() {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
}

function nextLeftImage() {
  currentLeftImageIndex.value = (currentLeftImageIndex.value + 1) % leftImages.value.length;
}

function prevLeftImage() {
  currentLeftImageIndex.value = (currentLeftImageIndex.value - 1 + leftImages.value.length) % leftImages.value.length;
}

function nextRightImage() {
  currentRightImageIndex.value = (currentRightImageIndex.value + 1) % rightImages.value.length;
}

function prevRightImage() {
  currentRightImageIndex.value = (currentRightImageIndex.value - 1 + rightImages.value.length) % rightImages.value.length;
}
</script>


<style scoped>

.carousel-header {
  text-align: center;
  font-size: 2rem; /* Ajusta el tamaño de la fuente según tus preferencias */
  color: #FFFFFF; /* Elige un color que contraste bien con el fondo */
  background-color: #000000; /* Fondo oscuro para que el texto resalte */
  padding: 20px 0;
  margin-top: 20px;
  font-family: 'Arial', sans-serif; /* Fuente elegante y legible */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para dar profundidad */
}
.carousel-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.carousel {
  flex: 1; /* Cada carrusel toma un tercio del espacio */
  position: relative; /* Posicionamiento relativo para las flechas */
  margin: 0 10px; /* Margen entre carruseles */
}

.brand-image-container {
  text-align: center;
  overflow: hidden; /* Previene desbordamiento de la imagen */
}

.brand-image {
  width: 100%;
  height: auto;
}

.arrow {
  position: absolute;
  top: 50%; /* Mantiene las flechas verticalmente centradas */
  transform: translateY(-50%);
  color: #FFF;
  font-size: 24px;
  cursor: pointer;
  z-index: 5;
}

.left-arrow {
  left: 90px; /* Ajusta según sea necesario, usa valores negativos para acercar más a la imagen */
}

.right-arrow {
  right: 90px; /* Ajusta según sea necesario, usa valores negativos para acercar más a la imagen */
}
@media (max-width: 768px) {
  .carousel-container {
    flex-direction: column;
  }

  .carousel {
    margin-bottom: 20px; /* Añade espacio entre carruseles en vista móvil */
  }

  .arrow {
    font-size: 18px; /* Reduce el tamaño de las flechas en dispositivos pequeños */
  }
}


.home {
  /* Estilos para el contenedor principal */
  background-color: #8c8484;
}

.company-name-bar {
  width: 100%;
  /* Abarca todo el ancho */
  height: 6rem;
  color: white;
  text-align: center;
  padding: 0px 0;

  /* Espaciado arriba y abajo */
  font-size: 4em;
  /* Tamaño del texto */
  font-family: fantasy;
  opacity: 0.8;
}

.motorsport-highlight {
  background: url('@/assets/img/hero.jpeg') no-repeat center center;
  background-size: cover;
  height: 450px;
  margin-bottom: 2rem;
  /* Ajusta la altura deseada */
  /* No se necesita posición relativa aquí a menos que vayas a posicionar otros elementos dentro de la sección de forma absoluta */
}

.titulo-texto {
  width: 90%;
  /* Abarca todo el ancho */
  height: 5rem;
  color: white;
  text-align: center;
  padding: 0px 0;

  /* Espaciado arriba y abajo */
  font-size: 2em;
  /* Tamaño del texto */
  font-family: monospace;
  opacity: 0.8;
}

.brand-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.divider-content {
  border: 0;
  border-top: 5px solid white;
  /* Línea blanca para dividir las secciones */
  margin: 1rem 0;
  opacity: 0.1;
}

.brand-image {
  width: 15rem;
  /* O un ancho específico */
  height: auto;
  /* Para mantener la proporción */
  margin: 0 15px;
  /* Espacio entre imágenes */
  border-radius: 20px;
  /* Añade bordes redondeados aquí */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Opcional: sombra para dar profundidad */
  overflow: hidden;
  /* Asegura que las imágenes también se corten a la forma redondeada */
}

.name-bar {
  width: 100%;
  /* Abarca todo el ancho */
  height: 3rem;
  color: white;
  text-align: center;
  padding: 0px 0;
  opacity: 0.8;

  /* Espaciado arriba y abajo */
  font-size: 2em;
  /* Tamaño del texto */
  font-family: fantasy;

}

.brand-image-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  /* Ancho de cada imagen de marca */
  height: 150px;
  /* Altura de cada imagen de marca */
  margin: 0 10px;
  /* Espacio entre las imágenes de marcas */
  font-size: 20px;
  /* Ajusta al tamaño necesario */
  color: white;
  /* Color del texto dentro del placeholder */
}

/* Estilos específicos para cada marca, si quieres agregar algún estilo particular */
.nissan {
  background-color: black;
  /* Fondo para Nissan */
}

.honda {
  background-color: red;
  /* Fondo para Honda */
}

.citroen {
  background-color: black;
  /* Fondo para Citroën */
}

.content-blocks {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* Espacio entre los bloques de contenido */
}

.content-block {
  display: flex;
  align-items: center;
  gap: 2rem;
  /* Espacio entre la imagen y el texto */
  margin: 2rem;
  /* Margen alrededor del bloque para evitar que esté demasiado pegado al borde de la ventana o a otros elementos */
}

.content-block.reverse {
  flex-direction: row-reverse;
  /* Invierte el orden para el bloque inferior */
}

.content-image {
  flex: 1;
  padding: 0 2rem;
  /* Relleno horizontal para separar la imagen del texto */
}

.content-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  /* Esquinas redondeadas para las imágenes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Sombra para dar profundidad a las imágenes */
}

.content-text {
  flex: 1;
  padding: 2rem;
  /* Relleno interno para el texto */
}

p {
  color: white;
  text-align: justify;
}

/* youtube */
.video-text-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  /* Ajusta este valor al ancho máximo deseado */
  gap: 2rem;
  /* Espacio entre el texto y el video */
  padding: 2rem;
  /* Padding general para el bloque */
}

.text-content {
  flex-basis: 70%;
  /* Ajusta este valor para el ancho del texto */
  padding: 1rem;
  /* Padding para el texto, si es necesario */
}

.youtube-video-container {
  flex-basis: 50%;
  /* Ajusta este valor para el ancho del video */
  position: relative;
  /* Posicionamiento relativo para el iframe absoluto */
  padding-top: 0;
  /* Elimina el padding-top si ya no mantienes la relación de aspecto */
  padding: 12rem;
  /* Aplica padding al contenedor para evitar que el video toque los bordes */

}

.youtube-video-container iframe {
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
  /* Elimina el borde del iframe */
}
</style>