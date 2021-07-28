<template>
  <div class="subject-header">
    <ul>
      <li v-for="subject in subjects" :key="subject">
        <button>
          {{ subject }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { subjects } from "@/data/subjects";

export default defineComponent({
  name: "SubjectHeader",
  setup() {
    // data
    const activeSubject = subjects[0];

    // style
    const activeSubjectStyle = {};

    return {
      subjects,
      activeSubject
    };
  },
  methods: {
    changeActive(value:string):void {
      
      const isUndefinedSubject:boolean = subjects.includes(value);
      if (isUndefinedSubject) throw new Error("undefined subject");

      this.activeSubject = value;
    },
  },
});
</script>
