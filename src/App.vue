<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import storage from './storage/index'
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    mounted() {
      // storage.setItem({"user":{"age":20}})
      storage.setItem("abc",{a:1}, "user")
    }
  }
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
