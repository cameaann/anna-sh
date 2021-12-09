<template>
  <transition  mode="out-in">
    <div class="container-wrap">
      <Navigation />
      <h1 class="primary-heading page-title">My works</h1>
      <div class="container-project">
        <Project
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import dbProjects from "@/db-data.json";
import Project from "@/components/Project.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Projects",
  components: {
    Project,
    Navigation,
  },
  data() {
    return {
      projects: dbProjects,
    };
  },
};
</script>
