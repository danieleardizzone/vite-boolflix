<script>
import { store } from '../store';

export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            store
        }
    },
    computed: {
        srcFlag() {
            return this.store.flags[this.item.original_language]
        },
        imgSrc() {
            return this.store.apiImgUrl + this.item.poster_path
        },
        vote_stars() {
            return Math.round(this.item.vote_average) / 2
        }
    }
}
</script>

<template>
    <img class="card__poster" v-if="item.poster_path !== null" :src="imgSrc" alt="item poster">
    <div class="card__content" :class="item.poster_path !== null ? 'd-none' : ''">
        <div>
            <p class="bold">Titolo: </p>
            <p v-if="item.title">
                {{ item.title }}
            </p>
            <p v-else>
                {{ item.name }}
            </p>
        </div>

        <div>
            <p class="bold">Titolo originale: </p>
            <p v-if="item.title">
                {{ item.original_title }}
            </p>
            <p v-else>
                {{ item.original_name }}
            </p>
        </div>
        <div class="flag">
            <strong>Lingua originale: </strong>
            <img v-if="srcFlag" :src="srcFlag" alt="flag">
            <p v-else>
                {{ item.original_language }}
            </p>
        </div>
        <div class="stars">
            <strong>Voto: </strong>
            <font-awesome-icon v-for="star in Math.round(vote_stars)" icon="fa-solid fa-star" />
            <strong>{{ vote_stars }}</strong>
        </div>
        <!-- <p v-if="item.overview">
            <strong>Overview: </strong>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, porro!
            </span>
        </p> -->
    </div>
</template>

<style scoped lang="scss">
.flag {
    display: flex;
    gap: 3px;
    align-items: center;

    img {
        height: 30px;
        aspect-ratio: 1;
    }
}

.stars {
    display: flex;
    gap: 3.5px;
    color: yellow;
}

.card__content {
    color: white;
    background-color: black;
    flex-grow: 1;

    padding: 10px;

    font-weight: 300;
}

.bold,
strong {
    font-weight: 700;
}
</style>