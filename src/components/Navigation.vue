<template>
    <div class="navigation">
      <router-link class="link link-home" to="/">Home</router-link> 
      <div @click="mailTo()" class="link link-write" to="/write">Write me</div> 
    </div>    
</template>

<script>
export default {
  methods:{
    mailTo(){
       window.open('mailto:cameaann@gmail.com?subject=subject&body=body');
    }
  }
};
</script>