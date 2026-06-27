<script setup lang="ts">
import { name, contact } from '../composables/usePortfolioState'
</script>

<template>
  <footer
    class="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-7 py-6 font-mono text-[12px]"
    style="color: var(--muted)"
  >
    <span>© 2026 {{ name }} · built with care</span>
    <span>{{ contact.site }}</span>
  </footer>
</template>
