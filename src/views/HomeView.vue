<template>
  <div class ="navbar">
    <navbar-desktop />
  </div>
  <div class="hero-section">
    <hero-section />
  </div>
  <div>
    <knowledge-section/>
  </div>

</template>

<script>
import NavbarDesktop from '@/components/NavbarDesktop.vue';
import HeroSection from '@/components/HeroSection.vue';
import KnowledgeSection from '@/components/KnowledgeSection.vue';
export default {
  components: { NavbarDesktop, HeroSection, KnowledgeSection }
}
</script>


<style scoped>

</style>