<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div v-for="item of hotCities" :key="item.id" class="button-wrapper" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">
          {{key}}
        </div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city of item" :key="city.id" @click="handleCityClick(city.name)">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
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
