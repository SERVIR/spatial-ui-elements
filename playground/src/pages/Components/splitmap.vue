<template>
    <div>
        <l-map
            ref="lmap"
            style="min-height: 500px"
            :zoom="zoom"
            :center="center"
            @ready="onMapReady"
        >
            <LTileLayer
                ref="layer1"
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                layer-type="base"
                name="OpenStreetMap"
            />
            <LTileLayer
                ref="layer2"
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            />
        </l-map>
    </div>
</template>

<script setup lang="ts">
import type L from 'leaflet'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import type { PointExpression } from 'leaflet'
import { ref } from 'vue'

// Map references
const lmap = ref<any>(null)
const zoom = ref(15)
const center = ref([47.21322, -1.559482] as PointExpression)

const { $SplitMap } = useNuxtApp()

const splitControl = ref<L.Control | null>(null)
const layer1 = ref(null)
const layer2 = ref(null)

const controlOptions = ref({ thumbSize: 42, padding: 0 })

const onMapReady = () => {
    afterMapReady()
}

const afterMapReady = () => {
    try {
        if ($SplitMap && lmap.value?.leafletObject) {
            splitControl.value = $SplitMap(
                layer1.value.leafletObject,
                layer2.value.leafletObject,
                controlOptions.value
            )

            splitControl.value?.addTo(lmap.value.leafletObject)
        } else {
            console.error('SplitMap or lmap is not available')
        }
    } catch (error) {
        console.error('Error initializing SplitMap control:', error)
    }
}
</script>

<style lang="scss"></style>
