<template>
  <ul class="content--button">
    <li
      v-for="(blockName, index) in FiltresBlockNameOfTheTableElements"
      :key="index"
      class="item--button"
      @click="showBlockNameElements(blockName)"
    >
      <div
        class="item--button--icon"
        :class="`--${replaceString(blockName)}`"
      >
        IC
      </div>
      <button-element :class="`item--button--label item--button--${replaceString(blockName)}`">
        {{ blockName }}
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
    FiltresBlockNameOfTheTableElements() {
      return [...new Set(
        this.tableElements
          .map(element => element.groupBlock)
      )]
    }
  },
  methods: {
    replaceString(type) {
      return type.replace(/ /g, '_')
    },
    showBlockNameElements(blockName) {
      this.$emit('selectBlockNameByElements', blockName)
    }
  }
}
</script>

<style scoped>

.content--button {
  align-self: center;
  list-style: none;
  text-align: left;
}

.item--button--icon {
  align-items: center;
  border: 0;
  border-bottom: .5px solid #272825;
  display: flex;
  justify-content: center;
  min-height: 3.13rem;
  min-width: 3.13rem;
  z-index: 100;
  font-weight: 800;
}

.item--button {
  cursor: pointer;
  display: flex;
  position: relative;
}

.item--button--icon:hover + .item--button--label {
  transform: translate(calc(0% + 3.13rem), 0);
}

.item--button--label {
   font-weight: 800;
   height: 3.13rem;
   left: - 18.75rem;
   position: absolute;
   text-align: center;
   transform: translate(-300%, 0);
   transition: .3s;
   width: 11.25rem;
}

</style>
