<template>
<div>
  <ul class="list">
  <li class="item">A</li>
  <li class="item">A</li>
  <li class="item">A</li>
  <li class="item">A</li>
  <li class="item">A</li>
  <li class="item">A</li>
  <li class="item">A</li>
</ul></div>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
      line-height 1.44rem
      text-align center
      color:$bgColor
</style>
