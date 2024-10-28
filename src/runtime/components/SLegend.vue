<template>
    <v-expansion-panels v-model="panel" class="slegend">
        <v-expansion-panel color="primary">
            <v-expansion-panel-title
                v-slot="{ expanded }"
                expand-icon="mdi-map-legend"
                collapse-icon="mdi-close"
            >
                <b>{{ expanded ? props.title : ' ' }}</b>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-card :width="props.width" variant="flat">
                    <v-card-item color="transparent">
                        <v-row direction="column" no-gutters>
                            <v-col
                                v-for="legend in legends"
                                :key="legend.name"
                                cols="12"
                            >
                                <v-container class="pa-0">
                                    <v-row align="center" no-gutters>
                                        <v-col cols="auto" class="px-0">
                                            <div
                                                class="color-indicator"
                                                :style="{
                                                    backgroundColor:
                                                        legend.color,
                                                }"
                                            />
                                        </v-col>

                                        <v-col class="pl-4">{{
                                            legend.name
                                        }}</v-col>
                                    </v-row>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-card-item>
                </v-card>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()
const panel = ref([1, 0])

interface LegendItem {
    color: string
    name: number
}

interface Props {
    legends: LegendItem[]
    width?: string
    title?: string
}

const props = withDefaults(defineProps<Props>(), {
    width: '200px',
    title: 'Legend',
})

watch(
    smAndDown,
    () => {
        if (smAndDown.value) {
            panel.value = []
        } else {
            panel.value = [1, 0]
        }
    },
    { immediate: true }
)
</script>

<style scoped lang="scss">
.color-indicator {
    width: 20px;
    height: 20px;
}

.v-row.no-gutters {
    margin: 0;
}

.v-col.px-0 {
    padding-left: 0;
    padding-right: 0;
}
</style>
