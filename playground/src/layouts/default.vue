<template>
    <v-layout>
        <v-app-bar color="primary" class="pl-4 pr-4">
            <v-app-bar-nav-icon icon="mdi-view-dashboard-variant" to="/"/>
            <v-app-bar-title to="/">Spatial UI Elements</v-app-bar-title>

            <v-spacer></v-spacer>
            <v-btn
                icon="mdi-github"
                variant="elevated"
                href="https://github.com/SERVIR/spatial-ui-elements"
                target="_blank"
            >
            </v-btn>
        </v-app-bar>
        <side-bar />

        <v-main style="flex-grow: 1">
            <nuxt-page />
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import SideBar from '~/components/layout/SideBar.vue'
</script>

<style scoped></style>
