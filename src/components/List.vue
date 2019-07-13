<template>
  <div class="list">
    <ul class="list-group">
      <li
        v-for="(item, index) in items"
        :key="item.id"
        class="">
        <div class="card">
          <div class="card-body">
            {{ item.content }}
          </div>
          <div class="card-footer">
            <a
              href="#"
              class="card-link"
              @click="remove(index, item.id)">Remove</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    initialItems: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      items: this.initialItems
    }
  },
  methods: {
    remove (index, id) {
      // Remove task
      this.items.splice(index, 1)
      this.$emit('delete', id)
    }
  }
}
</script>

<style scoped>
.list-group {
  margin-top: 25px;
}

.list-group > li {
  list-style-type: none;
  margin-bottom: 25px;
}
</style>
