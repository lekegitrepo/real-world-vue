<template>
  <button
    class="flex-shrink-0 w-full h-10 px-2 py-1 text-sm border rounded font-semibold"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    kind: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'transparent',
          'primary',
          'primary-solid',
          'secondary',
          'secondary-solid',
          'dashed'
        ].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
