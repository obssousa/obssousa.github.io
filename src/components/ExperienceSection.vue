<script setup lang="ts">
import { t } from '../composables/usePortfolioState'
</script>

<template>
  <section id="texp" class="mx-auto max-w-[1120px] px-7" style="padding-top: clamp(48px,7vw,84px); padding-bottom: clamp(48px,7vw,84px)">
    <!-- Section header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="flex items-center gap-3.5 font-mono"
      style="margin-bottom: clamp(30px,4vw,48px)"
    >
      <span class="text-[13px]" style="color: var(--accent)">02</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em]"
        style="font-size: clamp(24px,3.6vw,38px); color: var(--ink)"
      >
        {{ t.sections.experience }}
      </h2>
      <span class="h-px flex-1" style="background: var(--line)"></span>
    </div>

    <!-- Main experience cards -->
    <div class="flex flex-col gap-4">
      <div
        v-for="exp in t.experience"
        :key="exp.company"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="rounded-2xl border p-6"
        style="border-color: var(--line); background: var(--panel); padding: clamp(22px,3vw,32px)"
      >
        <!-- Company + period -->
        <div class="mb-1.5 flex flex-wrap items-baseline justify-between gap-2.5">
          <h3
            class="m-0 font-grotesk font-semibold tracking-[-0.01em]"
            style="font-size: clamp(20px,2.6vw,27px); color: var(--ink)"
          >
            {{ exp.company }}
          </h3>
          <span class="font-mono text-[12.5px]" style="color: var(--muted)">{{ exp.period }}</span>
        </div>

        <!-- Role + meta + badge -->
        <div class="mb-4 flex flex-wrap items-center gap-2.5">
          <span class="font-mono text-[13px]" style="color: var(--accent)">{{ exp.role }}</span>
          <span class="size-1 rounded-full" style="background: var(--muted)"></span>
          <span class="text-[13px]" style="color: var(--muted)">{{ exp.meta }}</span>
          <span
            v-if="exp.current"
            class="rounded-[5px] font-mono text-[11px] px-2 py-0.5"
            style="color: var(--accent-ink); background: var(--accent)"
          >
            {{ t.present }}
          </span>
        </div>

        <!-- Bullet points -->
        <ul class="m-0 flex list-none flex-col gap-2.5 p-0">
          <li
            v-for="(point, idx) in exp.points"
            :key="idx"
            class="relative pl-6 text-[14.5px] leading-[1.6]"
            style="color: var(--muted)"
          >
            <span
              class="absolute left-0 top-0 font-mono text-[13px]"
              style="color: var(--accent)"
            >▹</span>
            {{ point }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Early career -->
    <div style="margin-top: clamp(34px,4vw,52px)">
      <h3
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="m-0 mb-5 font-mono text-[13px] font-medium"
        style="color: var(--accent)"
      >
        // {{ t.sections.earlyCareer }}
      </h3>

      <div class="grid gap-3.5" style="grid-template-columns: repeat(auto-fit, minmax(230px, 1fr))">
        <div
          v-for="e in t.early"
          :key="e.company"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="rounded-xl border p-5"
          style="border-color: var(--line); background: var(--panel)"
        >
          <div class="mb-2 font-mono text-[11.5px]" style="color: var(--muted)">{{ e.period }}</div>
          <div class="mb-0.5 font-grotesk text-[16px] font-semibold" style="color: var(--ink)">{{ e.company }}</div>
          <div class="mb-2.5 font-mono text-[11.5px]" style="color: var(--accent)">{{ e.role }}</div>
          <p class="m-0 text-[13px] leading-[1.55]" style="color: var(--muted)">{{ e.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
