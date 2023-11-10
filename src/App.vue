<script>
import { store } from './store';

export default {
  data() {
    return {
      store
    }
  }, mounted() {
    console.log(store.msg)
  }
}
</script>

<template></template>

<style scoped></style>
