<template>
  <section>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
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
    this.$store.dispatch('fetchEvents')
  },
  computed: mapState(['events'])
}
</script>

<style></style>
