<template>
    <div class="faq-container">
      <NavBarComponent />
      <div class="faq-conteiner-secondary">
        <h2 class="faq-title">Preguntas Frecuentes</h2>
        <ul class="faq-list">
          <li v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <div class="faq-card" @click="toggleAnswer(index)" :class="{ 'active': activeIndex === index }">
              <h3 class="faq-question">{{ faq.question }}</h3>
              <div class="divider-content" v-if="activeIndex === index">
                <p class="faq-answer">{{ faq.answer }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <FooterComponent />
    </div>
  </template>
  
  <script lang="ts" setup>
  import NavBarComponent from '../components/shared/NavBarComponent.vue';
  import FooterComponent from '../components/shared/FooterComponent.vue';
  import { ref } from 'vue';
  
  // Definición de la interfaz para cada pregunta frecuente
  interface Faq {
    question: string;
    answer: string;
  }
  
  // Lista de preguntas frecuentes
  const faqs = ref<Faq[]>([
  { question: '¿Cómo inicio sesión o me registro?', answer: 'Para iniciar sesión, simplemente busca el icono que tiene tres rayas horizontales en la esquina superior derecha de la pantalla. Una vez que lo hayas encontrado, selecciónalo. Ahí verás varias opciones, incluyendo "Iniciar sesión" y "Registrarse". Haz clic en "Iniciar sesión" y luego sigue las instrucciones para ingresar tu nombre de usuario y contraseña. Si aún no tienes una cuenta, puedes hacer clic en "Registrarse" para crear una nueva. Para registrarte, simplemente sigue los pasos que se te indican, como ingresar tu dirección de correo electrónico, crear una contraseña segura y completar cualquier otra información requerida. Una vez que hayas completado el proceso de registro, ¡estarás listo para empezar a disfrutar de todas las ventajas de tener una cuenta en nuestro sitio!' },
  { question: '¿Por qué no puedo comentar?', answer: 'Para poder comentar en nuestro blog, primero necesitas iniciar sesión o registrarte. Esto nos ayuda a mantener un entorno seguro y personalizado para todos nuestros usuarios. Simplemente busca el icono con tres rayas horizontales en la esquina superior derecha de la pantalla y selecciona "Iniciar sesión" si ya tienes una cuenta, o "Registrarse" si aún no la tienes. Una vez que hayas' + ' hecho esto, podrás dejar tus comentarios y participar en la conversación. ¡Esperamos tus comentarios!' },
  { question: '¿Cómo puedo contactar a Motorsport?', answer: 'Para ponerte en contacto con Motorsport, puedes enviar un correo electrónico a motorsport@gmail.com o llamar al nuestro número de teléfono: +52 55 1234 5678 y nosotros nos pondremos en contacto con usted.' },
]);

  
  // Índice de la pregunta activa (inicialmente ninguna)
  const activeIndex = ref<number | null>(null);
  
  // Método para cambiar la pregunta activa cuando se hace clic en ella
  const toggleAnswer = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };
  </script>
  
  <style scoped>
  .faq-container {
    background-color: #8c8484;
  }
  
  .faq-conteiner-secondary {
    padding: 2rem;
  }
  
  .faq-title {
    font-family: fantasy;
    color: white;
    text-align: center;
    font-size: 3em;
    margin-bottom: 2rem;
  }
  
  .faq-list {
    list-style-type: none;
    padding: 0;
  }
  
  .faq-item {
    margin-bottom: 2rem;
  }
  
  .faq-card {
    background-color: #ffffff; 
    border-radius: 10px; 
    padding: 1rem; 
    cursor: pointer; 
    transition: background-color 0.3s ease;
  }
  
  .faq-card.active {
    background-color: #f0f0f0;
  }
  
  .faq-question {
    text-align: center;
    color: #8c8484; 
    font-size: 1.5em;
    margin-bottom: 0.5rem;
  }
  
  .faq-answer {
    margin-top: 10px;
    text-align: justify;
    font-size: 1.2em;
    display: none; 
  }
  
  .faq-card.active .faq-answer {
    display: block; 
  }
  
  .divider-content {
    border: 0;
    border-top: 5px solid rgba(105, 105, 105, 0.212);
    margin: 1rem 0rem;
    opacity: 1;
    color: #8c8484;
  }
  </style>
  