<template>
  <div class="text-black md:p-6">
    <slot name="image" />
    <h2 class="h1">{{ title }}</h2>
    <p class="hsub"><slot /></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
