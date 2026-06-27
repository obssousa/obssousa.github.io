<script setup lang="ts">
import { t, languages } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tlang" class="mx-auto max-w-[1120px] px-7" style="padding-top: clamp(48px,7vw,84px); padding-bottom: clamp(48px,7vw,84px)">
    <!-- Section header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="flex items-center gap-3.5 font-mono"
      style="margin-bottom: clamp(30px,4vw,48px)"
    >
      <span class="text-[13px]" style="color: var(--accent)">04</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em]"
        style="font-size: clamp(24px,3.6vw,38px); color: var(--ink)"
      >
        {{ t.sections.languages }}
      </h2>
      <span class="h-px flex-1" style="background: var(--line)"></span>
    </div>

    <div class="grid gap-3.5" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))">
      <div
        v-for="lng in languages"
        :key="lng.name"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="rounded-xl border p-5"
        style="border-color: var(--line); background: var(--panel)"
      >
        <div class="mb-3.5 flex items-baseline justify-between">
          <span class="font-grotesk text-[20px] font-semibold" style="color: var(--ink)">
            {{ lng.name }}
          </span>
          <span class="font-mono text-[11.5px]" style="color: var(--muted)">
            {{ lng.level }}
          </span>
        </div>

        <!-- Progress cells -->
        <div class="flex gap-[5px]">
          <span
            v-for="(cell, idx) in lng.cells"
            :key="idx"
            class="h-2 flex-1 rounded-[2px]"
            :style="{ background: cell.filled ? 'var(--accent)' : 'var(--line)' }"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>
