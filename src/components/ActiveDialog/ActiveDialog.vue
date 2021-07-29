<template>
  <div class="flex flex-col">
    <active-dialog-header />
    <messages-window class="flex-grow"/>
    <send-message-panel />
  </div>
</template>

<script lang="ts">
import ActiveDialogHeader from "./components/ActiveDialogHeader.vue";
import MessagesWindow from "./components/MessagesWindow/MessagesWindow.vue";
import SendMessagePanel from "./components/SendMessagePanel.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ActiveDialogTab",
  components: {
    ActiveDialogHeader,
    MessagesWindow,
    SendMessagePanel,
  },
  data() {
    return {};
  },
});
</script>
