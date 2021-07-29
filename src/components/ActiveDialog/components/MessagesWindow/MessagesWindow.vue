<template>
  <div class="">
    <message-item
      v-for="message in messages"
      :key="message.id"
      :payload="{ message }"
    />
  </div>
</template>

<script lang="ts">
import MessageItem from "./components/MessageItem.vue";

import { defineComponent } from "vue";

import { Message } from "@/models";

export default defineComponent({
  name: "MessagesWindow",
  components: {
    MessageItem,
  },

  setup() {
    const messages: Array<Message> = [
      {
        _id: 12345,
        text: "Hello world",
      },
      {
        _id: 123,
        text: "next messageed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate ve",
      },
      {
        _id: 1234567,
        text: "third msg",
      },

      {
        _id: 1234567,
        text: "ed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui",
      },
    ];

    return {
      messages,
    };
  },
});
</script>
