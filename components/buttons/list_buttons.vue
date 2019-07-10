<template>
  <ul class="content--button">
    <!-- <li class="item--button">
      <div class="item--button--icon item--button--menu">
        <img class="svg--menu" :src="svgMenu" alt="">
      </div>
      <button-element class="item--button--label item--button--menu">
        Menu
      </button-element>
    </li> -->
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
       <img class="svg--elements" :src="svgElements" alt="">
      </div>
      <button-element :class="`item--button--label item--button--${replaceString(blockName)}`">
        {{ blockName }}
      </button-element>
    </li>
  </ul>
</template>

<script>
import buttonElement from '~/components/buttons/button.vue'
import svgMenu from '~/static/icons-menu.svg'
import svgElements from '~/static/chemical-diagram.svg'

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
  data() {
    return {
      svgMenu,
      svgElements
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

.item--button:hover + [class*='--post-transition_metal'] {
  background: 10px solid red!important;
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

.item--button--menu {
  background: white;
  border: 0;
}

.svg--menu {
  width: 50px;
}

.svg--elements {
  width: 20px;
  opacity: .8;
}
</style>
