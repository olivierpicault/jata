<template>
  <div class="list">
    <ul class="list-group">
      <li
        v-for="item in items"
        :key="item.id">
        <div class="card">
          <div class="card-body">
            {{ item.content }}
          </div>
          <div class="card-footer">
            <a
              href="#"
              class="card-link"
              @click="remove(item.id)">Remove</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.state.todos
    }
  },
  methods: {
    remove (id) {
      this.$store.commit('delete', id)
      this.$store.dispatch('delete', id)
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
