<template>
  <ul class="dialogs-block">
    <!-- FIX: dialog data gets from  Rocket.Chat -->
    <li v-for="dialog in dialogs" :key="dialog">
      <dialog-item
        :payload="{ dialog }"
        :class="activeDialog._id === dialog._id ? activeDialog.class : ''"
      />
    </li>
  </ul>
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
        _id: 12234,
        memberName: "Ivan Ivanovich",
        pictureURL:
          "https://upload.wikimedia.org/wikipedia/commons/f/fc/Jules_cesar.jpg",
        lastMessage: "Anyone: Nice",
      },
      {
        _id: 1238,
        memberName: "Kurt Cobain",
        pictureURL:
          "https://upload.wikimedia.org/wikipedia/commons/5/57/Kurt_Cobain_1991_cropped.jpg",
        lastMessage: "Kurt: So why Carthage was...",
      },
      {
        _id: 3344,
        memberName: "Iulius Avreliy",
        pictureURL:
          "https://img.discogs.com/g0Lizdl6LomNp1hUu-_JxEtOKe4=/fit-in/600x589/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5909969-1424367459-5803.jpeg.jpg",
        lastMessage: "Iulius: another message",
      },
    ];

    const activeDialog = {
      _id: 0,
      class: "bg-blue-100",
    };

    return {
      dialogs,
      activeDialog,
    };
  },
});
</script>

<style lang="scss" scoped></style>
