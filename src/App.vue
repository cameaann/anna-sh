<template>
      <router-view v-slot="{ Component, route }">
         <Navigation/>
          <transition
            :enter-active-class="route.meta.enterClass"
            :leave-active-class="route.meta.leaveClass" mode="out-in">
            <component :is="Component"/>
          </transition>
      </router-view>
 </template>

<script>

// @ is an alias to /src
import Navigation from "@/components/Navigation.vue"

export default {
  components: {
    Navigation
  },
};

</script>