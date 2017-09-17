<template lang="html">
  <app-styleone v-bind:content="content"></app-styleone>
</template>

<script>
import styleone from './components/styleone'

export default {
  components: {
    'app-styleone': styleone
  },
  data () {
    return {
      content: {
        title: 'Christoffer Bogsti'
      }
    }
  }
}
</script>

<style lang="css">
</style>
