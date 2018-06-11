import { database } from '../../plugins/firebase'

export default {
  state: {
    post: null
  },
  mutations: {
    setPost (state, payload) {
      state.post = payload
    }
  },
  actions: {
    getAllPost ({commit}, payload) {
      database.ref('posts/').on('value', function (snapshot) {
        commit('setPost', snapshot.val())
      })
    },
    getLastPost ({ commit }, payload) {
      database.ref('posts/2/').on('value', function (snapshot) {
        commit('setPost', snapshot.val())
      })
    }
  },
  getters: {
    post (state) {
      return state.post
    }
  }
}
