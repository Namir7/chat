<template>
  <aside class="flex flex-col pt-4 bg-gray-100">
    <search />
    <subjects-header />
    <dialogs-block class="flex-grow" />

    <a class="flex justify-center py-4 bg-blue-500" href="#">
      <img class="w-8 mr-5" src="../../assets/img/question.svg" alt="" />
      <p class="self-center font-bold text-white">Support chat</p>
    </a>
  </aside>
</template>

<script lang="ts">
import Search from "./components/Search.vue";
import SubjectsHeader from "./components/SubjectsHeader.vue";
import DialogsBlock from "./components/DialogsBlock.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogsSideBar",
  components: {
    Search,
    SubjectsHeader,
    DialogsBlock,
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
aside {
  /* grid-template: ; */
}
</style>
