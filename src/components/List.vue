<template>
  <div class="list">
    <ul class="list-group">
      <li
        v-for="(item, id) in items"
        :key="id"
        class="">
        <div class="card">
          <div class="card-body">
            {{ item }}
          </div>
          <div class="card-footer">
            <a
              href="#"
              class="card-link"
              @click="remove(id)">Remove</a>
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
    remove (id) {
      this.items.splice(id, 1)
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
