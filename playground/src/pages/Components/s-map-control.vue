<template>
    <component-doc title="SAp">
        <template #description>
            SHeader is used for top level heading which consists application
            icon, name and some menu items.
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
                    <s-map-control v-model:zoom="zoom" v-model:center="center" :lmap="lmap"/>
                </l-control>
                <l-control position="topright">
                    <s-map-control v-model:zoom="zoom" v-model:center="center" :horizontal="true" :lmap="lmap"/>
                </l-control>
                <l-control position="bottomleft">
                    <s-map-control v-model:zoom="zoom" v-model:center="center" rounded="circle" :horizontal="true" :lmap="lmap"/>
                </l-control>
                <l-control position="bottomright">
                    <s-map-control v-model:zoom="zoom" v-model:center="center" rounded="pill" :horizontal="false" :lmap="lmap"/>
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
                        <td>title</td>
                        <td>string</td>
                        <td />
                        <td>Requred</td>
                    </tr>
                    <tr>
                        <td>configuration</td>
                        <td>object</td>
                        <td>
                            <pre>
{
    elevation: 5,
    density: 'comfortable',
    color: 'primary',
}
                            </pre>
                        </td>
                        <td>
                            Refer to
                            <NuxtLink
                                to="https://vuetifyjs.com/en/api/v-app-bar/"
                                >app-bar</NuxtLink
                            >
                            api of vuetify for more configrations.
                        </td>
                    </tr>
                    <tr>
                        <td>menu</td>
                        <td>IRoute</td>
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <td>imageIcon</td>
                        <td>string</td>
                        <td>SERVIR Logo as default</td>
                        <td />
                    </tr>
                </tbody>
            </v-table>
        </template>
    </component-doc>
</template>

<script setup lang="ts">
import L from 'leaflet'
import { LMap, LTileLayer, LControl } from '@vue-leaflet/vue-leaflet'
import type { PointExpression } from 'leaflet'
import { ref } from 'vue'
import ComponentDoc from '~/components/layout/ComponentDoc.vue'

const lmap = ref<any>(null)
const zoom = ref(15)
const center = ref(<PointExpression>[47.21322, -1.559482])
</script>
