<template>
  <aside class="bg-gray-100">
    <search />
    <subjects-header />
    <dialogs-block />
    <div class="bg-blue-600">
      <img src="../../assets/img/question.svg" alt="" />
      <p class="text-white">Support chat</p>
    </div>
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
  data() {},
});
</script>

<style lang="scss" scoped></style>
