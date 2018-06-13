<template>
  <q-page padding>
    <h1 >Login Success</h1>
    <h4 ><b >Name :</b> {{ user.name }}</h4>
    <h4 ><b >Email :</b> {{ user.email }}</h4>
  </q-page>
</template>

<script>
export default {
  name: 'PageProfile',
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style>
</style>
