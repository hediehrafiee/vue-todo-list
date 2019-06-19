<template lang="pug">
  div.mt-4
    v-layout(row wrap)
      v-flex.pa-4(xs6)
        v-card.mb-2.pa-2.display-1 TODOS LIST
        v-card.mb-2
          v-list(v-if="todos.length > 0")
            todo-list-item(
              v-for="(item, index) in todos"
              :value="item"
              :key="index"
            )
              template(v-slot:leftActions)
                v-checkbox.d-inline-block(
                  :value="item.done"
                  color="success"
                  hide-details
                  @change="(v) => updateDoneTodos(index, v)"
                )

              template(v-slot:rightActions)
                v-btn.d-inline-block(
                  @click="$store.commit('REMOVE_TODO_ITEM', index)"
                  color='red accent-4 darken-2'
                  icon
                  flat
                )
                  v-icon remove
          template(v-else)
            p.py-4.grey--text List is empty!
        todo-new-item
      v-flex.pa-4(xs6)
        todo-done-list
</template>

<script>
import todoListItem from '@/components/todo/list-item'
import todoNewItem from '@/components/todo/new-item'
import todoDoneList from '@/components/todo/done-list'

export default {
  components: {
    todoListItem,
    todoNewItem,
    todoDoneList
  },
  data () {
    return {
      checkboxValue: ''
    }
  },
  methods: {
    updateDoneTodos (index, value) {
      this.$store.commit('UPDATE_TODO_ITEM', {
        index: index,
        payload: {
          done: value
        }
      })
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>

<style>
  a:hover , a:focus{
    text-decoration: none;
    cursor: pointer;
  }
  span:hover{
    cursor: pointer;
  }
</style>
