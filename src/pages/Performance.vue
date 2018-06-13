<template>
  <q-page padding>
    <pivot-grid></pivot-grid>
  </q-page>
</template>

<script>
import PivotGrid from '../components/PivotGrid/PivotGrid'
export default {
  name: 'PagePerformance',
  components: {
    PivotGrid
  }
}
</script>

<style>
  .padItem {
    padding: 2.5rem 2.5rem;
  }
</style>
