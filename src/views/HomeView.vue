<template>
  <nav ref="navbar" class="navbar">
    <div class="nav-links">
      <h1>William ali</h1>
      <button @click="ScrollToAnchor('hero-section')">
        <h4>Om mig</h4>
      </button>
      <button @click="ScrollToAnchor('project-section')">
        <h4>Projekt</h4>
      </button>
      <button @click="ScrollToAnchor('contact-section')">
        <h4>Kontakt</h4>
      </button>
    </div>
  </nav>
<div class="wrapper">
  <section>
    <div ref="hero-section" class="hero-section">
      <hero-section />
    </div>
  </section>
  <section>
    <div ref="knowledge-section" class="knowledge-section">
      <knowledge-section />
    </div>
  </section>
  <section>
    <div ref="project-section" class="project-section">
      <project-section />
    </div>
  </section>
  <section>
    <div ref="contact-section" class="contact-section">
      <Contact-section />
      <div class="top-btn">
    <button @click="ScrollToAnchor('hero-section')" class="btn">
      <div class="right-arrow"></div>
      <div class="left-arrow"></div>
    </button>
  </div>
    </div>
  </section>
  
</div>

</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import KnowledgeSection from '@/components/KnowledgeSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import ContactSection from '@/components/ContactSection.vue';
export default {
  components: { HeroSection, KnowledgeSection, ProjectSection, ContactSection },

  methods: {
    ScrollToAnchor(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: 'smooth' })
    },
  }
}
</script>

<style scoped>

nav
{
  position: fixed;
  top: 0;
  width: 100%;
  background: #101036;
  height: 112px;
}

nav h1
{
  position: absolute;
  left: 0;
  margin: 0px 50px;
}

.nav-links
{
  display: flex;
  height: inherit;
  justify-content: right;
  align-items: center;
  margin: 0px 300px;
  gap: 200px;
}


button
{
  font-family: Outfit;
  background: none;
  border: none;
  font-size: 18px;
  color: white;
  text-decoration: none;
}

button:hover
{
  cursor: pointer;
}

section {
  scroll-behavior: smooth;
  scroll-snap-align:center;
}
.hero-section
{
  scroll-behavior: smooth;
  scroll-margin-top: 110px;
}

.project-section
{
  scroll-behavior: smooth;
  scroll-margin-top: 220px;
}
.contact-section {
  scroll-margin-top: 300px;
}

.top-btn{
  text-align: center;
  margin-bottom: 50px;
}

.btn {
  width:100px;
  height: 100px;
  background: white;
  border-radius: 200px;
  transition: 0.2s ease;
}
.btn:hover{
  background-color: rgba(109, 107, 243, 0.767);
}
.left-arrow {
  position: relative;
  left:25px;
  bottom:31px;
  width: 10px;
  height: 50px;
  background-color: #101036;
  transform:rotate(230deg);
}
.right-arrow {
  position: relative;
  left:55px;
  top:20px;
  width: 10px;
  height: 50px;
  background-color: #101036;
  transform:rotate(135deg);
}
</style>