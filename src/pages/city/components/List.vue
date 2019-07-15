<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南宁</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          A
        </div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }

}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc

  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow hidden
    position absolute
    top 4.25rem
    left:0
    right:0
    bottom:0

    .title
      line-height: 1.8rem
      background #eee
      padding-left .2rem
      color #666
    .button-list
      padding .1rem
      overflow hidden
      padding .1rem 1.8rem .1rem .1rem
      .button-wrapper
        width 33.33%
        float: left
        .button
          padding .2rem
          text-align center
          margin .15rem .3rem
          border .04rem solid #ccc
          border-radius .05rem
    .item-list
      .item
        line-height: 1.84rem
        color: #000
        padding-left:.3rem
</style>
