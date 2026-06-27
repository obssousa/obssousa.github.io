<script setup lang="ts">
import { t, name, photo, cvFile } from '../composables/usePortfolioState'
</script>

<template>
  <header class="mx-auto max-w-[1120px] px-7" style="padding-top: clamp(44px,8vw,88px); padding-bottom: clamp(36px,5vw,60px)">
    <!-- Two-column grid: text | photo -->
    <div class="grid grid-cols-1 items-end sm:grid-cols-[1fr_320px]" style="gap: clamp(32px,5vw,56px)">

      <!-- Text -->
      <div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
          class="mb-5 font-mono text-[13px]"
          style="color: var(--accent)"
        >
          // {{ t.role }}
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
          class="m-0 mb-5 font-grotesk font-bold leading-[.98] tracking-[-0.03em]"
          style="font-size: clamp(44px,8vw,92px); color: var(--ink)"
        >
          {{ name }}
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 900, delay: 200 } }"
          class="m-0 mb-7 max-w-[54ch] font-mono leading-[1.7]"
          style="font-size: clamp(14px,1.7vw,16px); color: var(--muted)"
        >
          <span style="color: var(--accent2)">const</span> stack =
          <span style="color: var(--ink)">[{{ t.stack }}]</span>
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 26 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
          class="flex flex-wrap gap-3"
        >
          <a
            href="#tcontact"
            class="rounded-[7px] no-underline font-mono text-[13.5px] font-semibold px-[22px] py-3 transition-opacity hover:opacity-80"
            style="background: var(--accent); color: var(--accent-ink)"
          >
            {{ t.cta.getInTouch }} →
          </a>
          <a
            href="#texp"
            class="rounded-[7px] border no-underline font-mono text-[13.5px] font-medium px-5 py-3 transition-opacity hover:opacity-70"
            style="color: var(--ink); border-color: var(--line)"
          >
            {{ t.cta.viewWork }}
          </a>
        </div>
      </div>

      <!-- Photo card (hidden on small screens) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 400 } }"
        class="hidden sm:block"
      >
        <div class="overflow-hidden rounded-2xl border" style="background: var(--panel); border-color: var(--line)">
          <div class="flex items-center gap-[7px] border-b px-3.5 py-[11px]" style="border-color: var(--line)">
            <span class="size-[11px] rounded-full inline-block" style="background: #ff5f57"></span>
            <span class="size-[11px] rounded-full inline-block" style="background: #febc2e"></span>
            <span class="size-[11px] rounded-full inline-block" style="background: var(--accent)"></span>
            <span class="ml-1.5 font-mono text-[11px]" style="color: var(--muted)">profile.jpg</span>
          </div>
          <img
            :src="photo"
            alt="Bruno Sousa"
            class="block w-full"
            style="aspect-ratio: 1 / 1; object-fit: cover"
          />
        </div>
      </div>
    </div>

  </header>
</template>
