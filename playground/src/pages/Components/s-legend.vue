<template>
    <component-doc title="SLegend">
        <template #description>
            SLegend provides information about the layer, serving as a legend.
        </template>
        <template #example>
            <div style="width: 300px">
                <s-legend :legends="legends" />
            </div>
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
                        <td>legends</td>
                        <td>LegendItem[]</td>
                        <td />
                        <td>
                            <i>
                                <pre>
    interface LegendItem {
        color: string
        name: number
    }
</pre
                                >
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td>string</td>
                        <td>200px</td>
                        <td />
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>string</td>
                        <td>Legend</td>
                        <td />
                    </tr>
                </tbody>
            </v-table>
        </template>
    </component-doc>
</template>

<script setup lang="ts">
import ComponentDoc from '~/components/layout/ComponentDoc.vue'

const legends = [
    { color: '#228B22', name: 'Extent' },
    { color: '#9ACD32', name: 'Change (Gain)' },
    { color: '#FF7F50', name: 'Change (Loss)' },
    { color: '#20B2AA', name: 'Restored Area' },
    { color: '#DAA520', name: 'Selected Polygon' },
]
</script>

<style lang="scss" scoped></style>
