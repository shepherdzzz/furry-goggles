<template>
  <div id="welcome">
    <router-view></router-view>
    <el-row>
      <el-col :span="12">
        <div
          @mouseenter="startAnimate(0)"
          @mouseleave="endAnimate(0)"
          :style="divStyle"
          class="grid-content bg-purple"
        >
          <div class="resume wrap" :style="divStyle">
            <a href="#/resume">
              <div class="box"
               :style="boxStyle"
               @mouseenter="startBoxAnimate(0)"
               @mouseleave="resetBoxAnimate(0)"
              ><p>Go my</p><p>Resume</p></div>
            </a>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div
          @mouseenter="startAnimate(1)"
          @mouseleave="endAnimate(1)"
          :style="divStyle"
          class="grid-content bg-purple-light"
        >
          <div class="home wrap" :style="divStyle">
            <a href="#/home">
              <div class="box"
               :style="boxStyle"
               @mouseenter="startBoxAnimate(1)"
               @mouseleave="resetBoxAnimate(1)"
              ><p>Go my</p><p>home</p></div>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import $ from 'jquery'
window.$ = $
window.jQuery = $
export default {
  data () {
    return {
      divStyle: {
        height: ''
      },
      boxStyle: {
        left: '0',
        top: '0',
        border: '0.75rem solid #320d7f',
        width: '17.5rem',
        height: '8.75rem',
        position: 'absolute',
        fontSize: '3rem',
        textAlign: 'center',
        fontWeight: '700'
      }
    }
  },
  created: function () {
    let h = $(window).height()
    let w = $(window).width()
    let _this = this
    _this.divStyle.height = `${h / 16}rem`
    _this.boxStyle.left = `${w / 64 - 8.75}rem`
    _this.boxStyle.top = `${h / 32 - 4.375}rem`
    $(window).resize(function (event) {
      h = $(window).height()
      w = $(window).width()
      _this.boxStyle.left = `${w / 64 - 8.75}rem`
      _this.boxStyle.top = `${h / 32 - 4.375}rem`
      _this.divStyle.height = `${h / 16}rem`
    })
  },
  methods: {
    startAnimate: function (id) {
      let wrapS = $('.wrap').eq(id)
      let start = $('.box').eq(id)
      start.stop(true)
      wrapS.stop(true)
      wrapS.animate({backgroundColor: '#320d7f'}, 400)
      start.animate({
        borderRadius: 100,
        color: '#fff',
        borderColor: '#fff',
        backgroundColor: '#320d7f'
      }, 500)
    },
    endAnimate: function (id) {
      let wrapE = $('.wrap').eq(id)
      let end = $('.box').eq(id)
      end.stop(true)
      wrapE.stop(true)
      wrapE.animate({backgroundColor: '#F6FBF7'}, 400)
      end.animate({
        borderRadius: 0,
        color: '#320d7f',
        borderColor: '#320d7f',
        backgroundColor: '#F6FBF7'
      }, 500)
    },
    startBoxAnimate: function (id) {
      let start = $('.box').eq(id)
      start.stop(true)
      start.animate({
        borderRadius: 50,
        color: '#320d7f',
        borderColor: '#fff',
        backgroundColor: '#F6FBF7'
      }, 500)
    },
    resetBoxAnimate: function (id) {
      let reset = $('.box').eq(id)
      reset.stop(true)
      reset.animate({
        color: '#fff',
        borderColor: '#fff',
        backgroundColor: '#320d7f'
      }, 500)
    }
  }
}

</script>
<style scoped>
/*.grid-content{line-height: 80.0rem}*/
  #welcome{
    background: #F6FBF7;
    position: relative;
    width: 100%;
  }
  .left{
    float: left;
    width: 50%;
    text-align: center;
  }
  .right{
    text-align: center;
    float: right;
    width: 50%;
  }
  .wrap{
    position: relative;
  }
</style>
