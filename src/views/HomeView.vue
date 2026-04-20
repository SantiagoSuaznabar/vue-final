<template>
  <div class="home-container">
    <div class="hero-section text-center">
      <h1 class="display-4 fw-bold">Bienvenido a Crypto Tracker</h1>
      <p class="lead mt-3 text-secondary">
        Gestiona tu portafolio de criptomonedas, controla tus activos y analiza tus inversiones de forma segura.
      </p>
      
      <div class="mt-5" v-if="!isLogin()">
        <router-link to="/register" class="btn btn-primary btn-lg me-3">Comenzar ahora</router-link>
        <router-link to="/login" class="btn btn-outline-secondary btn-lg">Iniciar Sesión</router-link>
      </div>
      <div class="mt-5" v-else>
        <router-link to="/portafolios" class="btn btn-primary btn-lg shadow">Ir a mis Portafolios</router-link>
      </div>
    </div>

    <div class="features-section row mt-5 text-center">
      <div class="col-md-4 mb-4">
        <div class="card p-4 h-100">
          <h4 class="mt-3">Multiples Portafolios</h4>
          <p class="text-muted">Separa tus inversiones a largo plazo de tus operaciones de trading diario.</p>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card p-4 h-100">
          <h4 class="mt-3">Filtros Avanzados</h4>
          <p class="text-muted">Encuentra rapidamente tus tokens, stablecoins o monedas principales.</p>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card p-4 h-100">
          <h4 class="mt-3">Privacidad Segura</h4>
          <p class="text-muted">Tus datos estan protegidos con autenticacion y tokens encriptados JWT.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { isLogin } from '@/services/authService';
</script>

<style scoped>
.home-container {
  max-width: 1000px;
  margin: 0 auto;
}

.hero-section {
  padding: 3rem 0;
}

.icon {
  font-size: 3.5rem;
}

.features-section .card {
  transition: transform 0.3s ease;
}

.features-section .card:hover {
  transform: translateY(-10px);
}
</style>