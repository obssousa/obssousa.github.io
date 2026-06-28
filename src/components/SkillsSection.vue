<script setup lang="ts">
import { t } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tskills" class="mx-auto max-w-280 px-7 pt-[clamp(48px,7vw,84px)] pb-[clamp(48px,7vw,84px)]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="mb-[clamp(30px,4vw,48px)] flex items-center gap-3.5 font-mono"
    >
      <span class="text-[13px] text-accent">03</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em] text-[clamp(24px,3.6vw,38px)] text-ink"
      >
        {{ t.sections.skills }}
      </h2>
      <span class="h-px flex-1 bg-line"></span>
    </div>

    <div class="grid gap-3.5 grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
      <div
        v-for="cat in t.skills"
        :key="cat.label"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="rounded-xl border border-line bg-panel p-5"
      >
        <div class="mb-4 font-mono text-[12px] text-accent">
          {{ cat.label }}
        </div>
        <div class="flex flex-wrap gap-1.75">
          <span
            v-for="item in cat.items"
            :key="item"
            class="rounded-md border border-line bg-surface font-mono text-[12px] px-2.5 py-1.25 text-ink"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
