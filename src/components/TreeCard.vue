<script setup>
import { inject } from 'vue';


const props = defineProps({

    id: Number,
    imga: String,
    isAdded: Boolean,
    isFavorite: Boolean,
    title: String,
    price: Number,

    onClickAdd: Function


});
const inj = inject('onClickFavorite');

const onClickFavorite = () => {
    const item = {
        id: props.id,
        isFavorite: !props.isFavorite
    }

    inj(item)
}


</script>


<template>


    <div class=" relative m-10 transition hover:-translate-y-1 hover:scale-105">

        <img @click="onClickFavorite" src="../assets/palm4.png" :class="{ 'opacity-30': !isFavorite }"
            class="`absolute left-1  bg-lime-300 rounded-xl w-8 `" alt="palm">
        <img :src="imga" class="mx-20 w-40" alt="sds">

        <p class="mt-10 mb-2 text-xl">{{ title }}</p>
        <div class="flex justify-between  items-center">

            <div class="flex flex-col items-center">
                <span class="text-slate-500">Души</span>
                <b>{{ price }}</b>
            </div>
            <div>
                <img src="../assets/plus.png" class="w-8" alt="">
            </div>

        </div>

    </div>
</template>