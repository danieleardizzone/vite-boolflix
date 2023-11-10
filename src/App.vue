<script>
import { store } from './store';

import PageHeader from './components/PageHeader.vue';
import Film from './components/Film.vue';

import axios from 'axios';

export default {
  components: {
    PageHeader,
    Film
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

      this.completeUrl = this.store.apiUrl + '?api_key=' + this.store.apiKey + '&query=' + searchValue + '&language=it-IT'

      searchValue = '';

      console.log(this.completeUrl)

      axios.get(this.completeUrl)
        .then(res => {
          this.store.films = res.data.results
        })
    }
  }
}
</script>

<template>
  <PageHeader @search="readInputValue" />
  <main>
    <div class="card" v-for="(film, index) in this.store.films" :key="index">
      <Film :film="film" />
    </div>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
