<template>
  <div id="app">
    <comment/>
  </div>
</template>

<script>
import Comment from './components/Comment'

export default {
  name: 'app',
  components: {
    Comment
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

</style>
