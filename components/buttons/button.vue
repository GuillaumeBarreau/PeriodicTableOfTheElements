<template>
  <button
    class="content--button"
  >
    <slot />
  </button>
</template>

<script>

export default {
  data() {
    return {
      modalIsOpen: false
    }
  }
}
</script>

<style>

.content--button {
  text-transform: uppercase;
  padding-left: 0;
  z-index: 50;
}
</style>
