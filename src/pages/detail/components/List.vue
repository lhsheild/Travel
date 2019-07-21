<template>
  <div>
    <div class="item" v-for="(item, index) of detailList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-tiltle-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :detailList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    detailList: Array
  }
}
</script>

<style scoped lang="stylus">
  .item-tiltle-icon
    position relative
    left .1rem
    top .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height 1.8rem
    font-size .62rem
    padding 0 0.2rem
  .item-children
    padding 0 1rem
</style>
