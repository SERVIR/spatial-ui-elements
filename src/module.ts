import {
    defineNuxtModule,
    addPlugin,
    createResolver,
    addComponentsDir,
} from '@nuxt/kit'
import * as L from 'leaflet';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'spatial-ui-elements',
        configKey: 'spatialUiElements',
    },
    defaults: {},
    setup(_options, _nuxt) {
        const resolver = createResolver(import.meta.url)
        const runtimeDir = resolver.resolve('./runtime')
        const isDevelopment =
            runtimeDir.endsWith('src/runtime') ||
            runtimeDir.endsWith('src\\runtime')

        const styleExtension = isDevelopment ? '.scss' : '.css'

        _nuxt.options.css.push(
            resolver.resolve('./runtime/assets/scss/splitmap' + styleExtension)
        )
        _nuxt.hook('modules:before', () => {
            _nuxt.options.modules.push('@nuxtjs/leaflet');
          });

        addPlugin(resolver.resolve('./runtime/plugins/splitmap'))
        addPlugin(resolver.resolve('./runtime/plugins/highcharts.client'))
        addComponentsDir({
            path: resolver.resolve('./runtime/components'),
            global: true,
            pathPrefix: false,
        })

        _nuxt.hook('nitro:config', (nitroConfig) => {
            nitroConfig.publicAssets ||= []
            nitroConfig.publicAssets.push({
                dir: resolver.resolve('./runtime/public'),
                maxAge: 60 * 60 * 24 * 365, // 1 year in seconds
            })
        })
    },
})
