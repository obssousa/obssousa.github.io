<script setup lang="ts">
import { t } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tedu" class="mx-auto max-w-280 px-7 pt-[clamp(48px,7vw,84px)] pb-[clamp(48px,7vw,84px)]">
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
        {{ t.sections.education }}
      </h2>
      <span class="h-px flex-1 bg-line"></span>
    </div>

    <div class="flex flex-col gap-3.5">
      <div
        v-for="item in t.education"
        :key="item.degree"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="rounded-xl border border-line bg-panel p-5"
      >
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div>
            <div class="font-grotesk text-[17px] font-semibold text-ink leading-snug">
              {{ item.degree }}
            </div>
            <div class="mt-1 font-mono text-[12.5px] text-accent">
              {{ item.institution }}
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="font-mono text-[12px] text-muted">{{ item.period }}</span>
            <span
              v-if="item.ongoing"
              class="rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10.5px] text-accent"
            >
              {{ t.present }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
