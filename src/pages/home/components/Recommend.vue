<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/' + item.id" tag="li" class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src='item.imgUrl' alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"

  .title
    margin-top .4rem
    line-height 1.6rem
    background #ccc
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 6rem
    .item-img
      width 5.6rem
      height:5.6rem
      padding 0.2rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        ellipsis()
        line-height 1.6rem
        font-size 1.12rem
      .item-desc
        ellipsis()
        line-height 2.2rem
        font-size .36rem
        color #ccc
      .item-button
        margin-top .16rem
        background #ff9300
        padding .2rem
        border-radius 0.01rem
        font-size .42rem
        color #fff
        line-height .44rem
</style>
