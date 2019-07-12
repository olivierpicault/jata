<template>
  <div class="new">
    <div class="form-row align-items-center">
      <div class="col-sm-10">
        <input
          v-model="content"
          type="text"
          class="form-control"
          placeholder="Take a note ..."
          @keyup.enter="add">
      </div>
      <div class="col-sm-2">
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
        this.$emit('add', this.content)
        this.content = undefined
      }
    }
  }
}
</script>
