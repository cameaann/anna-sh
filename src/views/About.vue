<template>
  <transition  mode="out-in">
    <div class="container-wrap">
        <div class="column1">
            <img class="photo" src="../assets/img/131.png" alt="photo">

        </div>
        <div class="column2">
          <div class="name">Anna Shestakova</div>
          <div class="prof">Web Designer</div>
          <div class="content">I’m interested in graphic design, illustration. Study the UX/UI design.
I like to sketch and try to find joy in running.</div>
 <a href="https://drive.google.com/file/d/1xImk4RnQhyP-AT8OJsBYa2M2Yqk26m7d/view?usp=sharing" class="btn btn-download" target="blank">Download resume</a>
          <div class="letter">
            <i @click="mailTo" class="icon-email-outline" alt="write me"></i>
          </div>
        </div>
    </div>
  </transition>
</template>

<style scoped>

</style>

<script>
export default {
  methods:{
    mailTo(){
        window.open("mailto:cameaann@gmail.com?subject=subject&body=body");
    }
  }
};

</script>
