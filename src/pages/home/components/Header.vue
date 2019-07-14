<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市景点/游玩/主题</div>
    <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe6aa;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<!--1rem = html font-size = 50px-->
<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .header
    display: flex
    line-height: 2.24rem
    background: $bgColor
    color: #fff

    .header-left
      width: 2.24rem
      float: left
      .back-icon
        text-align center
        font-size .4rem

    .header-input
      flex: 1
      background: #fff
      border-radius: .1rem
      margin-top: .24rem
      margin-left: .2rem
      padding-left .2rem
      line-height: 1.76rem
      height: 1.76rem
      color: #ccc

    .header-right
      width: 3.24rem
      text-align center
      .arrow-icon
        margin-left -0.04rem
        font-size .42rem

</style>
