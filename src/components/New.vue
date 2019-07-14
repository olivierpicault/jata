<template>
  <div class="container-fluid">
    <div class="form-row align-items-center">
      <div class="input-group">
        <input
          v-model="content"
          type="text"
          class="form-control"
          placeholder="Take a note ..."
          @keyup.enter="add">
        <button
          class="btn btn-primary"
          @click="add">Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: undefined
    }
  },
  methods: {
    add () {
      if (this.content !== undefined && this.content.trim() !== '') {
        this.$store.dispatch('create', { content: this.content })
        // Reset input
        this.content = undefined
      }
    }
  }
}
</script>
