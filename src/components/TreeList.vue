<script setup>
import { ref } from "vue";

import TreeCard from "./TreeCard.vue";

const onClickFavorite = () => {
    isFavorite.value = !isFavorite.value
    console.log("isFavorite", isFavorite.value);

}

const onClickAdd = () => {
    isAdded.value = !isAdded.value
    console.log("isAdded", isAdded.value);

}

const isAdded = ref(false)
const isFavorite = ref(false)

</script>

<template>



    <div class="grid grid-flow-row grid-cols-2 auto-cols-min  ">

        <TreeCard imga="/src/assets/lipa.png" :price="100" title="Липа Целительная" :onClickFavorite="onClickFavorite"
            :onClickAdd="onClickAdd" :isAdded="isAdded" :isFavorite="isFavorite" />


    </div>
</template>