import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Learn vuejs',
        done: false
      },
      {
        title: 'Learn stylus',
        done: false
      },
      {
        title: 'Learn material.io',
        done: false
      }
    ]
  },
  mutations: {
    APPEND_TODO_ITEM (state, value) {
      this.state.todos.push({
        title: value,
        done: false
      })
    },
    REMOVE_TODO_ITEM (state, index) {
      this.state.todos.splice(index, 1)
    },
    UPDATE_TODO_ITEM (state, data) {
      this.state.todos[data.index] = Object.assign(
        this.state.todos[data.index],
        data.payload
      )
    }
  },
  actions: {
    appendTodoItem ({ commit }) {
      commit('APPEND_TODO_ITEM')
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
