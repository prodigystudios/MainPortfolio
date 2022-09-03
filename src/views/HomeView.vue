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
      <h4>Kontakt</h4>
    </div>
  </nav>

  <div ref="hero-section" class="hero-section">
    <hero-section />
  </div>
  <div ref="knowledge-section" class="knowledge-section">
    <knowledge-section />
  </div>
  <div ref="project-section" class="project-section">
    <project-section />
  </div>

</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import KnowledgeSection from '@/components/KnowledgeSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';
export default {
  components: { HeroSection, KnowledgeSection, ProjectSection },

  methods: {
    ScrollToAnchor(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>


<style scoped>
nav
{
  position: fixed;
  top: 0;
  width: 100%;
  background: #0F0F32;
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
  color: white;
}

button:hover
{
  cursor: pointer;
}
</style>