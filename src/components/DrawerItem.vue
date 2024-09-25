<script setup>

import { defineProps, inject } from "vue";
defineProps({
    item: Object
})


const { onClickAdd } = inject('onClickAdd');

</script>

<template>



    <div>
        <img @click="onClickAdd(item)" src=" ../assets/axe.png"
            class="bg-rose-100 transition rounded-2xl hover:bg-rose-600 hover:-translate-y-1 absolute w-8 right-3 t-0"
            alt="">
        <div class="h-2"></div>
        <div class="  flex gap-5 items-center p-2 border-2 border-green-900 rounded-xl">
            <img :src="item.img" class="w-20" alt="">
            <div class=" gap-5 flex flex-col items-center ">
                <span class=" font-bold text-center">{{ item.title }}</span>
                <span class="text-2xl">{{ item.price }}</span>

            </div>
        </div>

    </div>
</template>