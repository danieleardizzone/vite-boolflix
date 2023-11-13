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
        <div class="landing-page" v-if="!this.store.movies.length && !this.store.series.length">
            <h2>CERCA UN FILM O UNA SERIE</h2>
        </div>
        <div v-else>
            <h2>FILM</h2>
            <div class="grid movies">
                <div class="card" v-for="(movie, index) in this.store.movies" :key="index">
                    <AppCard :item="movie" />
                </div>
                <div v-if="!this.store.movies.length">
                    Non ci sono film da mostrare
                </div>
            </div>
            <h2>SERIE TV</h2>
            <div class="grid series">
                <div class="card" v-for="(serie, index) in this.store.series" :key="index">
                    <AppCard :item="serie" />
                </div>
                <div v-if="!this.store.series.length">
                    Non ci sono film da mostrare
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

.landing-page {
    text-align: center;
}

.card {
    display: flex;
    border: 1px solid white;
}

h2 {
    font-weight: 700;
    font-size: 48px;
    font-family: 'Lilita One', sans-serif;
    padding: 20px 0 0 10px;
}

.grid {
    &.movies {
        padding: 0 10px;
    }

    &.series {
        padding: 0 10px 50px 10px;
    }
}
</style>