<template>
    <div>
        <l-map
            ref="lmap"
            style="min-height: 500px"
            :zoom="zoom"
            :center="center"
            @ready="hookUpDraw"
        >
            <LTileLayer
                ref="layer1"
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                layer-type="base"
                name="OpenStreetMap"
            />
        </l-map>
    </div>
</template>

<script setup lang="ts">
import type L from 'leaflet'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import type { PointExpression } from 'leaflet'
import { ref } from 'vue'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'

// Map references
const lmap = ref<any>(null)
const zoom = ref(15)
const center = ref([47.21322, -1.559482] as PointExpression)
const mapObject = ref(null)
const mapReady = ref(false)

const geofence = ref([])

const hookUpDraw = async () => {
    mapObject.value = lmap.value.leafletObject
    mapReady.value = true
    mapObject.value.pm.setLang('en_gb')
    mapObject.value.pm.addControls({
        position: 'topleft',
        drawCircle: false,
    })
    mapObject.value.on('pm:drawstart', ({ workingLayer }) => {
        workingLayer.on('pm:vertexadded', (e) => {
            console.log(e)
            geofence.value.push(e)
        })
    })
    mapObject.value.on('pm:drawend', () => {
        console.log(geofence)
    })
}

</script>

<style scoped></style>
