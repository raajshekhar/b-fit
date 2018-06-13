<template>
  <q-page padding>
    <q-timeline color="secondary" class="bg-tertiary" style="padding: 24px; margin-top: 50px;">
      <q-timeline-entry color="negative" heading>Septembre, 2018</q-timeline-entry>
      <q-timeline-entry
        v-if="loading"
        v-for="post in getAllPost"
        :key="post.id"
        :title="post.title"
        :subtitle="post.author +', '+post.date"
        :side="direction(post.id)"
      >
        <div>
           {{ post.content }}
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
export default {
  name: 'PageBlog',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    getAllPost: function () {
      return this.$store.getters.post
    }
  },
  mounted: function () {
    this.$store.dispatch('getAllPost')
    console.log(this.getAllPost)
    this.loading = true
  },
  methods: {
    direction: function (id) {
      return (id % 2 === 0 ? 'left' : 'right')
    }
  }
}
</script>

<style>
</style>
