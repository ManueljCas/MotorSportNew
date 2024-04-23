<template>
  <div id="app">
    <router-view />  <!--nos permitira movernos de ruta a ruata -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
min-height: 100vh;
overflow-x: hidden; /* Evita el desbordamiento horizontal si es que hay */
}
</style>