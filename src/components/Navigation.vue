<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/img/logo.svg" alt="logo" @click="navigate">
    </div>
    <div v-show="!mobile" class="navigation">
      <router-link class="link" to="/">Portfolio</router-link>
      <router-link class="link" to="/about">About me</router-link>
      <div>
        <i @click="mailTo" class="icon-email-outline" alt="write me"></i>
      </div>
    </div>
    <div v-show="mobile" class="icon">
      <i @click="toggleMobileNav" class="fa fa-bars"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="navigation dropdown">
        <li @click="toggleMobileNav" class="navigation__item"><router-link class="link" to="/">Portfolio</router-link></li>
        <li @click="toggleMobileNav" class="navigation__item"><router-link class="link" to="/about">About me</router-link></li>
      </ul>
    </transition>
  </div>
</template>

<script>
import router from "../router/index.js"

export default {
   data(){
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
    window.addEventListener('click', this.close);
  },
  methods: {
    mailTo() {
      window.open("mailto:cameaann@gmail.com?subject=subject&body=body");
    },
    navigate(){
      router.push('/');
    },
    toggleMobileNav(){
      this.mobileNav =! this.mobileNav;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      } else{
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    },
    close(e){
      if(!(this.$el == e.target || this.$el.contains(e.target))){
        this.mobileNav = false;
      }
    }
  },
};
</script>