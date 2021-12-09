<template>
      <router-view v-slot="{ Component, route }">
          <transition
            :enter-active-class="route.meta.enterClass"
            :leave-active-class="route.meta.leaveClass" mode="out-in">
            <component :is="Component"/>
          </transition>
      </router-view>
</template>
<script>
// @ is an alias to /src
import dbProjects from "@/db-data.json";

export default {
  name: "Projects",
  data() {
    return {
      projects: dbProjects,
    };
  },
};
</script>
