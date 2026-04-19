<script setup>
    import { isLogin } from '@/services/authService';
    import appMemory from '@/services/appMemory';

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">CRYPTO-TRACKER</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Inicio</router-link>
                    </li>
                    <li class="nav-item" v-if="isLogin()">
                        <router-link to="/portafolios" class="nav-link">Mis Portafolios</router-link>
                    </li>
                </ul>

                <div class="d-flex align-items-center">
                    <div v-if="isLogin()" class="text-light">
                        <span class="me-3">Hola, {{ appMemory.get('userName') }}</span>
                        <button class="btn btn-outline-danger btn-sm" @click="logout()">Salir</button>
                    </div>
                    <div v-else>
                        <router-link to="/login" class="btn btn-outline-success btn-sm me-2">Login</router-link>
                        <router-link to="/register" class="btn btn-success btn-sm">Registro</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-brand {
    font-weight: bold;
    color: #42b883 !important;
}
</style>