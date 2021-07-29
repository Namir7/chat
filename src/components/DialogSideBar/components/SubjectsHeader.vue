<template>
  <ul class="flex px-6 p pb-5 border-b-2 border-gray-200">
    <li class="mr-8" v-for="subject in subjects" :key="subject">
      <button
        class="font-extralight"
        :class="subject === activeSubject.value ? activeSubject.class : ''"
        @click="changeActive(subject)"
      >
        {{ subject }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import { subjects } from "@/data/subjects";

interface IActiveSubject {
  value: string;
  class: string;
}

export default defineComponent({
  name: "SubjectHeader",
  setup() {
    // data

    const activeSubject: IActiveSubject = reactive({
      value: "Architecture",
      class: "font-bold",
    });

    return {
      activeSubject,
      subjects,
    };
  },

  methods: {
    changeActive(newValue: string): void {
      this.activeSubject.value = newValue;
    },
  },
});
</script>
