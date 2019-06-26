<template>
  <div
    class="item--cell"
    @click="click"
  >
    <p class="data--cell--number">
      {{ objectElement.atomicNumber }}
    </p>
    <p class="data--cell--symbol">
      {{ objectElement.symbol }}
    </p>
    <p class="data--cell--name">
      {{ objectElement.name }}
    </p>
    <p class="data--cell--mass">
      {{ fixedNumber(objectElement.atomicMass) }}
    </p>
  </div>
</template>

<style>
.item--cell{
  list-style: none;
  font-size: .8vw;
  font-weight: 700;
}

.data--cell--symbol {
  font-size: calc(1vw * 1.3);
}

.data--cell--number {
  font-size: calc(1vw- 1.3);
  text-align: right;
  padding-right: 2px;
}

.data--cell--mass {
  font-size: calc(1vw- 1.3);
}
</style>

<script scoped>
export default {
  props: {
    click: {
      type: Function,
      default: () => {}
    },
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
