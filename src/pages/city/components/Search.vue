<template>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .search
    height 1.72 rem
    padding 0.1 rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height 1.62rem
      padding 0.1rem
      line-height 1.62 rem
      text-align center
      border-radius 0.06rem
      color #666
</style>
