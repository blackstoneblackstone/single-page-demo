<template lang="jade">
  .con
    button(@click="back")
      | 返回

</template>
<script>
  export default {
    data: function () {
      return {}
    },
    components: {},
    computed: {},
    mounted () {
    },
    methods: {
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .con
    position: absolute
    top: 100px
    left: 100px
    z-index: 100

  button
    font-size: 40px


</style>
