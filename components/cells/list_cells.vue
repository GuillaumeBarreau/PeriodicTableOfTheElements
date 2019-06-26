<template>
  <ul class="content--elements">
    <li
      v-for="(element, index) in tableElements"
      :key="index"
      class="item--element"
      :class="`item--element--${replaceString(element.groupBlock) }`"
    >
      <cell
        :click="() => showData(element)"
        class="item--cell"
        :object-element="element"
      />
    </li>
  </ul>
</template>

<style>

</style>

<script>
import cell from '~/components/cells/cell.vue'

export default {
  components: {
    cell
  },
  props: {
    tableElements: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    showData(dataElement) {
      console.log(dataElement)
    },
    replaceString(type) {
      return type.replace(/ /g, '_')
    }
  }
}
</script>

<style scoped>

ul {
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-gap: .5vw;
  margin: 0;
  padding: 1rem;
  padding-top: 2rem;
}

.item--element{
  list-style: none;
}

.item--element:nth-of-type(2){
  grid-column-start: 18;
}

.item--element:nth-of-type(72),
.item--element:nth-of-type(104){
  grid-column-start: 4;
}

.item--element:nth-of-type(5),
.item--element:nth-of-type(13){
  grid-column-start: 13;
}

.item--element:nth-of-type(57) {
  grid-column-start: 4;
  grid-row-start: 8;
}

.item--element:nth-of-type(58) {
  grid-column-start: 5;
  grid-row-start: 8;
}

.item--element:nth-of-type(59) {
  grid-column-start: 6;
  grid-row-start: 8;
}

.item--element:nth-of-type(60) {
  grid-column-start: 7;
  grid-row-start: 8;
}

.item--element:nth-of-type(61) {
  grid-column-start: 8;
  grid-row-start: 8;
}

.item--element:nth-of-type(62) {
  grid-column-start: 9;
  grid-row-start: 8;
}

.item--element:nth-of-type(63) {
  grid-column-start: 10;
  grid-row-start: 8;
}

.item--element:nth-of-type(64) {
  grid-column-start: 11;
  grid-row-start: 8;
}

.item--element:nth-of-type(65) {
  grid-column-start: 12;
  grid-row-start: 8;
}

.item--element:nth-of-type(66) {
  grid-column-start: 13;
  grid-row-start: 8;
}

.item--element:nth-of-type(67) {
  grid-column-start: 14;
  grid-row-start: 8;
}

.item--element:nth-of-type(68) {
  grid-column-start: 15;
  grid-row-start: 8;
}

.item--element:nth-of-type(69) {
  grid-column-start: 16;
  grid-row-start: 8;
}

.item--element:nth-of-type(70) {
  grid-column-start: 17;
  grid-row-start: 8;
}

.item--element:nth-of-type(71) {
  grid-column-start: 18;
  grid-row-start: 8;
}

.item--element:nth-of-type(89) {
  grid-column-start: 4;
  grid-row-start: 9;
}

.item--element:nth-of-type(90) {
  grid-column-start: 5;
  grid-row-start: 9;
}

.item--element:nth-of-type(91) {
  grid-column-start: 6;
  grid-row-start: 9;
}

.item--element:nth-of-type(92) {
  grid-column-start: 7;
  grid-row-start: 9;
}

.item--element:nth-of-type(93) {
  grid-column-start: 8;
  grid-row-start: 9;
}

.item--element:nth-of-type(94) {
  grid-column-start: 9;
  grid-row-start: 9;
}

.item--element:nth-of-type(95) {
  grid-column-start: 10;
  grid-row-start: 9;
}

.item--element:nth-of-type(96) {
  grid-column-start: 11;
  grid-row-start: 9;
}

.item--element:nth-of-type(97) {
  grid-column-start: 12;
  grid-row-start: 9;
}

.item--element:nth-of-type(98) {
  grid-column-start: 13;
  grid-row-start: 9;
}

.item--element:nth-of-type(99) {
  grid-column-start: 14;
  grid-row-start: 9;
}

.item--element:nth-of-type(100) {
  grid-column-start: 15;
  grid-row-start: 9;
}

.item--element:nth-of-type(101) {
  grid-column-start: 16;
  grid-row-start: 9;
}

.item--element:nth-of-type(102) {
  grid-column-start: 17;
  grid-row-start: 9;
}

.item--element:nth-of-type(103) {
  grid-column-start: 18;
  grid-row-start: 9;
}

</style>
