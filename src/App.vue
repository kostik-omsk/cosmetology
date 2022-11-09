<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import AppNavbar from './components/AppNavbar.vue';
  import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <header>
    <AppNavbar />
  </header>
  <main class="wrap">
    <RouterView />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style></style>
