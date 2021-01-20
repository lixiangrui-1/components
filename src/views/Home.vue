<template>
  <div class="app">
    <div class="app-left"><Left/></div>
    <div class="app-center">
      <div class="app-center-top">
        <div class="app-center-top-btn">
          <span class="app-center-top-btn-item_1" @click="click(0)" 
          :style="index[0] ? {background: '#0cf', color: '#fff'} : {}">Desktop</span>
          <span class="app-center-top-btn-item_2" @click="click(1)"
          :style="index[1] ? {background: '#0cf', color: '#fff'} : {}">Mobile</span>
        </div>
      </div>
      <div class="app-center-center">
        <div class="app-center-center-desktop" v-if="index[0]"></div>
        <div class="app-center-center-mobile" v-if="index[1]">
          <div class="app-center-center-mobile-desktop"></div>
        </div>
      </div>
    </div>
    <div class="app-right">444</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Left from '@/components/left/index.vue'
  export default {
    components: {
      Left
    },
    setup () {
      const click = (e) => {
        index.value = [false,false]
        index.value[e] = true
      }
      const index = ref([true,false])
      return {
        click,index
      }
    }
  }
</script>

<style lang="stylus">
.app
  width 100vw
  height 100vh
  display flex
  background-color #333
  &-left
    width 20%
    height 100vh
    background-color red
  &-center
    width 60%
    height 100vh
    background-color #c9a
    &-top
      width 100%
      height 40px
      background-color #666
      display flex
      justify-content center
      align-items center
      &-btn
        width 140px
        display flex
        align-items center
        line-height 30px
        border-radius 15px
        background-color #fff
        &-item_1
          flex 1
          font-weight 500
          display block
          text-align center
          border-radius 15px 0 0 15px 
        &-item_2
          flex 1
          font-weight 500
          display block
          text-align center
          border-radius 0 15px 15px 0 
    &-center 
      width 100%
      height calc( 100% - 40px )
      padding 20px
      box-sizing border-box
      background-color #eee
      &-desktop
        background-color #fff
        width 100%
        height 100%
        border-radius 4px
      &-mobile
        background-color #333
        width 36%
        height 99%
        border-radius 20px
        margin 0 auto
        padding 25px 10px 35px
        position relative
        &::after
          content ''
          display block
          height 5px
          width 20px
          border-radius 2px
          position absolute
          top 10px
          left calc( 50% - 10px)
          background-color #999
        &::before
          width 24px
          height 24px
          border-radius 50%
          position absolute
          bottom 6px
          content ''
          display block
          left  calc( 50% - 12px)
          background-color #999
        &-desktop
          width 100%
          height 100%
          overflow-y auto
          background-color #fff
  &-right
    width 20%
    height 100vh
    background-color #fff
</style>