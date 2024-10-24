export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: false,
    modules: [
        '../src/module',
        '@nuxt/eslint',
        'vuetify-nuxt-module',
        '@nuxtjs/leaflet',
    ],
    devtools: { enabled: true },
    compatibilityDate: '2024-08-02',
    imports: {
        autoImport: true,
    },
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions: {
            theme: {
                defaultTheme: 'light',
                variations: {
                    colors: ['primary', 'secondary', 'surface', 'accent'],
                    lighten: 5,
                    darken: 5,
                },
                themes: {
                    light: {
                        dark: false,
                        colors: {
                            // background: '#FFFFFF',
                            primary: '#008080',
                            // secondary: '#E34234',
                            // white: '#FFFFFF',
                            floor: '#DCDCDC',
                        },
                    },
                },
            },
        },
    },
})
