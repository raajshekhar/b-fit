<template>
  <q-page padding class="row justify-center items-center">
    <div class="bg-primary dark-example">
      <q-field
        field="Email"
        helper="Utilise pour la connection"
        :error="$v.email.$error"
        error-label="Please type a valid email"
        count
      >
        <q-input dark color="secondary" v-model="email" type="email" suffix="@gmail.com" @blur="$v.email.$touch"/>
      </q-field>

      <q-field
        helper="Mot de passe"
        :error="$v.password.$error"
        error-label="Please type a valid password"
        count
      >
        <q-input dark color="secondary"  v-model="$v.password.$model" type="password" @blur="$v.password.$touch"/>
      </q-field>
      <div class="column docs-btn">
        <q-btn color="negative" icon-right="https" label="Sign in" class="btn-fixed-width"  @click="submit"/>
        <q-btn color="negative" icon-right="https" label="Sign in with google" class="btn-fixed-width" @click.prevent="onSigninGoogle"/>
        <q-btn color="negative" icon-right="https" label="Sign in with facebook" class="btn-fixed-width"  @click="submit"/>
        <q-btn color="red" icon-right="email" label="Rest Password" class="btn-fixed-width" @click="reset" @click.prevent="onResetPassword"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'PageSignin',
  data () {
    return {
      password: '',
      email: ''
    }
  },
  methods: {
    submit () {
      console.log(this.$v.$invalid)
      if (this.$v.$invalid) {
        this.$q.notify({
          message: 'Formulaire invalide !',
          position: 'top'
        })
      }
    },
    reset () {
      console.log(this.$v.email.$error)
      if (this.$v.email.$error) {
        this.$q.notify({
          message: 'Email requis',
          position: 'top'
        })
      }
    },
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    onResetPassword () {
      if (this.email === '') {
        return this.$store.dispatch('setError', {message: 'Email can not be blnak'})
      }
      this.$store.dispatch('resetPasswordWithEmail', {email: this.email})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/Auth/profile')
      }
    }
  }
}
</script>

<style>
  .dark-example {
    padding: 5px 15px 15px;
    border-radius: 2px;
    width: 500px;
    max-width: 90vw;
  }
  .docs-btn, .q-btn {
    margin: 5px;
  }
  .btn-fixed-width {
    min-width: 100%;
  }
</style>
