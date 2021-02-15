<template>
  <section>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </section>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'
export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(resp => {
        this.events = resp.data
      })
      .catch(error => {
        console.log('There wan an error: ' + error.response)
      })
  }
}
</script>

<style></style>
