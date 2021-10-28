<template>
  <div class="container">
    <div class="header">
       <span class="primary-heading primary-heading_name">Anna</span>
       <router-link class="secondary-heading secondary-heading_write" to="/write">Write me</router-link>
       <span class="primary-heading primary-heading_lastname">Shestakova</span>
       <span class="secondary-heading secondary-heading_prof"> UX/UI Designer</span>
    </div>
    <div class="content">
      <div class="education">
        Pomor State University,<br>
        Arkhangelsk, 1997-2002<br>
        Primary school teacher, English teacher<br>
        Specialization: English language<br><br>

        North Arctic Federal University, Arkhangelsk, 2009-2013<br>
        Engineer<br>
        Specialization: Information systems and technologies<br>
      </div>
      <router-link class="secondary-heading secondary-heading_works" to="/projects">My works</router-link>
      <div class="skills">
        HTML/CSS/SCSS<br>
        Javascript/Typescript<br>
        AngularJS/Angular2/ReactJS<br>
        Figma, Adobe Illustrator<br>
        Git
      </div>
      <ul class="courses">
          <li>Model thinking</li>
          <li>Programming For Everybody(Python)</li>
          <li>Responsive Web Design</li>
          <li>Interactivity with Javascript</li>
          <li>Advanced Styling with Responsive Design</li>
          <li>Single Web Page Application With AngularJS</li>
          <li>Fundamentals of Graphic Design</li>
          <li>Advanced CSS and Sass: Flexbox, Grid, Animations</li>
          <li>Adobe Illustrator CC - Essentials</li>
          <li>Adobe Illustrator CC - Advanced</li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

