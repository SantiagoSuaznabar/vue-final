<script setup>
import { ref, onMounted, computed } from 'vue';
import { getAssets, createAsset, deleteAsset } from '@/services/assetService';

const props = defineProps({
    id: String
});

const items = ref([]);
const coin = ref('');
const symbol = ref('');
const amount = ref(0);
const purchasePrice = ref(0);
const type = ref('Coin');

const textToSearch = ref('');
const typeFilter = ref('');

const load = async () => {
    const res = await getAssets(props.id);
    items.value = res.data;
};

const save = async () => {
    await createAsset({
        portfolioId: parseInt(props.id),
        coin: coin.value,
        symbol: symbol.value,
        amount: amount.value,
        purchasePrice: purchasePrice.value,
        type: type.value,
        date: new Date().toISOString().split('T')[0]
    });
    coin.value = '';
    symbol.value = '';
    amount.value = 0;
    purchasePrice.value = 0;
    await load();
};

const remove = async (id) => {
    if (confirm("¿Eliminar este activo?")) {
        await deleteAsset(id);
        await load();
    }
};

const filteredItems = computed(() => {
    return items.value.filter(item => {
        const matchesSearch = item.coin.toLowerCase().includes(textToSearch.value.toLowerCase()) || 
                             item.symbol.toLowerCase().includes(textToSearch.value.toLowerCase());
        const matchesFilter = typeFilter.value === '' || item.type === typeFilter.value;
        return matchesSearch && matchesFilter;
    });
});

onMounted(() => {
    load();
});
</script>

<template>
    <div class="container">
        <h2 class="mt-4">Detalle del Portafolio #{{ id }}</h2>

        <div class="card mt-4 p-3">
            <h4>Añadir nuevo activo</h4>
            <form @submit.prevent="save">
                <div class="row g-3">
                    <div class="col-md-3">
                        <input v-model="coin" type="text" placeholder="Moneda (ej. Bitcoin)" class="form-control" required>
                    </div>
                    <div class="col-md-2">
                        <input v-model="symbol" type="text" placeholder="Símbolo (BTC)" class="form-control" required>
                    </div>
                    <div class="col-md-2">
                        <input v-model="amount" type="number" step="any" placeholder="Cantidad" class="form-control" required>
                    </div>
                    <div class="col-md-2">
                        <input v-model="purchasePrice" type="number" step="any" placeholder="Precio Compra" class="form-control" required>
                    </div>
                    <div class="col-md-2">
                        <select v-model="type" class="form-select">
                            <option value="Coin">Coin</option>
                            <option value="Token">Token</option>
                            <option value="Stablecoin">Stablecoin</option>
                        </select>
                    </div>
                    <div class="col-md-1">
                        <button type="submit" class="btn btn-success w-100">Add</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="row mt-4">
            <div class="col-md-8">
                <input v-model="textToSearch" type="text" placeholder="Buscador por nombre o símbolo..." class="form-control">
            </div>
            <div class="col-md-4">
                <select v-model="typeFilter" class="form-select">
                    <option value="">Todos los tipos</option>
                    <option value="Coin">Coin</option>
                    <option value="Token">Token</option>
                    <option value="Stablecoin">Stablecoin</option>
                </select>
            </div>
        </div>

        <table class="table mt-4 text-center">
            <thead class="table-dark">
                <tr>
                    <th>Moneda</th>
                    <th>Símbolo</th>
                    <th>Cantidad</th>
                    <th>Precio de Compra</th>
                    <th>Tipo</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredItems" :key="item.id">
                    <td>{{ item.coin }}</td>
                    <td><strong>{{ item.symbol }}</strong></td>
                    <td>{{ item.amount }}</td>
                    <td>${{ item.purchasePrice }}</td>
                    <td><span class="badge bg-secondary">{{ item.type }}</span></td>
                    <td>{{ item.date }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="remove(item.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="filteredItems.length === 0" class="text-center mt-3">
            <p>No se encontraron activos con esos criterios.</p>
        </div>
    </div>
</template>