<template>
  <div>
    <button v-on="$listeners" class="button" :class="buttonClass">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String
    }
  }
}
</script>

<style scoped></style>
