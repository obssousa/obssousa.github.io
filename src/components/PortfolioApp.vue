<script setup lang="ts">
import { theme } from '../composables/usePortfolioState'
import NavBar from './NavBar.vue'
import HeroSection from './HeroSection.vue'
import AboutSection from './AboutSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import SkillsSection from './SkillsSection.vue'
import LanguagesSection from './LanguagesSection.vue'
import ContactSection from './ContactSection.vue'
import FooterSection from './FooterSection.vue'
</script>

<template>
  <div
    :data-theme="theme"
    class="grid-bg min-h-screen overflow-x-hidden font-geist transition-[background,color] duration-500"
    style="color: var(--ink)"
  >
    <NavBar />

    <main id="ttop">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <LanguagesSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>
