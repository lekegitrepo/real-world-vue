<template>
  <div>
    <button v-on="$listeners" class="button">
      <slot />
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
