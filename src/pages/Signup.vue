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
              :after="[
                {
                  icon: 'warning',
                  error: true,
                  handler () {
                    // do something...
                  }
                }
              ]"
      >
        <q-input dark color="secondary"  v-model="confirmPassword" type="password" :after="[{icon: 'done', condition: password.length >= 5, handler () {}}]" @blur="$v.password.$touch"/>
      </q-field>
      <div class="column docs-btn">
        <q-btn color="negative" icon-right="https" label="Sign up" class="btn-fixed-width"  @click="submit"/>
        <q-btn color="negative" icon-right="https" label="Sign up with google" class="btn-fixed-width"  @click="submit"/>
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
      confirmPassword: ''
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
    }
  },
  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: sameAs('password')
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
