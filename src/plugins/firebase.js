import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBxx6jNekMSdxFgae48X5EPXSU7BCd8ID0',
  authDomain: 'b-fit-572b6.firebaseapp.com',
  databaseURL: 'https://b-fit-572b6.firebaseio.com',
  projectId: 'b-fit-572b6',
  storageBucket: 'b-fit-572b6.appspot.com',
  messagingSenderId: '724954804441'
}

const connection = Firebase.initializeApp(config)

const DB = connection.database()
const AUTH = connection.auth()

export default function install (Vue, { router }) {
  AUTH.onAuthStateChanged(user => {
    if (!user) {
      this.$store.dispatch('autoSignIn', user)
    }
  })

  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    },
    $auth: {
      get () {
        return AUTH
      }
    }
  })
}
