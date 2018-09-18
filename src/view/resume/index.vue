<template>
  <div id="myResume" :style="BG">
    <content-info id="main"
      @changeFlag="changeFlag"
      @changeStyle="changeStyle"
      :content="'你好，我是Cmart'"
      :back="'hello'"
      :info="'详细信息'"
    ></content-info>
  <div class="rightTab" v-show="rTabShow" :style="tabStyle">
    <div class="wrap">
      <div class="info" v-for="item in listName1">{{item}}</div>
    </div>
  </div>
  </div>
</template>
<script>
import contentInfo from './contentInfo.vue'
export default {
  data() {
    return {
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
  methods: {
    changeFlag: function(...data) {
      this.rTabShow = data
    },
    changeStyle: function(...data) {
      this.tabStyle = data
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
  border-radius: 4.5rem;
  box-shadow:0 0 1.5rem #000;
  padding-bottom: 5rem;
}
.rightTab{
  z-index: 0;
  box-shadow:0 0 1.5rem #000;
  border-radius: 0 4.5rem 4.5rem 0;
  position: absolute;
  height: 38rem;
  width: 30rem;
  background: #1d1826;
}
.info{
  color: #fff;
  cursor: pointer;
}
.wrap{
  margin-top: 14rem;
  text-align: center;
}
.present{
  color:;
}
</style>
