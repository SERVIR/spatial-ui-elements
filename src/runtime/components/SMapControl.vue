<template>
    <v-row no-gutters :class="`flex-${props.flex}`">
        <v-col>
            <v-btn
                :size="props.size"
                :rounded="props.rounded"
                flat
                color="primary"
                :variant="props.variant"
                @click="$emit('update:zoom', props.zoom + props.step)"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>

        <v-col>
            <v-btn
                :size="props.size"
                :rounded="props.rounded"
                flat
                color="primary"
                :variant="props.variant"
                @click="$emit('update:zoom', props.zoom - props.step)"
            >
                <v-icon>mdi-minus</v-icon>
            </v-btn>
        </v-col>
        <v-col>
            <v-btn
                :size="props.size"
                :rounded="props.rounded"
                flat
                color="primary"
                :variant="props.variant"
                @click="updateCenter"
            >
                <v-icon>mdi-home</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import type { PointExpression } from 'leaflet'
interface Props {
    flex?: string
    size?: string
    rounded?: string
    step?: number
    zoom?: number
    center: PointExpression
    lmap: any
    variant: string
}
const props = withDefaults(defineProps<Props>(), {
    flex: 'column',
    size: 'default',
    rounded: 'true',
    zoom: 6,
    step: 1,
    variant: 'outlined',
})

const updateCenter = () => {
    if (!props.lmap) return
    props.lmap.leafletObject.setView(props.center, props.zoom)
}

defineEmits(['update:zoom', 'update:center'])
</script>

<style scoped></style>
