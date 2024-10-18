import {
    defineNuxtModule,
    addPlugin,
    createResolver,
    addComponentsDir,
} from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'spatial-ui-elements',
        configKey: 'spatialUiElements',
    },
    defaults: {},
    setup(_options, _nuxt) {
        const resolver = createResolver(import.meta.url)

        addPlugin(resolver.resolve('./runtime/plugin'))
        addComponentsDir({
            path: resolver.resolve('./runtime/components'),
            global: true,
            pathPrefix: false,
        })

        _nuxt.hook('nitro:config', (nitroConfig) => {
            // Ensure `publicAssets` is an array and push the new asset directory configuration
            nitroConfig.publicAssets ||= []

            // Add directory and maxAge to public assets
            nitroConfig.publicAssets.push({
                dir: resolver.resolve('./runtime/public'),
                maxAge: 60 * 60 * 24 * 365, // 1 year in seconds
            })
        })
    },
})
