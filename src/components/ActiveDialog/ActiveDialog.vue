<template>
  <div class="active-dialog">
    <active-dialog-header />
  </div>
</template>

<script lang="ts">
import ActiveDialogHeader from "./components/ActiveDialogHeader.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ActiveDialogTab",
  components: {
    ActiveDialogHeader,
  },
  data() {
    return {};
  },
});
</script>
