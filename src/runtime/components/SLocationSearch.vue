<template>
    <div class="s-location-search search-container">
        <v-btn
            :variant="props.variant"
            :size="props.size"
            :rounded="props.rounded"
            color="primary"
            @click="toggleSearch"
        >
            <v-icon>mdi-map-search</v-icon>
        </v-btn>

        <div v-if="showSearch" class="input-wrapper">
            <v-text-field
                v-model="searchQuery"
                label="Enter address"
                variant="solo"
                color="primary"
                density="compact"
                clearable
                hide-details
                dense
                class="search-input"
                @keyup.enter="fetchLocations"
            />

            <v-list
                v-if="locations.length"
                class="search-results"
                density="compact"
            >
                <v-list-item
                    v-for="(location, index) in locations"
                    :key="index"
                    class="pa-0"
                    color="primary"
                    @click="zoomToLocation(location)"
                >
                    <template #prepend>
                        <div class="pa-2">
                            <v-icon class="">mdi-map-marker-radius</v-icon>
                        </div>
                    </template>
                    <v-list-item-title class="text-no-wrap">{{
                        location.display_name
                    }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
    lmap: any
    size?: string
    rounded?: string
    variant: 'outlined' | 'flat' | 'text' | 'elevated' | 'tonal' | 'plain'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'default',
    rounded: 'true',
    variant: 'outlined',
})

const searchQuery = ref<string>('')
const locations = ref<Array<{ display_name: string }>>([])
const showSearch = ref<boolean>(false)

const toggleSearch = () => {
    showSearch.value = !showSearch.value
    if (!showSearch.value) {
        searchQuery.value = '' // Clear the search query when hiding
        locations.value = [] // Clear the results when hiding
    }
}

const fetchLocations = async () => {
    if (!searchQuery.value) return
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery.value)}&format=json&limit=5`
        )
        if (!response.ok) throw new Error('Failed to fetch locations')

        const data = await response.json()
        locations.value = data
    } catch (error) {
        console.error('Error fetching locations:', error)
    }
}
const zoomToLocation = (location: any) => {
    if (!props.lmap) return
    console.log(
        'zoom to location',
        location?.boundingbox,
        props.lmap.leafletObject.getBounds()
    )
    try {
        const bounds = [
            [
                parseFloat(location.boundingbox[0]),
                parseFloat(location.boundingbox[2]),
            ],
            [
                parseFloat(location.boundingbox[1]),
                parseFloat(location.boundingbox[3]),
            ],
        ]

        props.lmap.leafletObject.flyToBounds(bounds, {
            duration: 1.75,
            easeLinearity: 0.25,
        })
    } catch (error) {
        console.error('Invalid bounding box:', error)
    }
}
</script>

<style scoped>
.search-container {
    display: flex;
    align-items: center;
    position: relative;
}

.input-wrapper {
    position: relative;
    margin-left: 8px;
}

.search-input {
    width: 400px;
}

.search-results {
    position: absolute;
    min-width: 400px;
}
</style>
