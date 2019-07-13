<template>
  <div id="app">
    <h1>Just Another Todo App</h1>
    <New />
    <List />
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
  mounted () {
    this.$store.dispatch('read')
  }
}
</script>

<style scoped>
#app {
  width: 95%;
  margin: 0 auto;
}

h1 {
  margin: 25px auto;
}
</style>
