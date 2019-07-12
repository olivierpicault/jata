<template>
  <div id="app">
    <h1>ToDo</h1>
    <New @add="onNew" />
    <List :initial-items="items" />
  </div>
</template>

<script>
import New from './New.vue'
import List from './List.vue'

export default {
  components: {
    New,
    List
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    onNew (content) {
      this.items.splice(0, 0, content)
    }
  }
}
</script>

<style>
#app {
  width: 95%;
  margin: 0 auto;
}
</style>
