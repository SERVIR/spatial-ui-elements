<template>
    <v-expansion-panels v-model="panel">
        <v-expansion-panel color="primary">
            <v-expansion-panel-title
                v-slot="{ expanded }"
                expand-icon="mdi-map"
                collapse-icon="mdi-close"
                density=""
            >
                <b>{{ expanded ? 'BaseMap' : ' ' }}</b>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-card
                    class="mx-auto"
                    :width="smAndDown ? '300px' : '700px'"
                    variant="flat"
                >
                    <v-row>
                        <v-col
                            v-for="(layer, index) in layers"
                            :key="index"
                            cols="4"
                            class="pa-1"
                        >
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card
                                    class="pa-0"
                                    color="grey-lighten-4"
                                    v-bind="props"
                                    @click="changeBaseLayer(layer.title)"
                                >
                                    <v-img
                                        :aspect-ratio="16 / 9"
                                        :src="layer.image"
                                        cover
                                    >
                                        <v-expand-transition>
                                            <div
                                                v-if="isHovering"
                                                class="d-flex transition-fast-in-fast-out bg-primary-darken-1 v-card--reveal text-h7 align-center justify-center"
                                                style="height: 100%"
                                            >
                                                {{ layer.title }}
                                            </div>
                                        </v-expand-transition>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-card>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup lang="ts">
import L from 'leaflet'

import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()
interface Prop {
    lmap: any
}
const prop = withDefaults(defineProps<Prop>(), {})
const panel = ref(null)

const layers = [
    {
        title: 'CartoDB',
        image: '/basemaps/cartodb.png',
        layer: L.tileLayer(
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            {
                attribution: '&copy; CartoDB',
                'layer-type': 'base',
            }
        ),
    },
    {
        title: 'OpenStreetMap',
        image: '/basemaps/openstreetmap.png',
        layer: L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution: '&copy; OpenStreetMap contributors',
            }
        ),
    },

    {
        title: 'Google Satellite',
        image: '/basemaps/google.png',
        layer: L.tileLayer(
            'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
            {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                attribution: 'Tiles Â© Map data Â©2019 Google',
            }
        ),
    },
    {
        title: 'Terrain',
        image: '/basemaps/terrain.png',
        layer: L.tileLayer(
            'https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token={accessToken}',
            {
                attribution:
                    '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                minZoom: 0,
                maxZoom: 22,
                subdomains: 'abcd',
                accessToken:
                    'rU9sOZqw2vhWdd1iYYIFqXxstyXPNKIp9UKC1s8NQkl9epmf0YpFF8a2HX1sNMBM',
                opacity: 1,
            }
        ),
    },
    {
        title: 'Dark Gray',
        image: '/basemaps/dark.png',
        layer: L.tileLayer.wms(
            'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
            {
                format: 'image/jpeg',
                transparent: true,
                attribution:
                    'Tiles Â© <a href="https://services.arcgisonline.com/ArcGIS/' +
                    'rest/services/Reference/Specialty/DeLorme_World_Base_Map/MapServer">ArcGIS</a>',
                opacity: 1,
            }
        ),
    },
    {
        title: 'Open Topo Layer',
        image: '/basemaps/topo.png',
        layer: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attribution:
                'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        }),
    },
]

const changeBaseLayer = (layerTitle) => {
    if (!prop.lmap) return

    layers.forEach((layer) => {
        if (prop.lmap.leafletObject.hasLayer(layer.layer)) {
            prop.lmap.leafletObject.removeLayer(layer.layer)
        }
    })

    const newLayer = layers.find((layer) => layer.title === layerTitle)
    if (newLayer) {
        prop.lmap.leafletObject.addLayer(newLayer.layer)
    }
}
</script>

<style scoped lang="scss">
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.7;
    position: absolute;
    width: 100%;
}
</style>
