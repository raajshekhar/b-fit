import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  }
})

if (process.env.DEV && module.hot) {
  module.hot.accept(['./user'], () => {
    const newShowcase = require('./user').default
    store.hotUpdate({ modules: { showcase: newShowcase } })
  })
}

export default store
