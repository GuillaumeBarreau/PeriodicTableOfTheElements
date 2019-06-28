<template>
  <section class="container">
    <modal
      v-if="modalIsOpen"
      class="modal--content"
      :data-element="dataElement"
      @closedModal="changedStateModalIsOpen"
    />
    <list-buttons
      :table-elements="tableElements"
      @selectBlockNameByElements="changedStateBlockNameIsSelect"
    />
    <list-cells
      :disabled-style-blockname="disabledStyleBlockname"
      :table-elements="tableElements"
      :select-elements-by-block-name="selectElementsByBlockName"
      @openedModal="changedStateModalIsOpen"
    />
  </section>
</template>

<script>
import tableOfElements from '~/static/table_of_elements.json'
import listCells from '~/components/cells/list_cells.vue'
import listButtons from '~/components/buttons/list_buttons.vue'
import modal from '~/components/modals/modal_element.vue'

export default {
  components: {
    listCells,
    listButtons,
    modal
  },
  data() {
    return {
      tableElements: tableOfElements,
      dataModalElement: false,
      modalIsOpen: false,
      disabledStyleBlockname: false,
      dataElement: {},
      selectElementsByBlockName: ''
    }
  },
  methods: {
    changedStateModalIsOpen(dataElement) {
      this.modalIsOpen = !this.modalIsOpen
      this.dataElement = dataElement
    },
    changedStateBlockNameIsSelect(blockName) {
      // si le bouton selectionné est le même que l'action précédente
      // alors on repasse disabledStyleBlockname à false.
      if (blockName === this.selectElementsByBlockName) {
        this.disabledStyleBlockname = false
        this.selectElementsByBlockName = ''
        return
      }
      this.disabledStyleBlockname = true
      this.selectElementsByBlockName = blockName
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vh;
  align-items: center;
  text-align: center;
  background-color: #272825;
  display: flex;
}

.modal--content {
  position: absolute;
  background: rgba(56, 56, 56, 0.74);
  top:0;
  bottom:0;
  right:0;
  left:0;
}

</style>
