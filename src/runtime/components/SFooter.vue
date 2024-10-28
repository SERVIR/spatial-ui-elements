<template>
    <v-footer class="bg-floor">
        <v-container>
            <v-row class="d-flex justify-space-between align-center">
                <v-col cols="12" sm="6">
                    <v-row class="pb-0">
                        <v-col class="pb-0 ml-2">
                            <nuxt-link
                                to="https://servirglobal.net/"
                                target="_blank"
                            >
                                <v-img
                                    src="/logos/servir.svg"
                                    width="200"
                                    height="50"
                                    alt="Logo"
                                />
                            </nuxt-link>
                        </v-col>
                    </v-row>
                    <v-row class="pt-2">
                        <template
                            v-for="(item, index) in props.menu"
                            :key="index"
                        >
                            <v-btn
                                variant="text"
                                :prepend-icon="item.icon"
                                class="footer__btn_text"
                                :to="item.route ? item.route : undefined"
                                :href="item.href ? item.href : undefined"
                                target="_blank"
                                >{{ item.title }}</v-btn
                            >
                            <div
                                v-if="index < props.menu.length - 1"
                                class="text-white"
                            >
                                |
                            </div>
                        </template>
                    </v-row>
                </v-col>
                <slot />
                <v-col cols="12" sm="6" />
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface IRoute {
    route: RouteLocationRaw
    href: string
    title: string
    icon: string
}
interface Props {
    menu: IRoute[]
}

const props = withDefaults(defineProps<Props>(), {
    menu: () => [
        {
            href: 'https://servirglobal.net/privacy-terms-of-use',
            title: 'Privacy & Terms of Use',
            icon: 'mdi-shield-lock',
        },
    ],
})

console.log(props.menu.length)
</script>

<style scoped>
.footer__btn_text {
    font-size: 0.5rem;
    color: rgba(29, 28, 28, 0.7);
}
</style>
