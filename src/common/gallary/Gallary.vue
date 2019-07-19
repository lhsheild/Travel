<template>
<div class="containner">
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1505/df/df83608955463ae5.water.jpg_r_800x800_7c4c30f4.jpg" alt="">
    </swiper-slide>
    <!-- Optional controls -->
<!--    <div class="swiper-pagination" slot="pagination"></div>-->
  </swiper></div>
</div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .containner
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position: fixed
    left:0
    right:0
    top:0
    bottom:0
    background #000
    .wrapper
      width 100%
      height 0
      overflow hidden
      padding-bottom 100%
</style>
