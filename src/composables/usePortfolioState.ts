import { ref, computed } from 'vue'
import { DATA } from '../data/cv-data'

// Module-level reactive state — safe for client:only rendering
export const lang = ref<'en' | 'pt'>('en')
export const theme = ref<'dark' | 'light'>('dark')

export const t = computed(() => DATA[lang.value])
export const contact = DATA.contact
export const name = DATA.name
export const photo = DATA.photo
export const cvFile = computed(() => t.value.cvFile)

export const otherLang = computed(() => (lang.value === 'en' ? 'PT' : 'EN'))
export const themeIcon = computed(() => (theme.value === 'dark' ? '☀' : '☾'))

export function toggleLang() {
  lang.value = lang.value === 'en' ? 'pt' : 'en'
}

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

export const languages = computed(() => {
  return t.value.languages.map((l) => {
    const filled = Math.round(l.value / 10)
    const cells = Array.from({ length: 10 }, (_, i) => ({
      filled: i < filled,
    }))
    return { name: l.name, level: l.level, cells }
  })
})
