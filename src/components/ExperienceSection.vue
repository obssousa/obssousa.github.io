<script setup lang="ts">
import { t } from '../composables/usePortfolioState'
</script>

<template>
  <section id="texp" class="mx-auto max-w-280 px-7 pt-[clamp(48px,7vw,84px)] pb-[clamp(48px,7vw,84px)]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="mb-[clamp(30px,4vw,48px)] flex items-center gap-3.5 font-mono"
    >
      <span class="text-[13px] text-accent">02</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em] text-[clamp(24px,3.6vw,38px)] text-ink"
      >
        {{ t.sections.experience }}
      </h2>
      <span class="h-px flex-1 bg-line"></span>
    </div>

    <div class="flex flex-col gap-4">
      <div
        v-for="exp in t.experience"
        :key="exp.company"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="rounded-2xl border border-line bg-panel p-[clamp(22px,3vw,32px)]"
      >
        <div class="mb-1.5 flex flex-wrap items-baseline justify-between gap-2.5">
          <h3
            class="m-0 font-grotesk font-semibold tracking-[-0.01em] text-[clamp(20px,2.6vw,27px)] text-ink"
          >
            {{ exp.company }}
          </h3>
          <span class="font-mono text-[12.5px] text-muted">{{ exp.period }}</span>
        </div>

        <div class="mb-4 flex flex-wrap items-center gap-2.5">
          <span class="font-mono text-[13px] text-accent">{{ exp.role }}</span>
          <span class="size-1 rounded-full bg-muted"></span>
          <span class="text-[13px] text-muted">{{ exp.meta }}</span>
          <span
            v-if="exp.current"
            class="rounded-1.25 font-mono text-[11px] px-2 py-0.5 bg-accent text-accent-ink"
          >
            {{ t.present }}
          </span>
        </div>

        <ul class="m-0 flex list-none flex-col gap-2.5 p-0">
          <li
            v-for="(point, idx) in exp.points"
            :key="idx"
            class="relative pl-6 text-[14.5px] leading-[1.6] text-muted"
          >
            <span
              class="absolute left-0 top-0 font-mono text-[13px] text-accent"
            >▹</span>
            {{ point }}
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-[clamp(34px,4vw,52px)]">
      <h3
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="m-0 mb-5 font-mono text-[13px] font-medium text-accent"
      >
        // {{ t.sections.earlyCareer }}
      </h3>

      <div class="grid gap-3.5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
        <div
          v-for="e in t.early"
          :key="e.company"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="rounded-xl border border-line bg-panel p-5"
        >
          <div class="mb-2 font-mono text-[11.5px] text-muted">{{ e.period }}</div>
          <div class="mb-0.5 font-grotesk text-[16px] font-semibold text-ink">{{ e.company }}</div>
          <div class="mb-2.5 font-mono text-[11.5px] text-accent">{{ e.role }}</div>
          <p class="m-0 text-[13px] leading-[1.55] text-muted">{{ e.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
