<template>
    <div class="banner">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1806/da/da0f9ef498e8b1f8a3.img.jpg_600x330_c188d4ac.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">阿狸欢乐王国南宁站</div>
        <div class="banner-number"><span class="iconfont arrow-icon">&#xe6aa;</span>9</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style scoped lang="stylus">
.banner
  position: relative
  overflow hidden
  height:0
  padding-bottom 55%
  .banner-img
    width:100%
  .banner-info
    position absolute
    left:0
    right 0
    bottom 0
    line-height 0.8rem
    display flex
    color: #fff
    .banner-title
      flex 1
      font-size 0.32rem
      padding: 0 0.2rem
    .banner-number
      padding:0 .4rem
      line-height 0.4rem
      height:0.4rem
      border-radius 0.2rem
      background rgba(0,0,0,0.8)
</style>
