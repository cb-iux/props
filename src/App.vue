<template lang="html">
  <div>
    <app-styleone v-bind:content="content" v-if="content.index === 1"></app-styleone>
    <app-styletwo v-bind:content="content" v-if="content.index === 2"></app-styletwo>
    <app-stylethree v-bind:content="content" v-if="content.index === 3"></app-stylethree>
    <div v-on:click="nextStyle" id="logo1">Logo</div>
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
        styles: 4,
        title: 'Christoffer Bogsti',
        ingress: 'Frontend-utvikler med bakgrunn fra grafisk design',
        bodyTxt: 'Studerte grafisk design ved Høyskolen Kristiania og har en bachelorgrad i design og web-utvikling fra Deakin University i Australia. Har jobbet som designer i Cappelen Damm forlag og vunnet pris for beste eBok app på Årets vakreste Bøker.',
        endTxt: 'Jobber nå som Freelance Frontend-utvikler og holder til i Oslo. Har du en nettside du ønsker å realisere? Jeg kan designe og bygge den for deg.',
        contact: 'Send meg en melding og jeg kommer straks tilbake til deg',
        adress: 'post@christofferbogsti.com'
      }
    }
  },
  methods: {
    // when logo button is clicked
    nextStyle: function () {
      // checks if index is the same as number of styles
      if (this.content.index === this.content.styles) {
        // if true; logo id goes back to logo1
        document.getElementById('logo' + this.content.index).id = 'logo1'
        // if true; index resets to 1
        this.content.index = 1
        console.log('style: ' + this.content.index)
      } else {
        // targets logo id
        let logo = document.getElementById('logo' + this.content.index)
        // adds one number to the index
        this.content.index++
        console.log('style: ' + this.content.index)
        // adds one number to the logo id
        logo.id = 'logo' + this.content.index
      }
    }
  }
}
</script>

<style lang="sass">
  \:root
    font-size: 16px
    max-width: 400px

  #logo1
    background: black
    color: white
    display: inline
    padding: 10px
    transition: 200ms ease-in-out

  #logo2
    background: crimson
    color: white
    display: inline
    padding: 10px
    transition: 200ms ease-in-out

  #logo3
    background: blue
    color: white
    display: inline
    padding: 10px
    transition: 200ms ease-in-out
</style>
