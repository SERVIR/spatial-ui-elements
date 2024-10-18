import withNuxt from './playground/.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt({
    ...eslintPluginPrettierRecommended,
    ignores: ['node_modules', '.nuxt', 'dist', 'test', 'playground/*'],
    rules: {
        'vue/multi-word-component-names': 'off', 
    },
    languageOptions: {
        globals: {
            defineNuxtConfig: 'readonly',
        },
    },
});
