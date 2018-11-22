<template lang="jade">
  .app
    back
    router-view.app-container(:hashbang="true",:history="true")
</template>
<script>
  import back from "./components/back.vue"
  export default {
    name: "app",
    methods: {
      init(){
      }
    },
    components: {
      back
    },
    mounted(){
      this.init()
    }
  }
</script>
<style lang='stylus'>
  @css {
    html {
      filter: unquote('progid:DXImageTransform.Microsoft.gradient( startColorstr=' #433798 ', endColorstr=' #7f2891 ',GradientType=0 )')
    }
  }

  .app
    position: relative
    height: 100%
    width: 100%

  .app-container
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    animation-duration: 0.5s


</style>