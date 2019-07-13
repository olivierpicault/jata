import Vue from 'vue'

const mutations = {
  setTodos (state, todos) {
    Vue.set(state, 'todos', todos)
  }
}

export default mutations
