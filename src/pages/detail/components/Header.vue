<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll: function () {
      let top = document.documentElement.scrollTop
      if (top > 28.82) {
        let opacity = top / 67.2
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header-abs
    position: absolute
    left: .4rem
    top: .4rem
    width 1.4rem
    height: 1.4rem
    line-height 1.4rem
    border-radius .2rem
    text-align center
    background rgba(0,0,0,.8)
    .header-abs-back
      color: #fff
      font-size .4rem
  .header-fixed
    z-index: 2
    position fixed
    top 0
    left 0
    right 0
    line-height: $headerHeight
    height  $headerHeight
    text-align center
    color #fff
    font-size 0.32rem
    background $bgColor
    .header-fixed-back
      position absolute
      top: 0
      left 0.5rem
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
