import { defineNuxtPlugin } from '#app'
import HighchartsVue from 'highcharts-vue'

export default defineNuxtPlugin({
    name: 'highcharts-vue',
    parallel: true,
    setup(nuxtApp) {
        nuxtApp.vueApp.use(HighchartsVue)
    },
})
