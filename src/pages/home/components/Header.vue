<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市景点/游玩/主题</div>
    <router-link to="/city">
      <div class="header-right">{{city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style scoped lang="stylus">
  @import "~styles/varibles.styl"

  .header
    display: flex
    line-height: 2.24rem
    background: $bgColor
    color: #fff
    .router-link-active{
      text-decoration: none;
    }
    a {
      text-decoration: none;
    }

    .header-left
      width: $headerHeight
      padding 0.2rem
      float: left
      .back-icon
        text-align center
        font-size .4rem

    .header-input
      flex: 1
      background: #fff
      padding 0.2rem
      border-radius: .1rem
      margin-top: .24rem
      margin-left: .2rem
      padding-left .2rem
      line-height: 1.76rem
      height: 1.76rem
      color: #ccc

    .header-right
      min-width: 4.24rem
      padding 0.1rem
      text-align center
      color white
      .arrow-icon
        margin-left -0.04rem
        font-size .42rem

</style>
