<template lang="pug">
  v-list-tile
    v-list-tile-action
      slot(name="leftActions")

    v-list-tile-content
      v-list-tile-title(
        :style="{'text-decoration': value.done ? 'line-through' : null}"
      ) {{ value.title }}

    v-list-tile-action
      slot(name="rightActions")
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
