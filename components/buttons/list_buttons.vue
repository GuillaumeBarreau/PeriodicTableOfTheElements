<template>
  <ul>
    <li v-for="(element, index) in FiltresNameOfTheTableElements" :key="index">
      <button-element :class="`item--element--${replaceString(element)}`">
        {{ element }}
      </button-element>
    </li>
  </ul>
</template>

<script>
import buttonElement from '~/components/buttons/button.vue'
export default {
  components: {
    buttonElement
  },
  props: {
    tableElements: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    FiltresNameOfTheTableElements() {
      return [...new Set(
        this.tableElements
          .map(element => element.groupBlock)
      )]
    }
  },
  methods: {
    replaceString(type) {
      return type.replace(/ /g, '_')
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1rem;
  list-style: none;
}

[class*="item--element--"]{
  padding: 1vw;
}
</style>
