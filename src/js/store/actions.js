import moment from 'moment'
import db from './../db'

const actions = {
  async create (context, todo) {
    todo.created = moment().format()
    await db.collection('todos').add(todo)
    context.dispatch('read')
  },
  async read (context) {
    const todos = []
    await db.collection('todos')
      .orderBy('created', 'desc')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          todos.push({
            id: doc.id,
            content: doc.data().content,
            created: doc.data().created
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
