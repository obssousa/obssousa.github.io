<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../composables/usePortfolioState'

const stackRows = computed(() => {
  const tags = t.value.stackTags
  const size = 3
  return Array.from({ length: Math.ceil(tags.length / size) }, (_, i) =>
    tags.slice(i * size, i * size + size),
  )
})
</script>

<template>
  <section id="tabout" class="mx-auto max-w-280 px-7 pt-[clamp(48px,7vw,84px)] pb-[clamp(48px,7vw,84px)]">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="mb-[clamp(26px,4vw,40px)] flex items-center gap-3.5 font-mono"
    >
      <span class="text-[13px] text-accent">01</span>
      <h2
        class="m-0 font-grotesk font-semibold tracking-[-0.02em] text-[clamp(24px,3.6vw,38px)] text-ink"
      >
        {{ t.sections.about }}
      </h2>
      <span class="h-px flex-1 bg-line"></span>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
      class="grid gap-[clamp(28px,4vw,56px)] sm:grid-cols-[1.4fr_1fr]"
    >
      <div>
        <p
          class="m-0 mb-5 leading-[1.65] text-[clamp(16px,2vw,19px)] text-ink"
        >
          {{ t.summary }}
        </p>
        <p class="m-0 text-[15px] leading-[1.62] text-muted">
          {{ t.summary2 }}
        </p>
      </div>

      <div class="flex flex-col gap-3.5">
        <div class="rounded-xl border border-line bg-panel p-5">
          <div
            class="font-grotesk font-bold leading-none text-[clamp(40px,6vw,60px)] text-accent"
          >
            6+
          </div>
          <div class="mt-2 font-mono text-[13px] text-muted">
            {{ t.yearsLabel }}
          </div>
        </div>

        <div
          class="rounded-xl border border-line bg-panel p-5 font-mono text-[12.5px] leading-[1.9] text-muted"
        >
          <div v-for="(row, i) in stackRows" :key="i">
            <template v-for="(tag, j) in row" :key="tag">
              <span class="text-accent2">{{ tag }}</span
              ><template v-if="j < row.length - 1"> · </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
