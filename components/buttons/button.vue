<template>
  <button
    class="item--button"
    @click="showData"
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
  },
  methods: {
    showData() {
      this.modalIsOpen = !this.modalIsOpen
      // TODO
    }
  }
}
</script>

<style>

.item--button {
  text-transform: uppercase;
}
</style>
