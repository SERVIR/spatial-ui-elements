<template>
    <v-app-bar class="s-header-logo mt-1" v-bind="props.configuration">
        <v-container fluid>
            <v-row>
                <v-col class="d-flex justify-start align-center">
                    <v-sheet
                        v-for="(item, index) in props.left"
                        :key="index"
                        class="ma-1 responsive-img"
                    >
                        <v-img :src="item.imgSrc" :width="item.width" />
                    </v-sheet>
                </v-col>
                <v-col class="d-flex justify-end align-center">
                    <v-sheet
                        v-for="(item, index) in props.right"
                        :key="index"
                        class="ma-1 responsive-img"
                    >
                        <v-img :src="item.imgSrc" :width="item.width" />
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
//import { VAppBar } from 'vuetify/lib/components/VAppBar'
import { VAppBar } from 'vuetify/components/VAppBar'

interface ImageProps {
    imgSrc: string
    width: number
}

interface Props {
    left?: ImageProps[]
    right?: ImageProps[]
    configuration?: object // Optional Vuetify config props
}

// Use withDefaults to define default props
const props = withDefaults(defineProps<Props>(), {
    left: () => [
        {
            imgSrc: '/logos/usaid.jpg',
            width: 140,
        },
        {
            imgSrc: '/logos/nasa.jpg',
            width: 80,
        },
    ],
    right: () => [],
    configuration: () => ({
        flat: true,
        density: 'comfortable',
        elevation: 0,
    }),
})
</script>

<style lang="scss" scoped>
.responsive-img {
    max-width: 200px;
}

@media (max-width: 650px) {
    .responsive-img {
        max-width: 80px !important;
    }
}

@media (max-width: 400px) {
    .responsive-img {
        max-width: 40px !important;
    }
}
</style>
