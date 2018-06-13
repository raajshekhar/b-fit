<template>
    <div>
      <q-stepper ref="stepper">
        <!-- Step: -->
        <q-step default title="First Step" subtitle="Workout">
          <q-toggle v-model="check2" color="secondary" label="New workout ?" />
          <q-datetime color="secondary" v-model="date6" type="datetime" float-label="Date & Time" inverted/>
          <div v-if="check2">
            <p class="q-display-2 text-center text-secondary">New Workout</p>
            <q-input color="secondary" v-model="text" float-label="Float label & placeholder" placeholder="Placeholder"/>
          </div>
          <div v-if="!check2">
            <p class="q-display-2 text-center text-secondary">My Workout</p>
            <q-list link>
              <q-item tag="label">
                <q-item-side>
                  <q-radio color="secondary" v-model="list" val="one" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Push Up Routine</q-item-tile>
                  <q-item-tile sublabel>Diamond push up, Regular push up, Decline push up</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item tag="label">
                <q-item-side>
                  <q-radio color="secondary" v-model="list" val="two" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Pull Up Routine</q-item-tile>
                  <q-item-tile sublabel>Pull Up, Pull Up Army, Pull Up army</q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </div>
        </q-step>
        <!-- Step: -->
        <q-step title="Step 2" subtitle="Exercices">
          <q-select
            multiple
            chips
            color="secondary"
            float-label="Pick Exercice"
            v-model="multipleSelect"
            :options="exerciceOption"
          />
          <q-list>
            <q-item v-if="multipleSelect.length != 0" tag="label" v-for="exercice in multipleSelect" :key="exercice.id">
              <q-item-main>
                <q-item-tile label>{{ exercice }}</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-step>
        <!-- Step: -->
        <q-step title="Step 3" subtitle="Valider">Recap workout</q-step>
        <q-stepper-navigation>
          <q-btn
            flat
            @click="$refs.stepper.previous()"
            label="Back"
          />
          <q-btn
            @click="$refs.stepper.next()"
            label="Next"
          />
        </q-stepper-navigation>
      </q-stepper>

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
      check2: false,
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
      list: '',
      exerciceOption: [
        {
          id: 1,
          label: 'Google',
          icon: 'email',
          value: 'goog'
        },
        {
          id: 2,
          label: 'Facebook',
          icon: 'chat',
          description: 'Enables communication',
          value: 'fb'
        },
        {
          id: 3,
          label: 'Twitter',
          inset: true,
          rightIcon: 'live_help',
          value: 'twtr'
        },
        {
          id: 4,
          label: 'Apple Inc.',
          inset: true,
          stamp: '10 min',
          value: 'appl'
        },
        {
          id: 5,
          label: 'Oracle',
          description: 'Some Java for today?',
          icon: 'unarchive',
          rightIcon: 'widgets',
          value: 'ora'
        }
      ],
      multipleSelect: ['goog', 'twtr']
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
