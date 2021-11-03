<template>
  <transition> 
    <div class="home">
      <About/>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";

export default {
  name: "Home",
  data(){
    return {
      view: About
    }
  },
  components: {
    About,
  },
};
</script>
