<template>
  <transition>
    <div class="container-wrap">
      <div class="header">
        <span class="primary-heading primary-heading_name">Anna</span>
        <span class="primary-heading primary-heading_lastname">Shestakova</span>
        <span class="secondary-heading secondary-heading_prof">
          UX/UI Designer</span
        >
        <div class="nav">
          <div
            class="secondary-heading secondary-heading_write"
            @click="mailTo()"
            >Write me</div
          >
          <router-link
            class="secondary-heading secondary-heading_works"
            to="/projects"
            >My works</router-link
          >
        </div>
      </div>
      <div class="content">
        <div class="education">
          <div class="title">Education</div>
          Pomor State University,<br />
          Arkhangelsk, 1997-2002<br />
          Primary school teacher, English teacher<br />
          Specialization: English language<br /><br />

          North Arctic Federal University, Arkhangelsk, 2009-2013<br />
          Engineer<br />
          Specialization: Information systems and technologies<br />
        </div>
        <div class="skills">
          <div class="title">Skills</div>
          HTML/CSS/SCSS<br />
          Javascript/Typescript<br />
          AngularJS/Angular2/ReactJS<br />
          Figma, Adobe Illustrator<br />
          Git
        </div>
        <ul class="courses">
          <div class="title">Courses</div>
          <li><a href="https://www.coursera.org/learn/model-thinking" target="blank">Model thinking</a></li>
          <li><a href="https://www.coursera.org/learn/python" target="blank">Programming For Everybody(Python)</a></li>
          <li><a href="https://www.coursera.org/learn/responsive-web-design/home/welcome" target="blank">Responsive
                  Web Design</a></li>
          <li><a href="https://www.coursera.org/learn/javascript" target="blank">Interactivity with Javascript</a></li>
          <li><a href="https://www.coursera.org/learn/responsivedesign" target="blank">Advanced Styling with
                  Responsive Design</a></li>
          <li><a href="https://www.coursera.org/learn/single-page-web-apps-with-angularjs" target="blank">Single
                  Web
                  Page
                  Application
                  With AngularJS</a></li>
          <li><a href="https://www.coursera.org/learn/fundamentals-of-graphic-design" target="blank">Fundamentals
                  of Graphic Design</a></li>
          <li> <a href="https://www.udemy.com/course/advanced-css-and-sass/" target="blank">Advanced CSS and Sass: Flexbox, Grid, Animations</a></li>
          <li><a href="https://www.udemy.com/course/adobe-illustrator-course" target="blank">Adobe Illustrator CC - Essentials</a></li>
          <li><a href="https://www.udemy.com/course/adobe-illustrator-cc-advanced-training" target="blank">Adobe Illustrator CC - Advanced</a></li>
        </ul>
      </div>
    </div>
  </transition>
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
