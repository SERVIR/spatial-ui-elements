import { defineNuxtPlugin } from '#app'
import * as HighchartsVue from 'highcharts-vue'

export default defineNuxtPlugin({
    name: 'highcharts-vue',
    parallel: true,
    setup(nuxtApp) {
        nuxtApp.vueApp.use(HighchartsVue.default)
    },
})
