<template>
    <component-doc title="SFooter">
        <template #description> SHeader is used for bottom of page. </template>
        <template #example>
            <s-footer>Right side Content</s-footer>
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
                        <td>menu</td>
                        <td>IRoute[]</td>
                        <td>
                            <pre>
[
    {
        href: 'https://servirglobal.net/privacy-terms-of-use',
        title: 'Privacy & Terms of Use',
        icon: 'mdi-shield-lock',
    },
],
                            </pre>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </v-table>
        </template>
        <template #slot>
            Use the default slot to put the content on right side of the footer.
            <pre>
  <code>&lt;s-footer&gt;Right side Content&lt;/s-footer&gt;</code>
</pre>
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
