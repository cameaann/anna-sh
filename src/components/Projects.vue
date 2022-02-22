<template>
  <transition  mode="out-in">
      <div class="container-project">
        <Project
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import dbProjects from "@/db-data.json";
import Project from "@/components/Project.vue";

export default {
  name: "Projects",
  components: {
    Project
  },
  data() {
    return {
      projects: dbProjects,
    };
  },
};
</script>
