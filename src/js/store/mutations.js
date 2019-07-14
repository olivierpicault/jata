import Vue from 'vue'

const mutations = {
  setTodos (state, todos) {
    Vue.set(state, 'todos', todos)
  },
  add (state, todo) {
    state.todos.splice(0, 0, todo)
  },
  delete (state, id) {
    const todo = state.todos.find(x => x.id === id)
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
  }
}

export default mutations
