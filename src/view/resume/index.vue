<template>
  <div id="myResume" :style="BG">
    <content-info id="main"
      @changeFlag="changeFlag"
      @changeStyle="changeStyle"
      :dataInfo="dataInfo[isPre]"
      :tabFlag="tabFlag"
    ></content-info>
  <div class="rightTab" v-show="rTabShow" :style="tabStyle">
    <div class="wrap">
      <div
        class="info"
        v-for="(item, index) in listName1"
        :class="{ 'present' : (index == isPre) }"
        @click="tabRoll(index)"
      >{{item}}</div>
    </div>
    <i id="icon" class="el-icon-close" type="error" @click="animClose"></i>
  </div>
  </div>
</template>
<script>
import contentInfo from './contentInfo.vue'
import $ from 'jquery'
window.$ = $
window.jQuery = $
export default {
  data () {
    return {
      dataInfo: [
        {
          content: '你好我是Cmart',
          back: 'hello',
          info: '杭电低等研究生(非自适应网页)'
        },
        {
          content: '技能',
          back: '学习',
          info: 'vue'
        },
        {
          content: '全栈工程师（雏形）',
          back: 'study',
          info: 'vue+PHP/Go+Mysql'
        },
        {
          content: '联系方式',
          back: 'none',
          info: '137****9307/1434610823@qq.com'
        }
      ],
      isPre: 0,
      tabStyle: {
        left: `0`,
        top: `0`
      },
      rTabShow: false,
      listName1: [
        'About Me',
        'Skills',
        'Work',
        'Connect'
      ],
      tabFlag: true,
      myName: 'Cmart',
      BG: {
        height: '',
        background: `url(${require('@/assets/resumeBG.png')}) no-repeat`
      }
    }
  },
  components: {
    'content-info': contentInfo
  },
  // created: function() {
  //   this.tabStyle.left = `${$('#main').offset().left / 16 + 20}rem`
  //   this.tabStyle.top = `${$('#main').offset().top / 16 + 3.5}rem`
  // },
  methods: {
    tabRoll: function (index) {
      this.isPre = index
    },
    changeFlag: function (...data) {
      this.rTabShow = data
      this.tabFlag = !data
    },
    changeStyle: function (...data) {
      this.tabStyle = data
    },
    animClose: function () {
      if (!this.tabFlag) {
        this.tabFlag = true
        $('.main').stop(true)
        $('#BIGH p').stop(true)
        $('.main').animate({
          width: '50rem',
          marginRight: '-=30rem'
        }, 500)
        $('#BIGH p').animate({fontSize: '14rem'}, 500, () => {
          this.rTabShow = false
        })
      }
    }
  }
}
</script>
<style scoped>
#myResume{
  height: 56rem;
  padding-top: 8rem;
}
#main{
  z-index: 1;
  position: relative;
  background: #1d1826;
  margin: 0 auto;
  width: 50rem;
  border-radius: 2rem;
  box-shadow:0 0 1.5rem #000;
  padding-bottom: 5rem;
}
.rightTab{
  z-index: 0;
  box-shadow:0 0 1.5rem #000;
  border-radius: 0 2rem 2rem 0;
  position: absolute;
  height: 38rem;
  width: 30rem;
  background: #1d1826;
}
.info{
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
.wrap{
  margin-top: 12rem;
  text-align: center;
}
.present{
  color:#E63235;
}
#icon{
  color: #E63235;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
}
#icon::before{
  font-size: 3rem;
}
</style>
