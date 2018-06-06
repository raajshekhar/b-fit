<template>
    <div>
      <p class="caption">Workout</p>
      <q-datetime color="primary" v-model="date6" type="datetime" float-label="Date & Time" />
      <p class="caption">On a dark background</p>
      <div class="dark-example">
        <q-field
          icon="vibration"
          helper="Pick one type"
          label="Séances"
        >
          <q-option-group
            dark
            type="radio"
            color="secondary"
            v-model="group"
            :options="[
              { label: 'Battery too low', value: 'bat' },
              { label: 'Friend request', value: 'friend' },
              { label: 'Picture uploaded', value: 'upload', color: 'red' }
            ]"
          />
        </q-field>
      </div>
      <q-btn color="primary" @click="submit">Submit</q-btn>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          round
          color="primary"
          @click="alert"
          icon="add"
        />
      </q-page-sticky>
    </div>
</template>

<script>
import { date } from 'quasar'
import './docs-input.styl'
const today = new Date()
const { startOfDate, addToDate, subtractFromDate } = date

export default {
  data () {
    return {
      date6: null,
      lazy: null,
      error: true,
      warning: false,
      today,
      tomorrow: addToDate(today, { days: 1 }),
      yesterday: subtractFromDate(today, { days: 1 }),
      state: new Date(),
      defaultValue: startOfDate(today, 'year'),
      radio1: 'two',
      radio2: 'one',
      radio3: 'three',
      group: 'upload',
      list: ''
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    },
    error2 (val) {
      if (val) {
        this.warning2 = false
      }
    },
    warning2 (val) {
      if (val) {
        this.error2 = false
      }
    }
  },
  methods: {
    alert () {
      alert('test')
    }
  }
}
</script>

<style scoped>
</style>
