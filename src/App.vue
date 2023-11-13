<script>
import { store } from './store';

import PageHeader from './components/PageHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';

export default {
  components: {
    PageHeader,
    AppMain,
  },
  data() {
    return {
      store,
      completeUrl: '',
    }
  }, mounted() {
    console.log(store.msg);

  }, methods: {
    readInputValue(searchValue) {

      // METODO BRUTTO
      this.completeMovieUrl = this.store.apiMovieUrl + '?api_key=' + this.store.apiKey + '&query=' + searchValue + '&language=it-IT'

      axios.get(this.completeMovieUrl)
        .then(res => {
          this.store.movies = res.data.results
        })


      // METODO BELLO
      axios.get(this.store.apiSerieUrl, {
        params: {
          api_key: this.store.apiKey,
          query: searchValue,
          language: 'it-IT'
        }
      })
        .then(res => {
          this.store.series = res.data.results
        })
    }
  }
}
</script>

<template>
  <PageHeader @search="readInputValue" />
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
