<template>
    <component-doc title="SHeader">
        <template #description>
            SHeader is used for top level heading which consists application
            icon, name and some menu items.
        </template>
        <template #example>
            <s-header
                title="Application Title"
                :configuration="configuration"
                :menu="menu"
            />
            <div class="pt-4"></div>
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
                        <td></td>
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
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>imageIcon</td>
                        <td>string</td>
                        <td>SERVIR Logo as default</td>
                        <td></td>
                    </tr>
                </tbody>
            </v-table>
        </template>
    </component-doc>
</template>

<script setup lang="ts">
import ComponentDoc from '~/components/layout/ComponentDoc.vue'
const configuration = {
    elevation: 5,
    density: 'comfortable',
    color: 'primary',
}

const menu = [
    {
        title: 'Home',
        to: '/',
        icon: 'mdi-home',
    },
    {
        title: 'Dashboard',
        to: '/',
        icon: 'mdi-view-dashboard',
    },
]
</script>

<style lang="scss" scoped>
:deep(.s-header) {
    position: inherit !important;
}
</style>
