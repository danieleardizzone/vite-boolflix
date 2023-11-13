<script>
import { store } from '../store';

import AppCard from './AppCard.vue'

export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Film</h2>
        <div class="grid">
            <div class="card" v-for="(movie, index) in this.store.movies" :key="index">
                <AppCard :item="movie" />
            </div>
            <div v-if="!this.store.movies.length">
                Non ci sono film da mostrare
            </div>
        </div>
        <h2>Serie TV</h2>
        <div class="grid">
            <div class="card" v-for="(serie, index) in this.store.series" :key="index">
                <AppCard :item="serie" />
            </div>
            <div v-if="!this.store.series.length">
                Non ci sono film da mostrare
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    background-color: white;
    padding: 20px;
}
</style>