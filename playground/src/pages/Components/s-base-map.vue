<template>
    <component-doc title="SBaseMap">
        <template #description>
            SBaseMap offers a basemap component for the map, including options
            such as CartoDB, OpenStreetMap, Google Satellite, Terrain, Dark
            Gray, and OpenLayers.
        </template>
        <template #example>
            <l-map
                ref="lmap"
                style="min-height: 500px"
                :zoom="6"
                :center="[47.21322, -1.559482]"
                :options="{ zoomControl: false }"
            >
                <l-control position="topleft">
                    <s-base-map :lmap="lmap" />
                </l-control>
                <LTileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    layer-type="base"
                    name="OpenStreetMap"
                />
            </l-map>
        </template>
        <template #prop>
            <v-table>
                <thead class="bg-floor">
                    <tr>
                        <th>Props</th>
                        <th>Type</th>
                        <th>Defaults</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>lmap</td>
                        <td>any</td>
                        <td />
                        <td>
                            <i>lmap</i> props contains the reference to leaflet
                            map.
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </template>
    </component-doc>
</template>

<script setup lang="ts">
import { LMap, LTileLayer, LControl } from '@vue-leaflet/vue-leaflet'

import ComponentDoc from '~/components/layout/ComponentDoc.vue'
const lmap = ref<any>(null)
</script>

<style lang="scss" scoped></style>
