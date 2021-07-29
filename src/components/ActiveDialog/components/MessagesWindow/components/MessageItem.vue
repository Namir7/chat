<template>
  <div class="message">
    {{ payload.message.text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessageItem",
  props: ["payload"],
  //   setup() {},
});
</script>
