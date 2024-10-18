<template>
    <div>
        <v-app-bar v-bind="props.configuration" class="s-header">
            <v-container class="d-flex align-center" style="height: 100%">
                <v-row class="d-flex align-center">
                    <v-col class="d-flex align-center" cols="8" md="4">
                        <v-row class="d-flex align-center pa-0">
                            <v-col
                                class="d-flex align-center justify-end"
                                cols="2"
                            >
                                <nuxt-link
                                    to="/"
                                    class="text-white text-decoration-none d-flex align-centers"
                                >
                                    <v-img
                                        :src="props.imageIcon"
                                        cover
                                        width="35px"
                                        max-width="35px"
                                    />
                                </nuxt-link>
                            </v-col>
                            <v-col
                                class="d-flex align-center justify-start pa-0"
                                cols="10"
                            >
                                <v-app-bar-title class="text-h6" to="/">
                                    <nuxt-link
                                        to="/"
                                        class="text-white text-decoration-none d-flex align-centers"
                                    >
                                        <b>{{ props.title }}</b>
                                    </nuxt-link>
                                </v-app-bar-title>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col
                        v-if="mdAndUp"
                        class="d-flex align-center justify-end"
                        cols="4"
                        md="8"
                    >
                        <v-btn
                            v-for="(item, index) in props.menu"
                            :key="index"
                            :prepend-icon="item.icon"
                            :to="item.route"
                            >{{ item.title }}</v-btn
                        >
                    </v-col>

                    <v-col
                        v-else
                        class="d-flex align-center justify-end"
                        cols="4"
                        md="8"
                    >
                        <v-btn icon @click.stop="drawer = !drawer">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            temporary
            location="right"
            width="300"
            color="primary"
        >
            <v-card color="primary" elevation="0">
                <v-card-title class="text-wrap">
                    <b>{{ props.title }}</b></v-card-title
                >
                <v-divider/>

                <v-list density="compact" nav>
                    <v-list-item
                        v-for="(item, index) in props.menu"
                        :key="index"
                        :prepend-icon="item.icon"
                        :title="item.title"
                        :to="item.route"
                    />
                </v-list>
            </v-card>
        </v-navigation-drawer>
    </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import type { RouteLocationRaw } from 'vue-router'
const { mdAndUp } = useDisplay()

interface IRoute {
    route: RouteLocationRaw
    title: string
    icon: string
}

interface Props {
    title: string
    imageIcon?: string
    menu: IRoute[]
    configuration?: object
}

const props = withDefaults(defineProps<Props>(), {
    menu: () => [],
    imageIcon: '/logos/logo.png',
    configuration: () => ({
        elevation: 5,
        density: 'comfortable',
        color: 'primary',
    }),
})

const drawer = ref(false)
</script>

<style scoped></style>
