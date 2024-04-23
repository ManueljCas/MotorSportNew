<template>
  <div class="home">
    <NavBarComponent />
    <h1 class="title">Automóviles</h1>
    <section class="blog-cards-container">
      
      <div class="blog-card" v-for="card in cards" :key="card.id" @click="openModal(card)">
        <img :src="card.image" :alt="card.title" class="blog-card-image">
        <div class="blog-card-content">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <button @click.stop="toggleLike(card)">Like {{ card.likes }}</button>
        </div>
      </div>
    </section>
    <FooterComponent />
    <div v-if="modalActive" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <img :src="modalImage" alt="Modal Image" class="modal-image">
        <div class="modal-body">
          <h2 class="modal-title">{{ modalTitle }}</h2>
          <p class="modal-description">{{ modalDescription }}</p>
          <div v-if="user" class="comment-input-area">
            <textarea v-model="newComment" placeholder="Escribe un comentario..."></textarea>
            <button @click="addComment" class="comment-button">Comentar</button>

          </div>

          <div v-else>
            <p>Debes iniciar sesión para comentar.</p>
          </div>
          <div class="comments-section">
            <div v-for="comment in currentComments" :key="comment.id" class="comment">
              <span class="comment-author">{{ comment.author }}:</span>
              <span class="comment-content">{{ comment.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="new-post-button" @click="showNewPostModal">+</button>
    <!-- Modal for new post -->
    <div v-if="newPostModal" class="modal-overlay" @click.self="closeNewPostModal">
  <div class="modal">
    <div class="modal-header">
      <h2>Agregar Nueva Publicación</h2>
      <button @click="closeNewPostModal" class="close-btn">×</button>
    </div>
    <div class="modal-body">
      <input type="text" v-model="newCard.title" placeholder="Título" />
      <textarea v-model="newCard.description" placeholder="Descripción"></textarea>
      <input type="file" @change="handleFileUpload">
    </div>
    <div class="modal-footer">
      <button @click="addNewPost" class="submit-btn">Agregar Publicación</button>
    </div>
  </div>
</div>

  </div>
 

</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, query, getDocs, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../services/firebase/firebaseConfig';
import NavBarComponent from '@/components/shared/NavBarComponent.vue';
import FooterComponent from '@/components/shared/FooterComponent.vue';
import JeepGladiatorImage from '@/assets/img/blog/JeepGladiator.jpeg';
import skyline from '@/assets/img/blog/skyline.jpeg';
import camaro from '@/assets/img/blog/camaro.jpg';
import camaro2 from '@/assets/img/blog/camaro2.jpg';

const cards = reactive([
        { id: 1, title: 'Jeep Gladiator 6x6', description: 'Las motorizaciones actuales son una versión turbodiésel V6 3.0L que rinde unos 623Nm de par motor, un motor HEMI 392 de 505CV y el todopoderoso HEMI 6.2 Supercharged Hellcat de 800CV. Toda esa potencia se entrega a las 4 o 6 ruedas', image: JeepGladiatorImage,likes: 0 },
        { id: 2, title: 'Mustang GT Premium', description: 'El Mustang GT Premium es un icono de potencia y estilo de Ford. Con un motor V8 de alto rendimiento, ofrece una experiencia de conducción emocionante y un interior lujoso con características premium, fusionando el legado del Mustang con la modernidad.', image: camaro,likes: 0  },
        { id: 3, title: 'Ford Mustang', description: 'El Ford Mustang es un legendario automóvil deportivo estadounidense, reconocido por su diseño clásico y su potente rendimiento. Desde su debut en 1964, ha sido un ícono cultural y un símbolo de libertad y estilo.', image: camaro2,likes: 0  },
        { id: 4, title: 'Skyline R34', description: 'El R34 Skyline, un legendario automóvil deportivo japonés fabricado por Nissan, destaca por su diseño aerodinámico y su potente motor turbocharged. Es famoso por su rendimiento excepcional y su estatus icónico en la cultura automotriz.', image: skyline,likes: 0  },
]);

const modalActive = ref(false);
const modalTitle = ref('');
const modalDescription = ref('');
const modalImage = ref('');
const modalCardId = ref(null);
const newComment = ref('');
const user = ref(null);
const currentComments = ref([]);
const newPostModal = ref(false);
const newCard = reactive({ title: '', description: '', image: null, likes: 0 });

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
});

const openModal = (card) => {
  modalTitle.value = card.title;
  modalDescription.value = card.description;
  modalImage.value = card.image;
  modalCardId.value = card.id;
  modalActive.value = true;
  fetchComments(card.id);
};

const toggleLike = (card) => {
  card.likes++;
};

const showNewPostModal = () => {
  newPostModal.value = true;
};

const closeNewPostModal = () => {
  newPostModal.value = false;
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  newCard.image = URL.createObjectURL(file);
};

const addNewPost = () => {
  const newId = cards.length + 1;
  cards.push({ ...newCard, id: newId, image: newCard.image });
  closeNewPostModal();
  newCard.title = '';
  newCard.description = '';
  newCard.image = null;
};

const addComment = async () => {
  if (!user.value || !newComment.value.trim()) return;
  try {
    await addDoc(collection(db, "posts", String(modalCardId.value), "comments"), {
      author: user.value.displayName || user.value.email,
      content: newComment.value,
      createdAt: serverTimestamp()
    });
    newComment.value = '';
    fetchComments(modalCardId.value);
  } catch (error) {
    console.error("Error adding comment: ", error);
  }
};

const fetchComments = async (cardId) => {
  const commentsQuery = query(collection(db, "posts", String(cardId), "comments"));
  const querySnapshot = await getDocs(commentsQuery);
  currentComments.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const closeModal = () => {
  modalActive.value = false;
  currentComments.value = [];
};
</script>


<style scoped>
.title {
  text-align: center;
  font-size: 3em;
  font-family: fantasy;
  color: white;
}
.blog-card button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    outline: none; /* Remover el contorno en foco para navegadores como Firefox */
}

.blog-card button:hover {
    background-color: #45a049;
}
</style>


<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    overflow: hidden;
}

.modal-header {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-body {
    padding: 1rem;
}

.modal-footer {
    padding: 1rem;
    border-top: 1px solid #ccc;
    text-align: right;
}

input[type="text"], textarea {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

input[type="file"] {
    display: block;
    margin: 1rem 0;
}

button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background-color: #45a049;
}

.close-btn {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.5rem;
}

.submit-btn {
    background-color: #007BFF;
    color: white;
}

.submit-btn:hover {
    background-color: #006BDD;
}
.home {
  background-color: #8c8484;
  position: relative;
}

.blog-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
}

.new-post-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.new-post-button:hover {
  background-color: #45a049;
}

.blog-card {
  width: 450px;
  margin: 1rem;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-card-content {
  padding: 1rem;
  background: white;
}

h3 {
  color: #333;
  margin: 0;
}

p {
  color: #555;
  font-size: 0.9rem;
  text-align: justify;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
}

.modal-body {
  padding: 20px;
}

.modal-title {
  margin-top: 0;
  /* Estilos para el título del modal */
}


.modal-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.comments-section {
  background: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  overflow-y: auto;
  /* Para el scroll */
  max-height: 50vh;
  /* Se ajusta a un máximo del 50% de la altura de la pantalla */
  min-height: 100px;
  /* Altura mínima para que no se vea muy pequeño al inicio */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment {
  border-bottom: 1px solid #e0e0e0;
  /* Línea divisora entre comentarios */
  padding: 0.5rem 0;
  display: flex;
  /* Acomoda autor y contenido en línea */
  align-items: flex-start;
  /* Alineación vertical al inicio para que se vea bien con múltiples líneas de texto */
  margin-bottom: 0.5rem;
  /* Espacio entre comentarios */
}

.comment:last-child {
  border-bottom: none;
  /* Evita la línea divisora en el último comentario */
}

.comment-author {
  font-weight: 600;
  /* Fuente en negrita para el autor */
  color: #333;
  /* Color más oscuro para destacar */
  margin-right: 0.5rem;
  /* Espacio entre autor y contenido */
  flex-shrink: 0;
  /* Evita que el nombre del autor se comprima */
}

.comment-content {
  color: #555;
  /* Color para el contenido */
  word-break: break-word;
  /* Asegura que el texto largo se divida correctamente */
  flex-grow: 1;
  /* Permite que el contenido ocupe el espacio restante */
}

.comment-input {
  width: calc(100% - 2rem);
  /* Calcula el ancho teniendo en cuenta el padding */
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  /* Espacio antes y después del input */
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  /* Tamaño de fuente adecuado para la entrada */
  box-sizing: border-box;
  /* Asegura que el padding no añada al ancho total */
}

.comment-input-area {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

textarea {
  width: 100%;
  /* Ocupa todo el ancho disponible */
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 50px;
  /* Altura mínima */
  box-sizing: border-box;
  /* Para incluir el padding y el borde en el ancho total */
}

.comment-button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.5rem;
  /* Espacio entre el textarea y el botón */
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.5rem;
  /* Margen superior para separar del input */
  margin-bottom: 1rem;
  /* Margen inferior para separar de los comentarios */
}

button:hover {
  background-color: #45a049;
  /* Oscurece el botón al pasar el mouse */
}


/* Asegúrate de que tu modal sea responsivo */
@media (max-width: 768px) {
  .modal {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .blog-cards-container {
    flex-direction: column;
    align-items: center;
  }

  .blog-card {
    width: 80%;
  }
}
</style>