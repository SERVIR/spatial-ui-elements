<template>
    <div style="min-height: calc(100vh - 112px)">
        <v-container>
            <v-divider />

            <v-row no-gutters>
                <v-col cols="12" sm="6">
                    <v-card variant="flat">
                        <v-card-item>
                            <highcharts :options="chartOptions1" />
                        </v-card-item>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card variant="flat">
                        <v-card-item>
                            <highcharts :options="chartOptions" />
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HighCharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(HighCharts)

const chartOptions = ref({
    chart: {
        type: 'bar',
        height: 500,
    },

    title: {
        text: "Guyana's Coastal Regions Mangrove Change",
        align: 'center',
    },
    xAxis: {
        categories: [
            'Barima-Waini (Region 1)',
            'Pomeroon-Supenaam (Region 2)',
            'Essequibo Islands-West Demerara (Region 3)',
            'Demerara-Mahaica (Region 4)',
            'Mahaica-Berbice (Region 5)',
            'East Berbice-Corentyne (Region 6)',
        ],
        title: {
            text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Area (ha)',
            align: 'high',
        },
        labels: {
            overflow: 'justify',
        },
        gridLineWidth: 0,
    },
    tooltip: {
        valueSuffix: ' ha',
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
            },
            groupPadding: 0.1,
        },
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            name: '2015-2020 Gains',
            data: [3177, 641, 202, 141, 505, 179],
            color: '#228B22',
        },
        {
            name: '2015-2020 Losses',
            data: [8410, 1329, 609, 64, 389, 1341],
            color: '#FF7F50',
        },
        {
            name: '2010-2015 Gains',
            data: [0, 1183, 631, 115, 557, 1018],
            color: '#9ACD32',
        },
        {
            name: '2010-2015 Losses',
            data: [0, 1062, 681, 36, 447, 616],
            color: '#FF7043',
        },
    ],
})

const chartOptions1 = ref({
    chart: {
        type: 'column',
        height: 500,
    },
    title: {
        text: "Guyana's Coastal Region Mangrove Extent",
        align: 'center',
    },
    xAxis: {
        categories: [
            'Region 1',
            'Region 2',
            'Region 3',
            'Region 4',
            'Region 5',
            'Region 6',
        ],
        crosshair: true,
        accessibility: {
            description: 'Regions',
        },
    },
    credits: {
        enabled: false,
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Mangrove Extent (ha)',
        },
    },
    tooltip: {
        valueSuffix: ' ha',
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
    },
    series: [
        {
            name: '2010',
            data: [554, 4818, 1303, 93, 1227, 1907],
            color: '#FF7F50',
        },
        {
            name: '2015',
            data: [18641, 4938, 1254, 172, 1337, 2309],
            color: '#66FFCC',
        },
        {
            name: '2020',
            data: [13407, 4251, 848, 249, 1453, 1146],
            color: '#66CCFF',
        },
    ],
})
</script>

<style lang="scss" scoped></style>
