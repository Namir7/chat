<template>
  <div class="send-message-panel bg-gray-50">
    <button>
      <img src="../../../assets/img/clip.svg" alt="attach files" />
    </button>

    <input type="text" placeholder="write message..." />

    <button>
      <img src="../../../assets/img/arrow.svg" alt="attach files" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SandMessagePanel",
  methods: {
    handleAttachClick() {
      console.log("attached");
    },
    handleSendClick() {
      console.log("send");
    },
  },
});
</script>
