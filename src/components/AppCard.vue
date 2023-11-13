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
    <img v-if="item.poster_path !== null" :src="imgSrc" alt="item poster">
    <h3 v-if="item.title">
        {{ item.title }}
    </h3>
    <h3 v-else>
        {{ item.name }}
    </h3>
    <p v-if="item.original_title">
        {{ item.original_title }}
    </p>
    <p v-else>
        {{ item.original_name }}
    </p>
    <img class="flag" v-if="srcFlag" :src="srcFlag" alt="flag">
    <p v-else>
        {{ item.original_language }}
    </p>
    <div class="stars">
        <font-awesome-icon v-for="star in Math.round(vote_stars)" icon="fa-solid fa-star" />
        <p>
            {{ vote_stars }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.flag {
    height: 30px;
    aspect-ratio: 1;
}

.stars {
    display: flex;
    gap: 3.5px;
    color: yellow;

    p {
        color: black;
    }
}
</style>