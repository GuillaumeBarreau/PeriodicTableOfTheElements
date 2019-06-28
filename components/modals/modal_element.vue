<template>
  <div>
    <p @click="closedModal">
      CLOSED
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    closedModal() {
      this.$emit('closedModal')
    }
  }
}
</script>

<style scoped>
div {
  z-index: 100;
  color: white;
}
</style>
