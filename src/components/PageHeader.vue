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
                <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="logo">
            </div>
            <div class="searchbar">
                <input type="text" placeholder="Cerca un film o una serie" v-model.trim="searchValue"
                    @keyup.enter="$emit('search', searchValue)">
                <button @click="$emit('search', searchValue)">
                    Cerca
                </button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.page-header {
    background-color: black;
    padding: 10px 0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px;
}

.logo img {
    height: 50px;
}

.searchbar {
    display: flex;
    gap: 15px;

    input {
        color: white;
        font-size: 18px;
        border-bottom: 1px solid white;
        padding: 2px 5px;
    }

    button {
        color: white;
        font-size: 18px;
        border: 1px solid white;
        padding: 5px 10px;
        border-radius: 15px;

        &:hover {
            background-color: white;
            color: black;
        }
    }
}
</style>