import { reactive } from 'vue';

export const store = reactive({
    msg: 'Hello World',
    apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSerieUrl: 'https://api.themoviedb.org/3/search/tv',
    apiKey: 'c29f090b98191910d384964609ebf012',

    movies: [],
    series: [],

    flags: {
        it: 'italy.png',
        fr: 'france.png',
        de: 'germany.png',
        es: 'spain.png',
        en: 'united-kingdom.png',
    }
})