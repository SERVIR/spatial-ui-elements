<template>
    <div class="pa-5">
        <v-card>
            <v-toolbar color="primary">
                <v-app-bar-nav-icon icon="mdi-cube" />
                <v-toolbar-title>{{ propc.title }}</v-toolbar-title>
                <v-spacer />
                <v-btn
                    prepend-icon="mdi-lightbulb-outline"
                    variant="outlined"
                    class="ma-1"
                    @click="goTo(examples)"
                >
                    Example
                </v-btn>
                <v-btn
                    prepend-icon="mdi-tune-variant"
                    variant="outlined"
                    class="ma-1"
                    @click="goTo(props)"
                >
                    Props
                </v-btn>
                <v-btn
                    prepend-icon="mdi-dock-left"
                    variant="outlined"
                    class="ma-1"
                    @click="goTo(slots)"
                >
                    Slots
                </v-btn>
                <v-btn
                    prepend-icon="mdi-flash-outline"
                    variant="outlined"
                    class="ma-1"
                    @click="goTo(events)"
                >
                    Events
                </v-btn>
            </v-toolbar>

            <v-card-item class="bg-surface">
                <v-card-text>
                    <slot name="description" />
                </v-card-text>
            </v-card-item>
            <v-divider />
            <v-card-item>
                <v-toolbar>
                    <v-app-bar-nav-icon icon="mdi-lightbulb-outline" />
                    <v-toolbar-title>Example</v-toolbar-title>
                </v-toolbar>
                <v-card-text ref="example">
                    <slot name="example" />
                </v-card-text>
            </v-card-item>
            <v-card-item>
                <v-toolbar>
                    <v-app-bar-nav-icon icon="mdi-tune-variant" />
                    <v-toolbar-title>Props</v-toolbar-title>
                </v-toolbar>
                <v-card-text ref="props">
                    <slot name="prop" />
                </v-card-text>
            </v-card-item>
            <v-card-item>
                <v-toolbar>
                    <v-app-bar-nav-icon icon="mdi-dock-left" />
                    <v-toolbar-title>Slots</v-toolbar-title>
                </v-toolbar>
                <v-card-text ref="slots">
                    <slot name="slot" />
                </v-card-text>
            </v-card-item>
            <v-card-item>
                <v-toolbar>
                    <v-app-bar-nav-icon icon="mdi-flash-outline" />
                    <v-toolbar-title>Event</v-toolbar-title>
                </v-toolbar>
                <v-card-text ref="events">
                    <slot name="event" />
                </v-card-text>
            </v-card-item>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from '#imports'
import { useGoTo } from 'vuetify'
const examples = ref(undefined)
const props = ref(undefined)
const slots = ref(undefined)
const events = ref(undefined)

const goTo = useGoTo()

interface Props {
    title: string
}

const propc = withDefaults(defineProps<Props>(), {
    title: '',
})
</script>

<style scoped></style>
