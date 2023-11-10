<script>
import { store } from '../store'

export default {
    props: {
        film: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <ul>
        <li>
            {{ film.title }}
        </li>
        <li>
            {{ film.original_title }}
        </li>
        <li>
            {{ film.original_language }}
        </li>
        <li>
            {{ film.vote_average }}
        </li>
    </ul>
</template>

<style scoped lang="scss"></style>