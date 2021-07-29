<template>
  <div class="grid custom-grid-columns-two-thirds h-full">
    <h1 class="hidden">Chat</h1>
    <dialogs-side-bar />
    <active-dialog />
  </div>
</template>

<script lang="ts">
import DialogsSideBar from "./DialogSideBar/DialogsSideBar.vue";
import ActiveDialog from "./ActiveDialog/ActiveDialog.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Chat",
  components: {
    DialogsSideBar,
    ActiveDialog,
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
