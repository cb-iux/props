<template lang="html">
  <h1>{{ content.title }}</h1>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="sass" scoped>
  h1 
    color: red

</style>
