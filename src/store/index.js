import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import shared from './shared'
import post from './post'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    shared,
    post
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./user'], () => {
    const newUser = require('./user').default
    store.hotUpdate({ modules: { user: newUser } })
  })
}

export default store
