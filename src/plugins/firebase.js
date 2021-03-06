import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBxx6jNekMSdxFgae48X5EPXSU7BCd8ID0',
  authDomain: 'b-fit-572b6.firebaseapp.com',
  databaseURL: 'https://b-fit-572b6.firebaseio.com',
  projectId: 'b-fit-572b6',
  storageBucket: 'b-fit-572b6.appspot.com',
  messagingSenderId: '724954804441'
}

export const fireApp = firebase.initializeApp(config)

export const AUTH = fireApp.auth()

export const database = fireApp.database()

export default ({ app, router, store, Vue }) => {
  Vue.prototype.$auth = AUTH
  Vue.prototype.$fireApp = fireApp
  Vue.prototype.$database = database
  AUTH.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('autoSignIn', user)
    }
  })
}
