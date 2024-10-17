<template>
    <component-doc title="SHeaderLogo">
        <template #description>
            SHeaderLogo is used for top level heading which consists application
            icon of USAID and NASA on left and placeholder for icons in right.
        </template>
        <template #example>
            <s-header-logo />
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
                        <td>left</td>
                        <td>ImageProps[]</td>
                        <td>
                            <pre>
[
    {
        imgSrc: '/logos/usaid.jpg',
        width: 140,
    },
    {
        imgSrc: '/logos/nasa.jpg',
        width: 80,
    },
]
                            </pre>
                        </td>
                        <td>
                            USAID and NASA logos are default but can be changed.
                            <u
                                ><em>ImageProps</em> has <em>imgSrc</em> and
                                <em>width</em>.</u
                            >
                        </td>
                    </tr>
                    <tr>
                        <td>right</td>
                        <td>ImageProps[] </td>
                        <td>
                            <pre></pre>
                        </td>
                        <td></td>
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
                </tbody>
            </v-table>
        </template>
    </component-doc>
</template>

<script setup lang="ts">
import ComponentDoc from '~/components/layout/ComponentDoc.vue'

</script>

<style lang="scss" scoped>
:deep(.s-header-logo) {
    position: inherit !important;
}
</style>
