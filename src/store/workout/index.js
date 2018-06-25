import { database } from '../../plugins/firebase'

export default {
  state: {
    workout: null
  },
  mutations: {
    setWorkout (state, payload) {
      state.workout = payload
    }
  },
  actions: {
    getAllWorkout ({commit}, payload) {
      database.ref('workouts/').on('value', function (snapshot) {
        commit('setWorkout', snapshot.val())
      })
    },
    addWorkout ({commit}, payload) {
      const newWorkout = {
        workoutName: payload.workoutName,
        date: payload.date,
        exercices: payload.exercices
      }
      database.ref('workouts/').push(newWorkout).then((snap) => {
        console.log(snap)
        commit('setWorkout', newWorkout)
      }).catch((snap) => {
        console.log(snap)
        // commit('setWorkout', newWorkout)
      }
      )
    }
  },
  getters: {
    workout (state) {
      return state.workout
    }
  }
}
