<template>
  <q-page padding>
    <main-objective> </main-objective>
    <pie-chart></pie-chart>
  </q-page>
</template>

<script>
import MainObjective from '../components/objective/MainObjective'
import PieChart from '../components/PieChart/PieChart'
export default {
  name: 'PageDashBoard',
  components: {
    MainObjective,
    PieChart
  }
}
</script>

<style>
</style>
