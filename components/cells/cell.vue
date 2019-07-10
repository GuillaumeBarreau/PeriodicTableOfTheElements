<template>
  <div
    class="item--cell"
  >
    <p class="data--cell--number">
      {{ objectElement.atomicNumber ? objectElement.atomicNumber : NULL }}
    </p>
    <p class="data--cell--symbol">
      {{ objectElement.symbol ? objectElement.symbol : '' }}
    </p>
    <p class="data--cell--name">
      {{ objectElement.name ? objectElement.name : '' }}
    </p>
    <p class="data--cell--mass">
      {{ fixedNumber(objectElement.atomicMassReduc || objectElement.atomicMass) }}
    </p>
  </div>
</template>

<style>
.item--cell {
  list-style: none;
  font-size: .8vw;
  font-weight: 700;
}

.data--cell--symbol {
  font-size: calc(1vw * 1.6);
  color: rgba(255, 255, 255, .7);
}

.data--cell--number {
  font-size: calc(1vw / 1.3);
  text-align: right;
  padding-right: 2px;
}

.data--cell--mass {
  font-size: calc(1vw / 1.8);
  color: rgba(255, 255, 255, .7);
}

.data--cell--name {
  font-size: calc(1vw / 1.6);
}
</style>

<script scoped>
export default {
  props: {
    objectElement: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    fixedNumber(objectElement) {
      return objectElement
    }
  }
}
</script>
