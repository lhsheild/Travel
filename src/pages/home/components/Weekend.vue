<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src='item.imgUrl' alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/51/e2ca4d053e34af.jpg_r_640x214_8e7cfb53.jpg',
          title: '南宁动物园',
          desc: '野性与激情相碰撞的野生动物与主题乐园'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/51/e2ca4d053e34af.jpg_r_640x214_8e7cfb53.jpg',
          title: '南宁动物园',
          desc: '野性与激情相碰撞的野生动物与主题乐园'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/51/e2ca4d053e34af.jpg_r_640x214_8e7cfb53.jpg',
          title: '南宁动物园',
          desc: '野性与激情相碰撞的野生动物与主题乐园'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/51/e2ca4d053e34af.jpg_r_640x214_8e7cfb53.jpg',
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
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      ellipsis()
      line-height 1.54rem
      font-size .1.2rem
    .item-desc
      ellipsis()
      line-height 1.1rem
      font-size .1rem
      color #ccc
</style>
