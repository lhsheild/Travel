<template>
<div>
  <ul class="list">
  <li class="item" v-for="(item, key) of cities" :key="key" @click="handleLetterClick">{{key}}</li>
</ul></div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      console.log(e.target.innerText)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex-direction column
    justify-content center
    position: absolute
    top: 2.58 rem
    right 0
    bottom: 0
    width 1.4rem
    .item
      line-height 1.34rem
      text-align center
      color:$bgColor
</style>
