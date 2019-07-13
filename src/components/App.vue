<template>
  <div id="app">
    <h1>Just Another Todo App</h1>
    <New @add="onNew" />
    <List
      :initial-items="items"
      @delete="onRemove" />
  </div>
</template>

<script>
import New from './New.vue'
import List from './List.vue'

import db from './../js/db'

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
  created () {
    db.collection('tasks').get().then(data => {
      data.forEach(doc => {
        this.items.push({
          id: doc.id,
          content: doc.data().content
        })
      })
    })
  },
  methods: {
    onNew (task) {
      this.items.splice(0, 0, task)
    },
    onRemove (taskId) {
      db.collection('tasks').doc(taskId).delete()
    }
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
