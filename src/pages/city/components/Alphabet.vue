<template>
  <div>
    <ul class="list">
      <li class="item" v-for="item of letters" :key="item" @click="handleLetterClick" :ref="item"
          @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 66.53
          const index = Math.floor((touchY - this.startY) / 21) + 1
          if (index >= 0 && index < this.letters.length) { this.$emit('change', this.letters[index]) }
        }, 5)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex-direction column
    justify-content center
    position: absolute
    top: 2.58 rem
    right 0
    bottom: 0
    width 1.4rem
    .item
      line-height 1.34rem
      text-align center
      color:$bgColor
</style>
