<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasList">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs['search'])
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .search
    height 1.72 rem
    padding 0.1 rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height 1.62rem
      padding 0.1rem
      line-height 1.62 rem
      text-align center
      border-radius 0.06rem
      color #666
  .search-content
    position absolute
    top 4.2rem
    left: 0
    right:0
    bottom 0
    overflow hidden
    background whitesmoke
    z-index 1
    .search-item
      line-height 1.62rem
      padding-left .4rem
      color #666
      background white
</style>
