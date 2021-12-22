<template>
  <transition  mode="out-in">
    <div class="home">
      <About/>
      <!-- <div class="test">Привет</div> -->
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
