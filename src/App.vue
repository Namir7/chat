<template>
  <div class="container">
    <chat />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Chat from "./components/Chat.vue";

export default defineComponent({
  name: "App",
  components: {
    Chat,
  },
});
</script>

<style>
body {
  height: 100vh;

  padding-top: 80px;
  padding-left: 150px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100%;
}
</style>
