import pluginVue from 'eslint-plugin-vue'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  ...pluginVue.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.vue', '**/*.ts', '**/*.mjs'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        config: './tailwind.config.mjs',
      },
    },
  },
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  },
]
