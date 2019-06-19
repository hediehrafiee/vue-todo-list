<template lang="pug">
  div.new-item
    v-text-field(
      v-model="value"
      solo
      append-icon="playlist_add"
      placeholder="Enter new task..."
      @click:append="addNewItem"
      @keyup.enter="addNewItem"
    )
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    addNewItem () {
      this.$store.commit('APPEND_TODO_ITEM', this.value)
      this.value = ''
    }
  }
}
</script>
