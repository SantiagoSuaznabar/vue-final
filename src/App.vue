<script setup lang="ts">
import Menu from './components/Menu.vue';
</script>

<template>
  <Menu></Menu>
  <main class="main-content">
    <router-view></router-view>
  </main>
</template>

<style>
.main-content {
  min-height: calc(100vh - 60px);
  padding: 2rem 1rem;
}
</style>