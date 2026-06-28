<script setup lang="ts">
import { ref } from 'vue'
import { theme, otherLang, themeIcon, toggleLang, toggleTheme, t, cvFile } from '../composables/usePortfolioState'

const langAnimating = ref(false)
const themeAnimating = ref(false)

function handleLangToggle() {
  langAnimating.value = true
  toggleLang()
}

function handleThemeToggle() {
  themeAnimating.value = true
  toggleTheme()
}
</script>

<template>
  <nav class="nav-bg sticky top-0 z-50 border-b border-line backdrop-blur-[12px]">
    <div
      class="mx-auto flex max-w-280 items-center justify-between gap-6 px-7 py-3.5"
    >
      <a
        href="#ttop"
        class="flex items-center gap-2.5 no-underline font-mono text-sm font-semibold text-ink"
      >
        <span class="text-accent">~/</span>bruno-sousa<span
          class="animate-blink inline-block h-3.75 w-2 bg-accent"
        ></span>
      </a>

      <div class="hidden items-center gap-6 font-mono text-[13px] sm:flex">
        <a href="#tabout" class="no-underline text-muted transition-colors hover:opacity-80">
          {{ t.sections.about }}
        </a>
        <a href="#texp" class="no-underline text-muted transition-colors hover:opacity-80">
          {{ t.sections.experience }}
        </a>
        <a href="#tskills" class="no-underline text-muted transition-colors hover:opacity-80">
          {{ t.sections.skills }}
        </a>
        <a href="#tedu" class="no-underline text-muted transition-colors hover:opacity-80">
          {{ t.sections.education }}
        </a>
        <a href="#tlang" class="no-underline text-muted transition-colors hover:opacity-80">
          {{ t.sections.languages }}
        </a>
        <a href="#tcontact" class="no-underline text-muted transition-colors hover:opacity-80">
          {{ t.sections.contact }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button
          id="lang-toggle-btn"
          class="toggle-btn cursor-pointer rounded-md border border-line bg-transparent px-2.5 py-1.5 font-mono text-xs text-ink"
          :class="{ 'btn-pulse': langAnimating }"
          @click="handleLangToggle"
          @animationend="langAnimating = false"
        >
          {{ otherLang }}
        </button>
        <button
          id="theme-toggle-btn"
          aria-label="Toggle theme"
          class="toggle-btn grid size-8 cursor-pointer place-items-center rounded-md border border-line bg-transparent text-[13px] text-ink"
          :class="{ 'btn-spin': themeAnimating }"
          @click="handleThemeToggle"
          @animationend="themeAnimating = false"
        >
          {{ themeIcon }}
        </button>
        <a
          :href="cvFile"
          download
          class="inline-flex items-center gap-1.5 rounded-md no-underline font-mono text-[12.5px] font-semibold px-3.5 py-2 bg-accent text-accent-ink transition-opacity hover:opacity-80"
        >
          {{ t.cta.download }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-bg {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
}

.toggle-btn {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.toggle-btn:hover {
  opacity: 0.75;
}

@keyframes btn-pulse {
  0%   { transform: scale(1); }
  30%  { transform: scale(0.85); }
  60%  { transform: scale(1.18); }
  100% { transform: scale(1); }
}

@keyframes btn-spin {
  0%   { transform: rotate(0deg) scale(1); }
  40%  { transform: rotate(200deg) scale(0.8); }
  70%  { transform: rotate(340deg) scale(1.15); }
  100% { transform: rotate(360deg) scale(1); }
}

.btn-pulse {
  animation: btn-pulse 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.btn-spin {
  animation: btn-spin 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>
