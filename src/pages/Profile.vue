<template>
  <q-page padding>
    <div>
      <q-list separator>
      <q-collapsible letter="Bienvenue" right-avatar="statics/boy-avatar.png" label="Pseudo">
        <div>
          <section class="bg-secondary">
          <h4 class="q-title"><b >Nom :</b> {{ user.name }}</h4>
        </section>
          <section class="bg-warning">
            <h4 class="q-title" ><b >Email :</b> {{ user.email }}</h4>
          </section>
          <div>
            <q-uploader color="secondary" :url="url" />
            <q-btn color="secondary" icon-right="send" label="Mettre à jour sa photo" />
          </div>
        </div>
      </q-collapsible>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageProfile',
  data () {
    return {
      headings: [
        {label: 'Light 112sp', 'class': 'q-display-4', equivalent: 'h1', color: 54, weight: 300},
        {label: 'Regular 56sp', 'class': 'q-display-3', equivalent: 'h2', color: 54, weight: 400},
        {label: 'Regular 45sp', 'class': 'q-display-2', equivalent: 'h3', color: 54, weight: 400},
        {label: 'Regular 34sp', 'class': 'q-display-1', equivalent: 'h4', color: 54, weight: 400},
        {label: 'Regular 24sp', 'class': 'q-headline', equivalent: 'h5', color: 87, weight: 400},
        {label: 'Medium 20sp', 'class': 'q-title', equivalent: 'h6', color: 87, weight: 500},
        {label: 'Regular 16sp', 'class': 'q-subheading', color: 87, weight: 400},
        {label: 'Medium 14sp', 'class': 'q-body-2', color: 87, weight: 500},
        {label: 'Regular 14sp', 'class': 'q-body-1', color: 87, weight: 400},
        {label: 'Regular 12sp', 'class': 'q-caption', color: 54, weight: 400}
      ],
      weights: [
        'thin', 'light', 'regular', 'medium', 'bold', 'bolder'
      ]
    }
  },
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
    .shadow-1{
      padding: 5px 15px 15px;
      border-radius: 2px;
      width: 500px;
      max-width: 90vw;
    }
  div{
    margin: 3px;
  }
</style>
