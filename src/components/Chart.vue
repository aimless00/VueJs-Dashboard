<template>
  <LineChart
    class="h-48 text-black-500 font-bold"
    :chart-data="data"
    css-classes="chart-container"
  />
</template>

<script setup>
import { computed } from "vue";
import { LineChart } from "vue-chart-3";

import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const data = computed(() => ({
  labels: ["07 Jan", "15 Jan", "23 Jan", "31 Jan"],
  datasets: [{}],
}));
</script>