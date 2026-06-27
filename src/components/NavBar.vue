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
  <nav
    class="sticky top-0 z-50 border-b"
    style="
      backdrop-filter: blur(12px);
      background: color-mix(in srgb, var(--bg) 82%, transparent);
      border-color: var(--line);
    "
  >
    <div
      class="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-7 py-3.5"
    >
      <!-- Logo -->
      <a
        href="#ttop"
        class="flex items-center gap-2.5 no-underline font-mono text-sm font-semibold"
        style="color: var(--ink)"
      >
        <span style="color: var(--accent)">~/</span>bruno-sousa<span
          class="animate-blink inline-block h-[15px] w-2"
          style="background: var(--accent)"
        ></span>
      </a>

      <!-- Links -->
      <div class="hidden items-center gap-6 font-mono text-[13px] sm:flex">
        <a href="#tabout" class="no-underline transition-colors hover:opacity-80" style="color: var(--muted)">
          {{ t.sections.about }}
        </a>
        <a href="#texp" class="no-underline transition-colors hover:opacity-80" style="color: var(--muted)">
          {{ t.sections.experience }}
        </a>
        <a href="#tskills" class="no-underline transition-colors hover:opacity-80" style="color: var(--muted)">
          {{ t.sections.skills }}
        </a>
        <a href="#tlang" class="no-underline transition-colors hover:opacity-80" style="color: var(--muted)">
          {{ t.sections.languages }}
        </a>
        <a href="#tcontact" class="no-underline transition-colors hover:opacity-80" style="color: var(--muted)">
          {{ t.sections.contact }}
        </a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <button
          id="lang-toggle-btn"
          class="toggle-btn cursor-pointer rounded-md border px-2.5 py-1.5 font-mono text-xs"
          :class="{ 'btn-pulse': langAnimating }"
          style="border-color: var(--line); background: transparent; color: var(--ink)"
          @click="handleLangToggle"
          @animationend="langAnimating = false"
        >
          {{ otherLang }}
        </button>
        <button
          id="theme-toggle-btn"
          aria-label="Toggle theme"
          class="toggle-btn grid size-8 cursor-pointer place-items-center rounded-md border text-[13px]"
          :class="{ 'btn-spin': themeAnimating }"
          style="border-color: var(--line); background: transparent; color: var(--ink)"
          @click="handleThemeToggle"
          @animationend="themeAnimating = false"
        >
          {{ themeIcon }}
        </button>
        <a
          :href="cvFile"
          download
          class="inline-flex items-center gap-1.5 rounded-md no-underline font-mono text-[12.5px] font-semibold px-3.5 py-2 transition-opacity hover:opacity-80"
          style="background: var(--accent); color: var(--accent-ink)"
        >
          {{ t.cta.download }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
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
