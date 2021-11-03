<template>
  <div class="project">
    <a v-bind:href="project.src" target="blank">
      <div v-bind:class="'project__card-'+ project.id" class="project__card" v-if="project">
        <div class="u-center-text u-middle">
          <div class="project__title">{{ project.description }}</div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>

export default({
  props: ['project', 'index'],
})
</script>

