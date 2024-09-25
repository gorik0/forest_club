<script setup>



import DrawerItem from "./DrawerItem.vue"


defineProps({
    items: Array
});



</script>



<template>



    <DrawerItem v-for="item in items.filter(item => item.isAdded)" :key="item.id" :item="item" />
</template>