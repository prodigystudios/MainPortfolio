<template>
  <nav ref="navbar" class="navbar">
    <div class="nav-links">
      <div class="dropdown-menu">
        <button class="btn-nav" @click="ScrollToAnchor('hero-section')">Om mig
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <button class="btn-nav" @click="ScrollToAnchor('knowledge-section')">Kunskaper
          </button>
        </div>
      </div>
      <button class="main-name" @click="ScrollToAnchor('hero-section')">William ali</button>
      <button @click="ScrollToAnchor('project-section')">Projekt</button>
      <button @click="ScrollToAnchor('contact-section')">Kontakt</button>
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
          <button @click="ScrollToAnchor('hero-section')" class="end-btn">
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
  components: { HeroSection, KnowledgeSection, ProjectSection, ContactSection, Arrow },
  methods: {
    ScrollToAnchor(refName) {
      const el = this.$refs[refName];
      console.log('this is clicked');
      el.scrollIntoView({ behavior: 'smooth' })
    },
  }
}
</script>

<style scoped>
  .main-name
{
  position: absolute;
  align-content: center;
  align-self: center;
  left: 0;
  margin: 0px 50px;
  font-weight: bold;
  font-size: 25px;
}

nav
{
  position: fixed;
  top: 0;
  width: 100%;
  background: #101036;
  height: 112px;
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

.dropdown-content
{
  display: none;
  position: absolute;
  top: 60px;
  margin-left: 25px;
  padding-top:20px;
}
.dropdown-menu:hover .dropdown-content
{
  display: block;
}

button
{
  font-family: Outfit;
  font-weight: bold;
  background: none;
  border: none;
  font-size: 18px;
  color: white;
  text-decoration: none;
}

button:hover
{
  cursor: pointer;
  filter: drop-shadow(0px 0px 10px #4444d1) 
  brightness(200%);
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
.end-btn {
  background: white;
  width:100px;
  border-radius: 60px;
}
</style>