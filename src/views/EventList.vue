<template>
  <section>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
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
import store from '@/store'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store.dispatch('event/fetchEvents', { page: currentPage }).then(() => {
    routeTo.params.page = currentPage
    next()
  })
}
export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
    console.log('This unused parameter from eventlist', routeFrom)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
    console.log('This unused parameter from eventlist', routeFrom)
  },
  computed: {
    ...mapState(['event', 'user']),
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    }
  }
}
</script>

<style></style>
