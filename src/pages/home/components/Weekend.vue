<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
  props: {
    weekendList: Array
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
    line-height 1.6rem
    background #ccc
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
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
