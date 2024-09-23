<script setup>

import Header from "./components/Header.vue";
import TreeList from "./components/TreeList.vue";
import Drawer from "./components/Drawer.vue";

</script>

<template>


  <div class="m-auto w-4/5  bg-white  my-4 rounded-xl shadow-xl p-5">

    <!-- <Drawer /> -->

    <Header />

    <div class="flex justify-between mt-5">


      <h1 class="text-3xl font-bold text-green-950">HELO gorik0</h1>
      <div class="flex  gap-10 justify-between pr-5 items-center">

        <select name="Вариант прочищения" class="outline-none border-2 w-fit border-slate-300 rounded-xl p-2">


          <option value="Вариант прочищения">Вариант прочищения</option>
          <option value="Вариант прочищения">Вариант прочищения</option>
          <option value="Вариант прочищения">Вариант прочищения</option>
        </select>
        <input type="text" class=" outline-none border-2 w-fit border-slate-300 rounded-xl p-2 w-1/4"
          placeholder="Поиск">

      </div>

    </div>


    <div>

      <div class="flex w-3/4 m-auto justify-center ">



        <TreeList />
      </div>
    </div>
  </div>



</template>


<style>
body {
  background-color: #9cba82;
}
</style>
