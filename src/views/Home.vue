<template>
  <transition  mode="out-in">
    <div class="home-container">
        <div class="hello">Hello! I'm Anna Shestakova. I make responsive sites, landings and prototypes.</div>
        <Projects/>
         <div class="letter">
            <i @click="mailTo" class="icon-email-outline" alt="write me"></i>
          </div>
    </div>
  </transition>
</template>



<script>
// @ is an alias to /src
import Projects from "@/components/Projects.vue"

export default {
  name: "Home",
  components: {
    Projects
  },
  methods:{
    mailTo(){
        window.open("mailto:cameaann@gmail.com?subject=subject&body=body");
    }
  }
};
</script>
