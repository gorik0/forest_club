<script setup>

import Header from "./components/Header.vue";
import TreeList from "./components/TreeList.vue";
import { onMounted, reactive, watch } from "vue";
import axios from 'axios';
import { ref } from "vue";

const items = ref([])
const favorites = ref([])

const filter = reactive({
  queryIn: "",
  sortBy: ""
})


const fetchFavorties = async () => {
  try {
    const data = await axios.get(`http://localhost:8080/trees/favorites`);
    favorites.value = data.data;
    console.log(data);
  } catch (error) {
    alert(error);
  }
}

const onChangeQueryIn = (event) => {
  filter.queryIn = event.target.value
}

const onClickSortBy = (event) => {
  filter.sortBy = event.target.value
}




const fetchTrees = async () => {
  console.log(typeof (filter.sortBy));
  const params = {
    sortBy: filter.sortBy,
  };
  if (filter.queryIn) {
    params.queryIn = filter.queryIn;
  }
  try {
    const data = await axios.get(`http://localhost:8080/trees`, { params });
    items.value = data.data;
    console.log(data);
  } catch (error) {
    alert(error);
  }
  console.log("Starting fetchuing favorites");



  fetchFavorties().then(() => {
    mergeFavoritesWithTrees()
  })


  console.log("Finished fetchuing favorites");
  console.log(favorites.value);
};


const mergeFavoritesWithTrees = () => {
  items.value.forEach(item => {
    item.isFavorite = favorites.value.some(favorite => favorite.parent_id === item.id)
  })
  console.log("merged");

  console.log(items.value);

}
watch(filter, fetchTrees);
onMounted(fetchTrees);
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
        <input @input="onChangeQueryIn" type="text"
          class=" outline-none border-2 w-fit border-slate-300 rounded-xl p-2 w-1/4" placeholder="Поиск">

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
