<template>
<div class="containner" @click="handleGalleryClick">
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item, index) of imgs" :key="index">
      <img class="gallary-img" :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper></div>
</div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick: function () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
  .containner >>> .swiper-container
    overflow inherit
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
      padding-bottom 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color aliceblue
        bottom: -2rem
</style>
