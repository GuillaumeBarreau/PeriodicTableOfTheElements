<template>
  <ul class="content--elements">
    <li
      v-for="(element, index) in tableElements"
      :key="index"
      class="item--element"
      :class="buildClassName(element)"
      @click="showModal(element)"
    >
      <cell
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
    },
    disabledStyleBlockname: {
      type: Boolean,
      default: () => false
    },
    selectElementsByBlockName: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    replaceString(type) {
      return type.replace(/ /g, '_')
    },
    showModal(element) {
      this.$emit('openedModal', element)
    },
    buildClassName(element) {
      let className = `item--element--${this.replaceString(element.groupBlock)}`
      className = (this.disabledStyleBlockname && this.selectElementsByBlockName !== element.groupBlock)
        ? className.concat(' disabled-element')
        : className
      return className
    }
  }
}
</script>

<style scoped>

.content--elements {
  display: grid;
  grid-gap: .5vw;
  grid-template-columns: repeat(18, 1fr);
  margin: 0;
  z-index: 25;
  padding-top: 2rem;
  padding: 5rem;
  padding-left: 3rem;
}

.disabled-element {
  border: 1px solid white;
  color: white;
  opacity: .25;
}

.item--element {
  list-style: none;
  max-width: 70px;
  word-wrap: break-word;
  border-radius: 3px;
  cursor: pointer;
}

.item--element:not([class*='disabled']):hover {
  transform: scale(1.8);
  z-index: 10;
}

.item--element:nth-of-type(2) {
  grid-column-start: 18;
}

.item--element:nth-of-type(72),
.item--element:nth-of-type(104) {
  grid-column-start: 4;
}

.item--element:nth-of-type(5),
.item--element:nth-of-type(13) {
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
