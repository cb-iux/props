<template lang="html">
  <div>
    <app-styleone v-bind:content="content" v-if="content.index === 1"></app-styleone>
    <app-styletwo v-bind:content="content" v-if="content.index === 2"></app-styletwo>
    <app-stylethree v-bind:content="content" v-if="content.index === 3"></app-stylethree>
    <button v-on:click="numcount">NEXT</button>
  </div>
</template>

<script>
import styleone from './components/styleone'
import styletwo from './components/styletwo'
import stylethree from './components/stylethree'

export default {
  components: {
    'app-styleone': styleone,
    'app-styletwo': styletwo,
    'app-stylethree': stylethree
  },
  data () {
    return {
      content: {
        index: 1,
        styles: 3,
        title: 'Christoffer Bogsti'
      }
    }
  },
  methods: {
    numcount: function () {
      if (this.content.index === this.content.styles) {
        this.content.index = 0
      }
      this.content.index++
      console.log(this.content.index)
    }
  }
}
</script>

<style lang="sass">
</style>
