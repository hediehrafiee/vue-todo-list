<template lang="pug">
  div.mb-5
    v-card.pa-2.display-1.mb-2 FINISHED TODOS LIST
    v-card.mb-2
      v-list(v-if="donetodos.length > 0")
        v-list-tile(
          v-for="(item, index) in donetodos"
          :value="item"
          :key="index"
        )
          v-list-tile-action
            v-checkbox(
                value
                color="success"
                :input-value="item.done"
                hide-details
                @change="(v) => updateDoneTodos(index, v)"
              )

          v-list-tile-content
            v-list-tile-title(:style="{'text-decoration': item.done ? 'line-through' : null}") {{ item.title }}

          v-list-tile-action
            v-btn.d-inline-block(
              @click="$store.commit('REMOVE_TODO_ITEM', index)"
              color='red accent-4 darken-2'
              icon
              flat
            )
              v-icon remove
      template(v-else)
        p.py-4.grey--text.m List is empty!
</template>

<script>
export default {
  computed: {
    donetodos () {
      console.log(JSON.stringify(this.$store.getters.doneTodos))
      return this.$store.getters.doneTodos
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
  }
}
</script>
