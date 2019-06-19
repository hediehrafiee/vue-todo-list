<template lang="pug">
  v-app
    v-toolbar(app='')
      v-toolbar-title.headline.text-uppercase
        span Hedieh's
        span.font-weight-light TODO APP
      v-spacer
      v-btn(flat href='https://gitlab.com/hedieh/vuetify-todo' target='_blank')
        span.mr-2 View On Gitlab
    v-content
      v-layout(justify-center)
        v-flex(xs11)
          router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Material+Icons')

#app
  font-family 'vazir',Roboto,"Helvetica Neue",Arial,sans-serif!important
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background: #f5f5f5

h1,h2,h3,h4,h5,h6
  font-family 'vazir',Roboto,"Helvetica Neue",Arial,sans-serif!important
</style>
