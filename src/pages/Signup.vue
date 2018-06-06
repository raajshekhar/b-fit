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
      <q-field
        helper="Mot de passe"
        :error="!$v.repeatPassword.sameAsPassword"
        error-label="Please typethe same password"
        count
      >
        <q-input dark color="secondary"  v-model="$v.repeatPassword.$model" type="password"/>
      </q-field>
      <div class="column docs-btn">
        <q-btn color="negative" icon-right="https" label="Sign up" class="btn-fixed-width"  @click="submit"/>
        <q-btn color="negative" icon-right="https" label="Sign up with google" class="btn-fixed-width" @click.prevent="onSigninGoogle"/>
        <q-btn color="negative" icon-right="https" label="Sign up with facebook" class="btn-fixed-width"  @click="submit"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'PageSignup',
  data () {
    return {
      password: '',
      email: '',
      repeatPassword: ''
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
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    }
  },
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
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
