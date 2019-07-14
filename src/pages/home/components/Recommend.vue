<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src='item.imgUrl' alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/06/2f1ae390435649f80130201861e5cd8e.jpg_200x200_be60d95d.jpg',
          title: '南宁动物园',
          desc: '野性与激情相碰撞的野生动物与主题乐园'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/06/2f1ae390435649f80130201861e5cd8e.jpg_200x200_be60d95d.jpg',
          title: '南宁动物园',
          desc: '野性与激情相碰撞的野生动物与主题乐园'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/06/2f1ae390435649f80130201861e5cd8e.jpg_200x200_be60d95d.jpg',
          title: '南宁动物园',
          desc: '野性与激情相碰撞的野生动物与主题乐园'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/06/2f1ae390435649f80130201861e5cd8e.jpg_200x200_be60d95d.jpg',
          title: '南宁动物园',
          desc: '野性与激情相碰撞的野生动物与主题乐园'
        }
      ]
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
