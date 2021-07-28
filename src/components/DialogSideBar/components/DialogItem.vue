<template>
  <div class="dialog-item">
    <img src="" alt="" />
    <div class="">
      <p class="person-name">Iulius Cezar</p>
      <p class="last-message">Iulius: So why Carthage was...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogItem",
  props: ["payload"],
});
</script>

<style lang="scss" scoped></style>
