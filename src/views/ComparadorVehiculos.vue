<template>
    <div class="background">
      <NavBarComponent />
      <div class="comparador-container">
        <h1>Comparador de Vehículos</h1>
        <div class="selector">
          <h2>Selecciona los vehículos a comparar:</h2>
          <div class="vehicle-options">
            <div
              class="vehicle-option"
              v-for="vehicle in vehicles"
              :key="vehicle.name"
              :class="{ 'selected': isSelected(vehicle) }"
            >
              <img
                :src="getVehicleImage(vehicle.photo)"
                :alt="'Foto del ' + vehicle.name"
                class="vehicle-image"
              />
              <p :class="{ 'vehicle-name': true, 'selected-name': isSelected(vehicle) }">{{ vehicle.name }}</p>
              <button @click="selectVehicle(vehicle)" :disabled="isDisabled(vehicle)" class="select-button">Seleccionar</button>
            </div>
          </div>
          <div class="button-group">
            <button @click="comparar" :disabled="selectedVehicles.length < 2" class="compare-button">Comparar</button>
            <button @click="resetSelection" class="reset-button">Reelegir</button>
          </div>
        </div>
        <div v-if="comparando" class="comparacion">
          <h2>Resultados de la comparación:</h2>
          <div class="card-container">
            <div class="card" v-for="vehicle in selectedVehicles" :key="vehicle.name">
              <div class="card-content">
                <h3>{{ vehicle.name }}</h3>
                <img :src="getVehicleImage(vehicle.photo)" :alt="'Foto del ' + vehicle.name" class="vehicle-image" />
                <p>Precio: {{ vehicle.price }}</p>
                <p>Marca: {{ vehicle.brand }}</p>
                <p>Año: {{ vehicle.year }}</p>
                <p>Tipo de Combustible: {{ vehicle.fuelType }}</p>
                <p>Kilometraje: {{ vehicle.mileage }}</p>
                <p>Pasajeros: {{ vehicle.passengers }}</p>
                <button class="select-button" @click="openLink(vehicle.link)">Página oficial</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="mensaje">Selecciona dos vehículos y haz clic en "Comparar".</p>
        </div>
      </div>
      <FooterComponent />  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import NavBarComponent from '../components/shared/NavBarComponent.vue';
  import FooterComponent from '../components/shared/FooterComponent.vue';
  
  const vehicles = ref([
  { 
    name: 'Toyota Camry', 
    price: 25000, 
    brand: 'Toyota', 
    link: 'https://www.toyota.com/camry/', 
    year: 2022,
    fuelType: 'Gasolina',
    mileage: '15,000 km',
    passengers: 5,
    photo: 'ToyotaCamry2022.jpg', 
  },
  { 
    name: 'Honda Accord', 
    price: 30000, 
    brand: 'Honda', 
    link: 'https://www.honda.com/accord/',
    year: 2021,
    fuelType: 'Híbrido',
    mileage: '12,000 km',
    passengers: 5,
    photo: 'HondaAccord2021.jpg', 
  },
  { 
    name: 'BMW Serie 3', 
    price: 28000, 
    brand: 'BMW', 
    link: 'https://www.bmw.com/en/3-series/', // Enlace oficial de BMW Serie 3
    year: 2023,
    fuelType: 'Diesel',
    mileage: '18,000 km',
    passengers: 5,
    photo: 'BMWSerie32023.jpg', 
  },
  { 
    name: 'Mercedes-Benz Clase C', 
    price: 27000, 
    brand: 'Mercedes-Benz', 
    link: 'https://www.mercedes-benz.com/c-class/', // Enlace oficial de Mercedes-Benz Clase C
    year: 2022,
    fuelType: 'Gasolina',
    mileage: '14,500 km',
    passengers: 5,
    photo: 'MercedezBenzClaseC2023.jpg', 
  },
]);

  
  const selectedVehicles = ref([]);
  const comparando = ref(false);
  
  const selectVehicle = (vehicle) => {
    if (selectedVehicles.value.length < 2 && !selectedVehicles.value.includes(vehicle)) {
      selectedVehicles.value.push(vehicle);
    }
  };
  
  const comparar = () => {
    comparando.value = true;
  };
  
  const resetSelection = () => {
    selectedVehicles.value = [];
    comparando.value = false;
  };
  
  const openLink = (link) => {
    window.open(link, '_blank');
  };
  
  const getVehicleImage = (photo) => {
    return new URL(`../assets/img/${photo}`, import.meta.url).href;
  };
  
  const isSelected = (vehicle) => {
    return selectedVehicles.value.includes(vehicle);
  };
  
  const isDisabled = (vehicle) => {
    return selectedVehicles.value.length === 2 || isSelected(vehicle);
  };
  </script>
  
  <style scoped>
  h1 {
  text-align: center;
  font-size: 3em;
  font-family: fantasy;
  color: white;
}

h2 {
  color: white;
}
  .background {
    background-color: #8c8484;
  }
  
  .comparador-container {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .selector {
    margin-bottom: 20px;
  }
  
  .vehicle-options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .vehicle-option {
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .vehicle-option:hover {
    transform: translateY(-5px);
  }
  
  .vehicle-option.selected {
    background-color: #007bff;
    color: white;
  }
  
  .vehicle-image {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }
  
  .vehicle-name {
    margin-top: 5px;
  }
  
  .selected-name {
    background-color: #007bff;
    color: white;
  }
  
  .card-container {
    display: flex;
    justify-content: space-between;
  }
  
  .card {
    background-color: white;
    width: 48%;
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-content {
    padding: 20px;
  }
  .card-content img {
    width: 200px;
    height: 150px;
}
  
  .mensaje {
    font-style: italic;
    color: #ffffff;
  }
  
  .button-link {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;
  }
  
  .button-group {
    margin-top: 20px;
  }
  
  .button-group button {
    margin: 0 10px;
  }
  
  .select-button,
  .compare-button,
  .reset-button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .select-button:hover,
  .compare-button:hover,
  .reset-button:hover {
    background-color: #0056b3;
  }
  
  .footer {
    background-color: #8c8484;
    padding: 20px;
  }
  </style>
  