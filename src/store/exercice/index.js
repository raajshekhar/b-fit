import { database } from '../../plugins/firebase'

export default {
  state: {
    exercice: null
  },
  mutations: {
    setExercice (state, payload) {
      state.exercice = payload
    }
  },
  actions: {
    getAllExercice ({commit}, payload) {
      database.ref('exercices/').on('value', function (snapshot) {
        commit('setExercice', snapshot.val())
      })
    }
  },
  getters: {
    exercice (state) {
      return state.exercice
    }
  }
}
