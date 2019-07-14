import db from './../db'

const actions = {
  async create (context, todo) {
    await db.collection('todos').add(todo)
    context.dispatch('read')
  },
  async read (context) {
    const todos = []
    await db.collection('todos')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          todos.splice(0, 0, {
            id: doc.id,
            content: doc.data().content
          })
        })
      })
    context.commit('setTodos', todos)
  },
  async delete (context, id) {
    await db.collection('todos')
      .doc(id)
      .delete()
  }
}

export default actions
