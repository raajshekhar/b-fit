<template>
  <div>
    <div class="row gutter-xs">
      <div class="col-12">
        <q-input inverted v-model="model" class="no-margin" float-label="Objectif long terme" />
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input inverted v-model="model" class="no-margin" float-label="OMT1" />
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input inverted v-model="model" class="no-margin" float-label="OMT2" />
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input inverted v-model="model" class="no-margin" float-label="OMT3" />
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input inverted v-model="model" class="no-margin" float-label="OMT4" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-xs-12 col-sm-1">
        <q-input inverted v-model="model" class="no-margin" float-label="OCT1" />
      </div>
      <div class="col-12">
        <q-progress :percentage="progressModel"   stripe animate />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainObective',
  data () {
    return {
      progressModel: 50,
      model: ''
    }
  }
}
</script>

<style scoped>

</style>
