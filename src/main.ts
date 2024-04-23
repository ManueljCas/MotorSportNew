// main.ts

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/base.css'; // Agrega esta línea para importar tus estilos globales
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhone, faEnvelope, faFacebookF, faInstagram, faWhatsapp);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');