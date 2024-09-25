    <script setup>
    import { inject, ref } from "vue";

    import TreeCard from "./TreeCard.vue";

    defineProps({
        items: Array
    })


    const { onClickAdd: onClickAddInjected } = inject('onClickAdd');




</script>

<template>



    <div class="grid grid-flow-row grid-cols-2 auto-cols-min  ">

        <TreeCard v-for="item in items" :key=item.id :imga="item.img" :price="item.price" :title="item.title"
            :onClickFavorite="item.onClickFavorite" :onClickAdd="() => onClickAddInjected(item)" :isAdded="item.isAdded"
            :isFavorite="item.isFavorite" :id="item.id" />


    </div>
</template>