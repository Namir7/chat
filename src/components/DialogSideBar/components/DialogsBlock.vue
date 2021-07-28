<template>
  <div class="dialogs-block">
    <dialog-item v-for="dialog in dialogs" :key="dialog" />
  </div>
</template>

<script lang="ts">
import DialogItem from "./DialogItem.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogsBlock",
  components: {
    DialogItem,
  },
  setup() {
    const dialogs = [
      {
        memberName: "",
        pictureURL: "https://img-source.raw",
        lastMessage: "last message",
      },
      {
        memberName: "",
        pictureURL: "https://img-source.raw",
        lastMessage: "last message",
      },
      {
        memberName: "",
        pictureURL: "https://img-source.raw",
        lastMessage: "last message",
      },
    ];

    return {
      dialogs,
    };
  },
});
</script>

<style lang="scss" scoped></style>
