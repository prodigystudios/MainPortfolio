<template>

  <nav ref="navbar" class="navbar-desktop">
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

  <nav class="navbar-mobile">
    <div class="nav-links">
      <button class="main-name" @click="ScrollToAnchor('hero-section')">William ali</button>
      <button v-if="!mobileMenu" class="menu-btn" @click="mobileMenu = true">
        <div class="hamburger-container">
          <div class="hamburger"></div>
          <div class="hamburger"></div>
          <div class="hamburger"></div>
        </div>
      </button>
      <button v-else @click="mobileMenu = false">
        <h1>X</h1>
      </button>
    </div>
    <div v-if="mobileMenu" class="menu-container">
      <button @click="ScrollToAnchor('hero-section')">Om mig</button>
      <button @click="ScrollToAnchor('knowledge-section')">Kunskaper</button>
      <button @click="ScrollToAnchor('project-section')">Projekt</button>
      <button @click="ScrollToAnchor('contact-section')">Kontakt</button>
    </div>
  </nav>

  <div class="wrapper">
    <section>
      <div ref="hero-section" class="hero-section">
        <hero-section :isMobileView="mobileView" />
      </div>
    </section>
    <section>
      <div ref="knowledge-section" class="knowledge-section">
        <knowledge-section />
      </div>
    </section>
    <section>
      <div ref="project-section" class="project-section">
        <project-section :isMobileView="mobileView" />
      </div>
    </section>
    <section>
      <div ref="contact-section" class="contact-section">
        <Contact-section :isMobileView="mobileView" />
        <div v-if="!mobileView" class="top-btn">
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
  data() {
    return {
      mobileView: false,
      mobileMenu: false,
    }
  },
  mounted() {
    this.ScrollToAnchor('hero-section');
  },
  created() {
    this.mobileView = screen.width <= 425 ? true : false;
  },
  methods: {
    ScrollToAnchor(refName) {
      const el = this.$refs[refName];
      this.mobileMenu = false;
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
  left: 0;
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
  padding-top: 20px;
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
  filter: drop-shadow(0px 0px 10px #4444d1) brightness(200%);
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

.end-btn
{
  background: white;
  width: 100px;
  border-radius: 60px;
}

@media screen and (min-width: 426px)
{
  .navbar-desktop
  {
    display: block;
  }

  .navbar-mobile
  {
    display: none;
  }
}

@media screen and (max-width: 425px)
{

  .navbar-desktop
  {
    display: none;
  }

  .nav-links
  {
    display: flex;
    height: inherit;
    align-items: center;
    margin-right: 30px;
  }

  .main-name
  {
    margin: 0px 10px;
  }

  .menu-container
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background: #0a0a32;
    height: 400px;
  }

  .hamburger-container
  {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .hamburger
  {
    width: 30px;
    height: 5px;
    border-radius: 60px;
    background: white;
  }
}
</style>