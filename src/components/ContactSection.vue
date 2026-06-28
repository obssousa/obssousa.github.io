<script setup lang="ts">
import { t, contact, cvFile } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tcontact" class="border-t border-line bg-panel">
    <div class="mx-auto max-w-280 px-7 pt-[clamp(56px,9vw,110px)] pb-[clamp(56px,9vw,110px)]">
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="mb-4 font-mono text-[13px] text-accent"
      >
        05 // {{ t.sections.contact }}
      </div>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
        class="m-0 max-w-[20ch] font-grotesk font-bold leading-[1.08] tracking-[-0.03em] text-[clamp(30px,5.5vw,60px)] text-ink mb-[clamp(32px,5vw,48px)]"
      >
        {{ t.contactLede }}
      </h2>

      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        class="flex flex-wrap gap-3 mb-[clamp(36px,5vw,56px)]"
      >
        <a
          :href="`mailto:${contact.email}`"
          class="rounded-1.75 no-underline font-mono text-[14px] font-semibold px-6 py-3.25 bg-accent text-accent-ink transition-opacity hover:opacity-80"
        >
          {{ contact.email }}
        </a>
        <a
          :href="cvFile"
          download
          class="rounded-1.75 border border-line no-underline font-mono text-[14px] font-medium px-5 py-3.25 text-ink transition-opacity hover:opacity-70"
        >
          ↓ {{ t.cta.download }}
        </a>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
        class="overflow-hidden rounded-xl border border-line bg-line grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-px"
      >
        <a
          :href="contact.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline p-5 bg-panel text-ink transition-opacity hover:opacity-80"
        >
          <div class="mb-1.5 font-mono text-[11px] text-muted">GitHub</div>
          <div class="font-mono text-[13.5px]">{{ contact.github }}</div>
        </a>
        <a
          :href="contact.linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline p-5 bg-panel text-ink transition-opacity hover:opacity-80"
        >
          <div class="mb-1.5 font-mono text-[11px] text-muted">LinkedIn</div>
          <div class="font-mono text-[13.5px]">{{ contact.linkedin }}</div>
        </a>
        <div class="p-5 bg-panel">
          <div class="mb-1.5 font-mono text-[11px] text-muted">Phone</div>
          <div class="font-mono text-[13.5px] text-ink">{{ contact.phone }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
