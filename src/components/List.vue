<template>
  <div class="list">
    <ul class="list-group">
      <li
        v-for="item in items"
        :key="item.id">
        <div class="card">
          <div class="card-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-10">
                  {{ item.content }}
                </div>
                <div class="col-1">
                  <fa
                    icon="trash"
                    class="icon"
                    @click="remove(item.id)" />
                </div>
              </div>
            </div>
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
      // Deletes item from model
      // Done first so user enjoys the app
      this.$store.commit('delete', id)
      // Deletes item from database
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

.icon:hover {
  cursor: pointer;
}
</style>
