<template>
  <section class="container">
    <list-cells :table-elements="tableElements" />
    <list-buttons :table-elements="tableElements" />
  </section>
</template>

<script>
import tableOfElements from '~/static/table_of_elements.json'
import listCells from '~/components/cells/list_cells.vue'
import listButtons from '~/components/buttons/list_buttons.vue'

export default {
  components: {
    listCells,
    listButtons
  },
  data() {
    return {
      tableElements: tableOfElements
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
}
</style>
