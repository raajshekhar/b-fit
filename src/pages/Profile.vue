<template>
  <q-page padding>
      <q-card>
          <q-card-title class="q-display-1">
              <h1 >Vous êtes connecté avec succès</h1>
          </q-card-title>
          <q-card-separator />
          <q-card-main>
              <section class="bg-secondary">
              <h4 ><b >Nom :</b> {{ user.name }}</h4>
              </section>
              <section class="bg-warning">
              <h4 ><b >Email :</b> {{ user.email }}</h4>
              </section>
              <q-uploader color="secondary" :url="url" />
              <q-btn color="secondary" icon-right="send" label="Sauvegarder" />
          </q-card-main>
      </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageProfile',
  computed: {
    user: function () {
      return this.$store.getters.user
    }
  }

}
</script>

<style>
    section{
        color: #ffffff;
        border-radius: 3px;
        padding-left: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
        margin-bottom: 20px;
    }
</style>
