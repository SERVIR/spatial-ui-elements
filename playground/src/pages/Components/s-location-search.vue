<template>
    <component-doc title="SMapControl">
        <template #description>
            SMapControl consists of control such as zoom and home button.
        </template>
        <template #example>
            <l-map
                ref="lmap"
                style="min-height: 500px"
                :zoom="zoom"
                :center="center"
                :options="{ zoomControl: false }"
            >
                <l-control position="topleft">
                    <s-location-search :lmap="lmap" />
                </l-control>

                <LTileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    layer-type="base"
                    name="OpenStreetMap"
                />
            </l-map>
            <div class="pt-4" />
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
                        <td>size</td>
                        <td>string</td>
                        <td>default</td>
                        <td>
                            size options are: x-small, small, default, large,
                            and x-large.
                        </td>
                    </tr>
                    <tr>
                        <td>rounded</td>
                        <td>string</td>
                        <td>true</td>
                        <td>
                            rounded options are: 0, xs, sm, true, lg, xl, pill,
                            circle, and shaped.
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>lmap</td>
                        <td>any</td>
                        <td />
                        <td>Required. Leaflet map reference.</td>
                    </tr>
                    <tr>
                        <td>variant</td>
                        <td>string</td>
                        <td>outlined</td>
                        <td>
                            variant options are: 'flat' | 'text' | 'elevated' |
                            'tonal' | 'outlined' | 'plain'
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </template>
    </component-doc>
</template>

<script setup lang="ts">
import { LMap, LTileLayer, LControl } from '@vue-leaflet/vue-leaflet'
import type { PointExpression } from 'leaflet'
import { ref } from 'vue'
import ComponentDoc from '~/components/layout/ComponentDoc.vue'

const lmap = ref<any>(null)
const zoom = ref(15)
const center = ref([47.21322, -1.559482] as PointExpression)
</script>
