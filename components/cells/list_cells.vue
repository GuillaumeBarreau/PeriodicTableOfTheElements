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
      const className = `item--element--${this.replaceString(element.groupBlock)}`

      return (this.disabledStyleBlockname && this.selectElementsByBlockName !== element.groupBlock)
        ? className.concat(' disabled-element')
        : className
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
  max-width: 72px;
  word-wrap: break-word;
  border-radius: 4px;
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

.item--element:nth-child(n+1):nth-child(-n+56) {
  order: 1
}

.item--element:nth-child(n+72):nth-child(-n+103) {
  order: 2
}

.item--element:nth-child(n+104):nth-child(-n+118) {
  order: 3
}

.item--element:nth-child(n+57):nth-child(-n+71) {
  order: 4
}

.item--element:nth-child(n+89):nth-child(-n+103) {
  order: 5
}

.item--element:nth-of-type(57),
.item--element:nth-of-type(89) {
  grid-column-start: 4;
}

</style>
