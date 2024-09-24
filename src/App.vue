<script setup>

import Header from "./components/Header.vue";
import TreeList from "./components/TreeList.vue";
import Drawer from "./components/Drawer.vue";
import { onMounted, watch } from "vue";
import axios from 'axios';
import { ref } from "vue";

const items = ref([])
const sortBy = ref("")




watch(sortBy, async () => {


  try {
    const data = await axios.get(`http://localhost:8080/trees/?sortBy=${sortBy.value}`)
    items.value = data.data
    console.log(data);
  } catch (error) {
    alert(error)
  }


})

onMounted(async () => {
  try {
    const data = await axios.get('http://localhost:8080/trees')
    items.value = data.data
    console.log(data);

  } catch (error) {
    alert(error)
  }
}
)

const onClickSortBy = (event) => {
  sortBy.value = event.target.value
}



// const items = [
//   {
//     id: 21313,
//     img: "/src/assets/lipa.png",
//     title: "Липа Целительная",
//     price: 100,
//     isFavorite: true,
//     isAdded: true,
//     onClickFavorite: () => { },
//     onClickAdd: () => { }
//   },
//   {
//     id: 21313,
//     img: "/src/assets/pine.png",
//     title: "Липа Целительная",
//     price: 100,
//     isFavorite: true,
//     isAdded: true,
//     onClickFavorite: () => { },
//     onClickAdd: () => { }
//   },
//   {
//     id: 21313,
//     img: "/src/assets/pine.png",
//     title: "Липа Целительная",
//     price: 100,
//     isFavorite: true,
//     isAdded: true,
//     onClickFavorite: () => { },
//     onClickAdd: () => { }
//   },
//   {
//     id: 21313,
//     img: "/src/assets/pine.png",
//     title: "Липа Целительная",
//     price: 100,
//     isFavorite: true,
//     isAdded: true,
//     onClickFavorite: () => { },
//     onClickAdd: () => { }
//   },
//   {
//     id: 21313,
//     img: "/src/assets/pine.png",
//     title: "Липа Целительная",
//     price: 100,
//     isFavorite: true,
//     isAdded: true,
//     onClickFavorite: () => { },
//     onClickAdd: () => { }
//   }
// ]


</script>

<template>


  <div class="m-auto w-4/5  bg-white  my-4 rounded-xl shadow-xl p-5">

    <!-- <Drawer /> -->

    <Header />

    <div class="flex justify-between mt-5">


      <h1 class="text-3xl font-bold text-green-950">HELO gorik0</h1>
      <div class="flex  gap-10 justify-between pr-5 items-center">

        <select @click="onClickSortBy" name="Вариант прочищения"
          class="outline-none border-2 w-fit border-slate-300 rounded-xl p-2">






          <option value="title">title</option>
          <option value="price">price</option>
          <option value="id">id</option>
          <option value="img">img</option>
        </select>
        <input type="text" class=" outline-none border-2 w-fit border-slate-300 rounded-xl p-2 w-1/4"
          placeholder="Поиск">

      </div>

    </div>


    <div>

      <div class="flex w-3/4 m-auto justify-center ">



        <TreeList :items="items" />
      </div>
    </div>
  </div>



</template>


<style>
body {
  background-color: #9cba82;
}
</style>
