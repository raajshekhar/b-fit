<template>
    <div>
      <q-stepper ref="stepper" v-if="loading">
        <!-- Step: -->
        <q-step default title="Step 1" subtitle="Workout">
          <q-toggle v-model="check" color="secondary" label="New workout ?" />
          <q-datetime color="secondary" v-model="date" type="datetime" float-label="Date & Time" inverted/>
          <div v-if="check">
            <p class="q-display-2 text-center text-secondary">New Workout</p>
            <q-input color="secondary" v-model="workoutName" float-label="Float label & placeholder" placeholder="Placeholder"/>
          </div>
          <div v-else>
            <p class="q-display-2 text-center text-secondary">My Workout</p>
            <q-list link>
              <q-item tag="label" v-for="workout in getAllWorkout" :key="workout.id" >
                <q-item-side>
                  <q-radio color="secondary" v-model="list" :val="workout" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>{{ workout.workoutName }}</q-item-tile>
                  <q-item-tile sublabel > <span v-for="exercice in workout.exercices" :key="exercice.id">{{ exercice.workoutName }} </span></q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </div>
        </q-step>
        <!-- Step: -->
        <q-step title="Step 2" subtitle="Exercices">
          <q-select
            filter
            multiple
            chips
            color="secondary"
            float-label="Pick Exercice"
            v-model="exercices"
            :options="getAllExercice"
          />
          <q-list>
            <q-item v-if="exercices.length != 0" tag="label" v-for="exercice in exercices" :key="exercice.id">
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
          <q-btn
            @click="addWorkout"
            label="Save"
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
      workoutName: '',
      loading: false,
      check: false,
      date: null,
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
      exerciceOption: this.getAllExercice,
      exercices: []
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
    addWorkout () {
      console.log({
        workoutName: this.workoutName,
        date: this.date,
        exercices: this.exercices
      })
      this.$store.dispatch('addWorkout', {
        workoutName: this.workoutName,
        date: this.date,
        exercices: this.exercices
      })
    }
  },
  computed: {
    getSelectWorkout: function () {
      let tmp = []
      if (!this.check) {
        tmp = this.list.exercices
      } else {
        tmp = []
      }
      return tmp
    },
    getAllWorkout: function () {
      return this.$store.getters.workout
    },
    getAllExercice: function () {
      return this.$store.getters.exercice
    }
  },
  mounted: function () {
    this.$store.dispatch('getAllWorkout')
    this.$store.dispatch('getAllExercice')
    // console.log(this.getAllExercice)
    this.loading = true
  }
}
</script>

<style scoped>
</style>
