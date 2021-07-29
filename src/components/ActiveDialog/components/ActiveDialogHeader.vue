<template>
  <div class="flex pl-4 py-2 bg-gray-50">
    <img :src="teacher.pictureURL" class="w-16 h-16 mr-10 rounded-full" />

    <div>
      <p class="font-bold text-lg">
        {{ teacher.name }}
      </p>

      <p class="" :class="teacherStatus.class">
        {{ teacherStatus.value }}
      </p>
    </div>

    <p class="self-center">
      {{ teacher.alias }}
    </p>
  </div>
</template>

<script lang="ts">
enum ActiveStatus {
  offline,
  online,
}

interface teacherStatus {
  value: string;
  class?: string | Array<string>;
  style?: {
    color: string;
  };
}

import { defineComponent } from "vue";

export default defineComponent({
  name: "ActiveDialogHeader",
  data() {
    return {
      teacher: {
        name: "Juleus Cusarus" as string,
        pictureURL:
          "https://img.discogs.com/g0Lizdl6LomNp1hUu-_JxEtOKe4=/fit-in/600x589/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5909969-1424367459-5803.jpeg.jpg",
        status: ActiveStatus.online as ActiveStatus,
        alias: "Roman language teacher",
      },
    };
  },
  computed: {
    teacherStatus(): teacherStatus {
      const online = {
        value: "is Online",
        class: "text-green-500",
      };

      const offline = {
        value: "is Online",
        class: "text-gray-500",
      };

      return this.teacher.status === 1 ? online : offline;
    },
  },
});
</script>
