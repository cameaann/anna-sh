<template>
  <div class="project">
    <a v-bind:href="project.src" target="blank">
      <div  class="project__card" v-bind:style="{ backgroundImage: 'url('+getUrl(project.iconUrl)+')'}" v-if="project">
        <div class="hoverEff">
              <div class="u-center-text u-middle">
                  <div class="project__title">{{ project.description }}</div>
              </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>

export default({
  props: ['project', 'index'],
  data() {
    return {
      hover: false,
    };
  },
  computed:{
    // getStyle(){
    //   const overlay = 'linear-gradient(to right bottom, rgba(231, 224, 224, .5), rgba(104, 98, 98, .5))';
    //   return  overlay;
    // }
  },
  methods:{
    getUrl(val){
      return require('../assets/'+ val);
    },
    hoverCard(){
      const card = document.querySelector('.project__card');
      card.classList.add('.hoverEff');
    }
  }
})
</script>



