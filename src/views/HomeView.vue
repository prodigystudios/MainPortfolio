<template class="scrollisch">
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
    <transition name="slide-right">
    <div v-if="mobileMenu" class="menu-container">
      <button @click="ScrollToAnchor('hero-section')">Om mig</button>
      <button @click="ScrollToAnchor('knowledge-section')">Kunskaper</button>
      <button @click="ScrollToAnchor('project-section')">Projekt</button>
      <button @click="ScrollToAnchor('contact-section')">Kontakt</button>
    </div>
  </transition>
  </nav>

  <div class="wrapper">
    <section>
      <div ref="hero-section" class="hero-section">
        <hero-section :isMobileView="mobileView" />
      </div>
    </section>
    <section>
      <div ref="knowledge-section" class="knowledge-section">
        <knowledge-section :isViewing="isViewing" :isMobileView="mobileView" />
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
      isViewing: false,
      mobileView: false,
      mobileMenu: false,
      views: [
        {
          name: 'hero-section',
        },
        {
          name: 'knowledge-section',
        }
      ]
    }
  },
  mounted() {
    this.ScrollToAnchor('hero-section');
  },
  created() {
    this.mobileView = screen.width <= 768 ? true : false;
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    ScrollToAnchor(refName) {
      const el = this.$refs[refName];
      document.title = `${process.env.VUE_APP_TITLE} - ${this.SetNameOfSection(refName)}`;
      this.mobileMenu = false;
      el.scrollIntoView({ behavior: 'smooth' })
    },
    SetNameOfSection(refName) {
      switch (refName) {
        case 'hero-section': return 'Om mig';
        case 'knowledge-section': return 'Kunskaper'
        case 'project-section': return 'Projekt';
        case 'contact-section': return 'Kontakt';
      }
    },
    handleScroll(event) {
      if (!this.mobileView) {

        if (window.scrollY < 100) {
          document.title = `${process.env.VUE_APP_TITLE} - ${this.SetNameOfSection('hero-section')}`;
        }
        if (window.scrollY == 1039) {
          document.title = `${process.env.VUE_APP_TITLE} - ${this.SetNameOfSection('knowledge-section')}`;
          this.isViewing = true;
        }
        if (window.scrollY == 1900) {
          document.title = `${process.env.VUE_APP_TITLE} - ${this.SetNameOfSection('project-section')}`;
        }
        if (window.scrollY == 2781) {
          document.title = `${process.env.VUE_APP_TITLE} - ${this.SetNameOfSection('contact-section')}`;
        }
      }
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
  font-weight: 900;
  background: none;
  border: none;
  font-size: 22px;
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
  border-radius: 200px;
}

.slide-right-enter-active,
.slide-right-leave-active
{
    transition: all 0.5s ease;
}

.slide-right-enter-from,
.slide-right-leave-to
{
    transform: translateX(100%);
    opacity: 0.8;
}

@media screen and (min-width: 769px)
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

@media screen and (max-width: 768px)
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
    height: 500px;
  }
  .menu-button {
    height:25px;
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

  .hero-section
  {
    scroll-margin-top: 100px;
  }

  .knowledge-section
  {
    scroll-margin-top: 100px;
  }

  .project-section
  {
    scroll-margin-top: 70px;
  }

  .contact-section
  {
    scroll-margin-top: 100px;
  }

}
</style>