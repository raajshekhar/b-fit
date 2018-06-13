<template>
  <q-page padding>
    <scheduler :user="user"></scheduler>
  </q-page>
</template>

<script>
import Scheduler from '../components/Scheduler/Scheduler'
export default {
  name: 'PageScheduler',
  components: {
    Scheduler
  },
  user () {
    return this.$store.getters.user
  }
}
</script>

<style>
</style>
