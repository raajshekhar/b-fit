import * as firebase from 'firebase'

export const signUserUp = ({commit}, payload) => {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
}
export const signUserIn = ({commit}, payload) => {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
}
export const signUserInGoogle = ({commit}) => {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
}
export const signUserInFacebook = ({commit}) => {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
}
export const signUserInGithub = ({commit}) => {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
}
export const signUserInTwitter = ({commit}) => {
  commit('setLoading', true)
  commit('clearError')
  firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
}
export const autoSignIn = ({commit}, payload) => {
  commit('setUser', {
    id: payload.uid,
    name: payload.displayName,
    email: payload.email,
    photoUrl: payload.photoURL
  })
}
export const resetPasswordWithEmail = ({ commit }, payload) => {
  const { email } = payload
  commit('setLoading', true)
  firebase.auth().sendPasswordResetEmail(email)
    .then(
      () => {
        commit('setLoading', false)
        console.log('Email Sent')
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
}
export const logout = ({commit}) => {
  firebase.auth().signOut()
  commit('setUser', null)
}
