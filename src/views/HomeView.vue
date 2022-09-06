<template>
  <div ref="top"></div>
  <nav ref="navbar" class="navbar">
    <div class="nav-links">
        <h1 @click="ScrollToAnchor('hero-section')">William ali</h1>
      <!-- <button @click="ScrollToAnchor('hero-section')"> -->
        <!-- <h4>Om mig</h4> -->
        <div class="dropdown-menu">
          <button @scroll="ScrollToAnchor('hero-section')" class="drop-btn"><h4>Om mig</h4>
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <button @click="ScrollToAnchor('knowledge-section')">
            <h4>Kunskaper</h4>
          </button>
        </div>
        </div>
        
      <!-- </button> -->
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
            <arrow />
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
import Arrow from '@/components/Arrow.vue';
export default {
  components: { HeroSection, KnowledgeSection, ProjectSection, ContactSection,Arrow},
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
  align-content: center;
  align-self: center;
  left: 0;
  margin: 0px 50px;
}
nav h1:hover {
  cursor: pointer;
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

.dropdown-menu {
  overflow: hidden;
}
.drop-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:10px;
}
.dropdown-content {
  display:none;
  position: absolute;
  top:60px;
  margin-left:25px;
}
.dropdown-menu:hover .dropdown-content {
  display:block;
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

section
{
  scroll-behavior: smooth;
  scroll-snap-align: center;
}

.hero-section
{
  scroll-margin-top: 110px;
}

.project-section
{
  scroll-margin-top: 220px;
}

.contact-section
{
  scroll-margin-top: 300px;
}

.top-btn
{
  text-align: center;
  margin-bottom: 50px;
}

.btn
{
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 200px;
  transition: 0.2s ease;
}

.btn:hover
{
  background-color: rgba(109, 107, 243, 0.767);
  cursor: pointer;
}
</style>