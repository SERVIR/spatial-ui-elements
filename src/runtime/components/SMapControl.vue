<template>
    <v-row no-gutters>
        <v-col>
            <v-btn
                :size="props.size"
                :rounded="props.rounded"
                flat
                color="primary"
                variant="outlined"
                @click="$emit('update:zoom', props.zoom + props.step)"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
        <v-divider :vertical="props.horizontal" color="transparent" />

        <v-col>
            <v-btn
                :size="props.size"
                :rounded="props.rounded"
                flat
                color="primary"
                variant="outlined"
                @click="$emit('update:zoom', props.zoom - props.step)"
            >
                <v-icon>mdi-minus</v-icon>
            </v-btn>
        </v-col>
        <v-divider :vertical="props.horizontal" color="transparent" />
        <v-col>
            <v-btn
                :size="props.size"
                :rounded="props.rounded"
                flat
                color="primary"
                variant="outlined"
                @click="updateCenter"
            >
                <v-icon>mdi-home</v-icon>
            </v-btn>
        </v-col>
       
    </v-row>
</template>

<script setup lang="ts">
import type { PointExpression } from 'leaflet';
interface Props {
    horizontal?: boolean
    size?: string
    rounded?: string
    step?: number
    zoom?: number
    center: PointExpression
    lmap: any
}
const props = withDefaults(defineProps<Props>(), {
    horizontal: false,
    size: 'default',
    rounded: 'true',
    zoom: 6,
    step: 1,
})

const updateCenter = () => {
    if (!props.lmap) return
    props.lmap.leafletObject.setView(props.center, props.zoom)
}

defineEmits(['update:zoom', 'update:center'])
</script>

<style scoped></style>
