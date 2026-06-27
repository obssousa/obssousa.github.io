<script setup lang="ts">
import { t, contact, cvFile } from '../composables/usePortfolioState'
</script>

<template>
  <section id="tcontact" class="border-t" style="border-color: var(--line); background: var(--panel)">
    <div class="mx-auto max-w-[1120px] px-7" style="padding-top: clamp(56px,9vw,110px); padding-bottom: clamp(56px,9vw,110px)">
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="mb-4 font-mono text-[13px]"
        style="color: var(--accent)"
      >
        05 // {{ t.sections.contact }}
      </div>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
        class="m-0 max-w-[20ch] font-grotesk font-bold leading-[1.08] tracking-[-0.03em]"
        style="font-size: clamp(30px,5.5vw,60px); color: var(--ink); margin-bottom: clamp(32px,5vw,48px)"
      >
        {{ t.contactLede }}
      </h2>

      <!-- CTA buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        class="flex flex-wrap gap-3"
        style="margin-bottom: clamp(36px,5vw,56px)"
      >
        <a
          :href="`mailto:${contact.email}`"
          class="rounded-lg no-underline font-mono text-[14px] font-semibold px-6 py-[13px] transition-opacity hover:opacity-80"
          style="background: var(--accent); color: var(--accent-ink)"
        >
          {{ contact.email }}
        </a>
        <a
          :href="cvFile"
          download
          class="rounded-lg border no-underline font-mono text-[14px] font-medium px-5 py-[13px] transition-opacity hover:opacity-70"
          style="color: var(--ink); border-color: var(--line)"
        >
          ↓ {{ t.cta.download }}
        </a>
      </div>

      <!-- Social grid -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
        class="overflow-hidden rounded-xl border"
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 1px;
          background: var(--line);
          border-color: var(--line);
        "
      >
        <a
          :href="contact.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline p-5 transition-opacity hover:opacity-80"
          style="background: var(--panel); color: var(--ink)"
        >
          <div class="mb-1.5 font-mono text-[11px]" style="color: var(--muted)">GitHub</div>
          <div class="font-mono text-[13.5px]">{{ contact.github }}</div>
        </a>
        <a
          :href="contact.linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="no-underline p-5 transition-opacity hover:opacity-80"
          style="background: var(--panel); color: var(--ink)"
        >
          <div class="mb-1.5 font-mono text-[11px]" style="color: var(--muted)">LinkedIn</div>
          <div class="font-mono text-[13.5px]">{{ contact.linkedin }}</div>
        </a>
        <div class="p-5" style="background: var(--panel)">
          <div class="mb-1.5 font-mono text-[11px]" style="color: var(--muted)">Phone</div>
          <div class="font-mono text-[13.5px]" style="color: var(--ink)">{{ contact.phone }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
