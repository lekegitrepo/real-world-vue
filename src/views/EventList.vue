<template>
  <section>
    <h1>Events Listing</h1>
    <EventCard />
    <router-link :to="{ name: 'event', params: { id: '1' } }"
      >Show Event</router-link
    >
  </section>
</template>

<script>
import EventCard from '@/components/EventCard'
export default {
  components: {
    EventCard
  }
}
</script>

<style></style>
