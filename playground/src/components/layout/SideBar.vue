<template>
    <v-navigation-drawer width="400" color="primary">
        <v-list v-model:opened="groups">
            <v-list-group value="started">
                <template #activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-clipboard-text"
                        title="Getting Started"
                    />
                </template>
                <v-list-item
                    v-for="(item, i) in gettingStarted"
                    :key="i"
                    prepend-icon="mdi-puzzle"
                    :title="item.title"
                    :value="item.title"
                    :to="item.link"
                />
            </v-list-group>
            <v-list-group v-model:opened="groups" value="components">
                <template #activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-cogs"
                        title="Components"
                    />
                </template>
                <v-list-item
                    v-for="(item, i) in components"
                    :key="i"
                    prepend-icon="mdi-cube"
                    :title="item.title"
                    :value="item.title"
                    :to="item.link"
                />
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
const groups = ['started', 'components']

const gettingStarted = [
    {
        title: 'Installation',
        link: '/Getting-Started/installation',
    },
]

const components = [
    {
        title: 'SHeaderLogo',
        link: '/components/s-header-logo',
    },
    {
        title: 'SHeader',
        link: '/components/s-header',
    },
    {
        title: 'SFooter',
        link: '/components/s-footer',
    },
    {
        title: 'SLegend',
        link: '/components/s-legend',
    },
    {
        title: 'SBaseMap',
        link: '/components/s-base-map',
    },
    {
        title: 'SMapControl',
        link: '/components/s-map-control',
    },
    {
        title: 'SLocationSearch',
        link: '/components/s-location-search',
    },
    {
        title: 'SplitMap',
        link: '/components/splitmap',
    },
]
</script>

<style scoped></style>
