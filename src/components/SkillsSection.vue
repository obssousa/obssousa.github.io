<script setup lang="ts">
import { t } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tskills" class="mx-auto max-w-[1120px] px-7" style="padding-top: clamp(48px,7vw,84px); padding-bottom: clamp(48px,7vw,84px)">
    <!-- Section header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="flex items-center gap-3.5 font-mono"
      style="margin-bottom: clamp(30px,4vw,48px)"
    >
      <span class="text-[13px]" style="color: var(--accent)">03</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em]"
        style="font-size: clamp(24px,3.6vw,38px); color: var(--ink)"
      >
        {{ t.sections.skills }}
      </h2>
      <span class="h-px flex-1" style="background: var(--line)"></span>
    </div>

    <div class="grid gap-3.5" style="grid-template-columns: repeat(auto-fit, minmax(270px, 1fr))">
      <div
        v-for="cat in t.skills"
        :key="cat.label"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="rounded-xl border p-5"
        style="border-color: var(--line); background: var(--panel)"
      >
        <div class="mb-4 font-mono text-[12px]" style="color: var(--accent)">
          {{ cat.label }}
        </div>
        <div class="flex flex-wrap gap-[7px]">
          <span
            v-for="item in cat.items"
            :key="item"
            class="rounded-[6px] border font-mono text-[12px] px-2.5 py-[5px]"
            style="color: var(--ink); background: var(--surface); border-color: var(--line)"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
