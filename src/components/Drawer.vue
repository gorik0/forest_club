<script setup>


import DrawerList from "./DrawerList.vue";
import { ref } from "vue";
defineProps({

    onBackPress: Function,
    items: Array
})

const emit = defineEmits(['close'])
const isDisabled = ref(true)
</script>

<template>


    <div class="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-20"> </div>
    <div class=" flex flex-col fixed right-0 top-0 bg-white w-80 h-full z-30">
        <div class="flex gap-5 items-center p-5">
            <img @click="() => emit('close')" src="../assets/arrow.png"
                class="w-10 transition opacity-30 hover:-translate-x-1 hover:opacity-100 " alt="">

            <h1 class="text-2xl  uppercase font-bold ">Часовня</h1>


        </div>
        <div>
            <div class="m-5">
                <DrawerList :items="items" />
            </div>

        </div>

        <div class="flex-1"></div>
        <div class="mb-5 mx-5  ">
            <div class="mb-5 flex  gap-2  ">

                <span>ВСЕГО ДУШ</span>
                <div class="flex-1 border-b-2 border-dashed"></div>
                <span>10000</span>
            </div>

            <button :disabled="isDisabled"
                class="p-5 bg-green-600 disabled:bg-green-200 w-full rounded-xl hover:cursor-pointer active:bg-green-800">CLICK
                ME</button>

        </div>


    </div>
</template>