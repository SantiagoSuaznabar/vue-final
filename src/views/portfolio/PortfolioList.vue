<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import appMemory from '@/services/appMemory';
import { getPortfolios, createPortfolio, deletePortfolio } from '@/services/portfolioService';

const router = useRouter();
const items = ref([]);
const name = ref('');
const description = ref('');

const userId = appMemory.get('userId');

const load = async () => {
    const res = await getPortfolios(userId);
    items.value = res.data;
};

const save = async () => {
    await createPortfolio({
        userId: userId,
        name: name.value,
        description: description.value
    });
    name.value = '';
    description.value = '';
    await load();
};

const remove = async (id) => {
    if(confirm("¿Eliminar este portafolio?")) {
        await deletePortfolio(id);
        await load();
    }
};

const goDetail = (id) => {
    router.push(`/portafolio/${id}`);
};

onMounted(() => {
    load();
});
</script>

<template>
    <div class="container">
        <h2 class="mt-4">Mis Portafolios</h2>
        
        <form @submit.prevent="save" class="mb-4 mt-4">
            <div class="row">
                <div class="col-md-5">
                    <input v-model="name" type="text" placeholder="Nombre (ej. Inversión 2026)" required class="form-control">
                </div>
                <div class="col-md-5">
                    <input v-model="description" type="text" placeholder="Descripción" required class="form-control">
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-primary w-100">Crear</button>
                </div>
            </div>
        </form>

        <table class="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>
                        <button class="btn btn-info btn-sm me-2" @click="goDetail(item.id)">Ver Mercado</button>
                        <button class="btn btn-danger btn-sm" @click="remove(item.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.container {
    max-width: 900px;
    margin: auto;
}
.me-2 {
    margin-right: 10px;
}
</style>