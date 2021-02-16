<template>
  <section>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'events', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page</router-link
      >
      <template v-if="hasNextPage"> | </template>
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'events', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page</router-link
    >
  </section>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  created() {
    this.perPage = 3
    this.$store.dispatch('fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    ...mapState(['events', 'eventsTotal', 'user']),
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.eventsTotal > this.page * this.perPage
    }
  }
}
</script>

<style></style>
