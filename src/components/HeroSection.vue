<script setup lang="ts">
import { t, name, photo, cvFile } from '../composables/usePortfolioState'
</script>

<template>
  <header class="mx-auto max-w-280 px-7 pt-[clamp(44px,8vw,88px)] pb-[clamp(36px,5vw,60px)]">
    <div class="grid grid-cols-1 items-end gap-[clamp(32px,5vw,56px)] sm:grid-cols-[1fr_320px]">

      <div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
          class="mb-5 font-mono text-[13px] text-accent"
        >
          // {{ t.role }}
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
          class="m-0 mb-5 font-grotesk font-bold leading-[.98] tracking-[-0.03em] text-[clamp(44px,8vw,92px)] text-ink"
        >
          {{ name }}
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 900, delay: 200 } }"
          class="m-0 mb-7 max-w-[54ch] font-mono leading-[1.7] text-[clamp(14px,1.7vw,16px)] text-muted"
        >
          <span class="text-accent2">const</span> stack =
          <span class="text-ink">[{{ t.stack }}]</span>
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
          class="flex flex-wrap gap-3"
        >
          <a
            href="#tcontact"
            class="rounded-1.75 no-underline font-mono text-[13.5px] font-semibold px-5.5 py-3 bg-accent text-accent-ink transition-opacity hover:opacity-80"
          >
            {{ t.cta.getInTouch }} →
          </a>
          <a
            href="#texp"
            class="rounded-1.75 border no-underline font-mono text-[13.5px] font-medium px-5 py-3 text-ink border-line transition-opacity hover:opacity-70"
          >
            {{ t.cta.viewWork }}
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400 } }"
        class="hidden sm:block"
      >
        <div class="overflow-hidden rounded-2xl border bg-panel border-line">
          <div class="flex items-center gap-1.75 border-b border-line px-3.5 py-2.75">
            <span class="size-2.75 rounded-full inline-block bg-[#ff5f57]"></span>
            <span class="size-2.75 rounded-full inline-block bg-[#febc2e]"></span>
            <span class="size-2.75 rounded-full inline-block bg-accent"></span>
            <span class="ml-1.5 font-mono text-[11px] text-muted">profile.jpg</span>
          </div>
          <img
            :src="photo"
            alt="Bruno Sousa"
            class="block w-full aspect-square object-cover"
          />
        </div>
      </div>
    </div>

  </header>
</template>
