<script setup lang="ts">
import { t, languages } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tlang" class="mx-auto max-w-280 px-7 pt-[clamp(48px,7vw,84px)] pb-[clamp(48px,7vw,84px)]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="mb-[clamp(30px,4vw,48px)] flex items-center gap-3.5 font-mono"
    >
      <span class="text-[13px] text-accent">04</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em] text-[clamp(24px,3.6vw,38px)] text-ink"
      >
        {{ t.sections.languages }}
      </h2>
      <span class="h-px flex-1 bg-line"></span>
    </div>

    <div class="grid gap-3.5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      <div
        v-for="lng in languages"
        :key="lng.name"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="rounded-xl border border-line bg-panel p-5"
      >
        <div class="mb-3.5 flex items-baseline justify-between">
          <span class="font-grotesk text-[20px] font-semibold text-ink">
            {{ lng.name }}
          </span>
          <span class="font-mono text-[11.5px] text-muted">
            {{ lng.level }}
          </span>
        </div>

        <div class="flex gap-1.25">
          <span
            v-for="(cell, idx) in lng.cells"
            :key="idx"
            class="h-2 flex-1 rounded-sm"
            :class="cell.filled ? 'bg-accent' : 'bg-line'"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>
