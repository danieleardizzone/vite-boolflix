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
        }
    }
}
</script>

<template>
    <div v-if="item.title">
        <img v-if="item.poster_path !== null" :src="imgSrc" alt="item poster">
        <h3>
            {{ item.title }}
        </h3>
        <p>
            {{ item.original_title }}
        </p>
        <img class="flag" v-if="srcFlag" :src="srcFlag" alt="flag">
        <p v-else>
            {{ item.original_language }}
        </p>
        <p>
            {{ item.vote_average }}
        </p>
    </div>
    <div v-else>
        <img v-if="item.poster_path !== null" :src="imgSrc" alt="item poster">
        <h3>
            {{ item.name }}
        </h3>
        <p>
            {{ item.original_name }}
        </p>
        <img class="flag" v-if="srcFlag" :src="srcFlag" alt="flag">
        <p v-else>
            {{ item.original_language }}
        </p>
        <p>
            {{ item.vote_average }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.flag {
    height: 30px;
    aspect-ratio: 1;
}
</style>