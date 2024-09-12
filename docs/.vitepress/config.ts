import { defineConfig } from 'vitepress'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
    lang: 'en-US',
    title: 'Spatial UI Elements',
    description: 'Spatial UI Elements',

    themeConfig: {
        nav: [
            // { text: 'Example', link: '/example' },

            // {
            //   text: 'Dropdown Menu',
            //   items: [
            //     { text: 'Item A', link: '/item-1' },
            //     { text: 'Item B', link: '/item-2' },
            //     { text: 'Item C', link: '/item-3' },
            //   ],
            // },

            // ...
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [{ text: 'Installation', link: '/installation' }],
            },
            {
                text: 'Components',
                items: [{ text: 'SHeader', link: '/components/s-header' }],
            },
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/SERVIR/spatial-ui-elements',
            },
        ],
    },
})
