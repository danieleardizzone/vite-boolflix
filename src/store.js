import { reactive } from 'vue';

export const store = reactive({
    msg: 'Hello World',
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'c29f090b98191910d384964609ebf012',

    films: [],
})