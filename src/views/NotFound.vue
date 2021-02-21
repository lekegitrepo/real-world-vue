<template>
  <div>
    <h1>Error 404: {{ resource }} Not Found</h1>
    <router-link :to="{ name: 'events' }">Return to the Home page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
