import withNuxt from './playground/.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt({
    ...eslintPluginPrettierRecommended,
    ignores: ['node_modules', '.nuxt', 'dist', 'playground/*', 'test'],
})
