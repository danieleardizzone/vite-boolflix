<script>
export default {
    data() {
        return {
            searchValue: '',
        }
    }
}
</script>

<template>
    <header class="page-header debu">
        <div class="container">
            <div class="logo">
                <h1>Boolflix</h1>
            </div>
            <div class="searchbar">
                <input type="text" placeholder="Cerca un film o una serie" v-model.trim="searchValue">
                <button @click="$emit('search', searchValue)">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.page-header {
    background-color: black;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px;
}

.logo {
    color: red;
}

.searchbar {
    display: flex;
    gap: 5px;
}
</style>