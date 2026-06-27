<script setup lang="ts">
import { t } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tabout" class="mx-auto max-w-[1120px] px-7" style="padding-top: clamp(48px,7vw,84px); padding-bottom: clamp(48px,7vw,84px)">
    <!-- Section header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="mb-8 flex items-center gap-3.5 font-mono"
      style="margin-bottom: clamp(26px,4vw,40px)"
    >
      <span class="text-[13px]" style="color: var(--accent)">01</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em]"
        style="font-size: clamp(24px,3.6vw,38px); color: var(--ink)"
      >
        {{ t.sections.about }}
      </h2>
      <span class="h-px flex-1" style="background: var(--line)"></span>
    </div>

    <!-- Two-column content -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
      class="grid gap-7 sm:grid-cols-[1.4fr_1fr]"
      style="gap: clamp(28px,4vw,56px)"
    >
      <!-- Summary text -->
      <div>
        <p
          class="m-0 mb-5 leading-[1.65]"
          style="font-size: clamp(16px,2vw,19px); color: var(--ink)"
        >
          {{ t.summary }}
        </p>
        <p class="m-0 text-[15px] leading-[1.62]" style="color: var(--muted)">
          {{ t.summary2 }}
        </p>
      </div>

      <!-- Stats cards -->
      <div class="flex flex-col gap-3.5">
        <div class="rounded-xl border p-5" style="border-color: var(--line); background: var(--panel)">
          <div
            class="font-grotesk font-bold leading-none"
            style="font-size: clamp(40px,6vw,60px); color: var(--accent)"
          >
            6+
          </div>
          <div class="mt-2 font-mono text-[13px]" style="color: var(--muted)">
            {{ t.yearsLabel }}
          </div>
        </div>

        <div
          class="rounded-xl border p-5 font-mono text-[12.5px] leading-[1.9]"
          style="border-color: var(--line); background: var(--panel); color: var(--muted)"
        >
          <div>
            <span style="color: var(--accent2)">vue</span> ·
            <span style="color: var(--accent2)">react</span> ·
            <span style="color: var(--accent2)">typescript</span>
          </div>
          <div>
            <span style="color: var(--accent2)">astro</span> ·
            <span style="color: var(--accent2)">nuxt</span> ·
            <span style="color: var(--accent2)">node</span>
          </div>
          <div>
            <span style="color: var(--accent2)">aws</span> ·
            <span style="color: var(--accent2)">ci/cd</span> ·
            <span style="color: var(--accent2)">tdd</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
