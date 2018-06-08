<template>
  <q-layout view="hHh Lpr lff"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header reveal>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <a href="">
          <img class="logo" alt="Bfit logo" src="~assets/bfit-logo-black.png">
        </a>
        <q-toolbar-title to="/suivi">
          Authentification
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Footer
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      v-if="userIsAuthenticated"
    >
      <q-scroll-area class="fit q-pa-sm">
        <q-list no-border link inset-separator>
          <q-list-header>Mon compte</q-list-header>
          <q-item to="/Auth/profile">
            <q-item-side icon="account_circle" />
            <q-item-main label="Profile" sublabel="Mon Profile" />
          </q-item>
          <q-item @click="onLogout" >
            <q-item-side icon="today" />
            <q-item-main @click="onLogout" label="Logout" sublabel="Se déconnecter" />
          </q-item>
          <q-list-header>Mon suivi</q-list-header>
          <q-item to="/suivi/dashboard">
            <q-item-side icon="dashboard" />
            <q-item-main label="Dashbord" sublabel="Accéder a votre tableau de bord" />
          </q-item>
          <q-item to="/suivi/planning">
            <q-item-side icon="today" />
            <q-item-main label="Planning" sublabel="Plannifier vos seances" />
          </q-item>
          <q-collapsible group="somegroup" icon="trending_up" label="Performance" sublabel="Suivez vos performances">
            <q-item to="/suivi/performance">
              <q-item-side icon="trending_up" />
              <q-item-main label="Performance" sublabel="" />
            </q-item>
            <q-item to="/suivi/performance/input">
              <q-item-side icon="trending_up" />
              <q-item-main label="Data Input" sublabel="" />
            </q-item>
            <q-item to="/suivi/performance/muscle">
              <q-item-side icon="trending_up" />
              <q-item-main label="Muscle" sublabel="" />
            </q-item>
            <q-item to="/suivi/performance/objective">
              <q-item-side icon="trending_up" />
              <q-item-main label="Objectif" sublabel="" />
            </q-item>
          </q-collapsible>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutAuth',
  data () {
    return {
      leftDrawer: false
    }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .logo {
    max-height: 50px;
  }
</style>
