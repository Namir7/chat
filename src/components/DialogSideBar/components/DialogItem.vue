<template>
  <div class="flex pl-4 py-2">
    <img class="w-14 h-14 mr-3 rounded-full" :src="payload.dialog.pictureURL" />
    <div class="">
      <p class="mb-1 font-bold text-left">{{ payload.dialog.memberName }}</p>
      <p class="last-message text-left text-sm">
        {{ payload.dialog.lastMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogItem",
  props: ["payload"],
  setup() {
    const activeDialog = {
      class: "bg-blue-300",
    };
    return {
      activeDialog,
    };
  },
});
</script>

<style lang="scss" scoped></style>
