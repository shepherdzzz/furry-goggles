<template>
  <div class="main">
    <div id="nav" @click="anim"><img src="@/assets/navicon.png" alt=""></div>
    <div id="BIGH"><p>{{back}}</p></div>
    <div class="content">
      <p class="ct-name">{{content}}</p>
      <p class="ct-intro">{{info}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabFlag: true,
      rTabShow: false,
      tabStyle: {
        left: `0`,
        top: `0`
      },
    }
  },
  props: [
    'content',
    'back',
    'info'
  ],
  methods: {
    anim: function() {
      if(this.tabFlag){
        this.tabFlag = false
        $('.main').stop(true)
        $('#BIGH p').stop(true)
        $('.main').animate({
          width: '30rem',
          marginRight : '+=30rem'
        }, 500)
        $('#BIGH p').animate({fontSize: '10rem'}, 500)
        // this.rTabShow = true
        this.$emit('changeFlag',true)
        this.righTabAni()
      }
      else{
        this.tabFlag = true
        $('.main').stop(true)
        $('#BIGH p').stop(true)
        $('.main').animate({
          width: '50rem',
          marginRight : '-=30rem'
        }, 500)
        $('#BIGH p').animate({fontSize: '14rem'}, 500, ()=>{
          // this.rTabShow = false
          this.$emit('changeFlag',false)
        })
      }
    },
    righTabAni: function() {
      this.tabStyle.top = `${$('.main').offset().top / 16 + 3.5}rem`
      this.tabStyle.left = `${$('.main').offset().left / 16 + 20}rem`
      this.$emit('changeStyle',this.tabStyle)
    }
  }

}
</script>
<style>
#nav{
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 11;
  cursor: pointer;
}
.content{
  text-align: center;
  width: 88%;
  background: #E63235;
  margin-left: -0.5rem;
  padding:  5rem 0 5rem 0;
}
.content .ct-name{
  color: #fff;
  font-size: 2.5rem;
}
#BIGH{
  z-index: 10;
  color: #DEBABD ;
  width: 100%;
  text-align: center;
  opacity: 0.1;
  margin-bottom: -17rem;
}
#BIGH p{
  font-size: 14rem;
  line-height: 40rem;

}
.ct-intro{
  color:#DEBABD;
  margin-top: 2.5rem;
}
</style>
