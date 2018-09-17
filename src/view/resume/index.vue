<template>
  <div id="myResume" :style="BG">
    <div class="main">
      <div id="nav"><img src="@/assets/navicon.png" alt=""></div>
      <div id="BIGH">hello</div>
      <div class="content">
        <p class="ct-name">你好，我是{{myName}}</p>
        <p class="ct-intro">详细介绍</p>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        myName: 'Cmart',
        BG: {
          background: `url(${require('@/assets/resumeBG.png')}) no-repeat`
        }
      }
    }
  }
</script>
<style scoped>
  #myResume{
    height: 953px;
    padding-top: 8rem;
  }
  .main{
    position: relative;
    background: #1d1826;
    margin: 0 auto;
    width: 50rem;
    padding-top: 20rem;
    height: 30rem;
    border-radius: 4.5rem;
    box-shadow:0 0 1.5rem #000;
  }
  #nav{
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }
  .content{
    text-align: center;
    width: 88%;
    height: 20rem;
    background: #E63235;
  }
  .content .ct-name{
    color: #fff;
    font-size: 2.5rem;
  }
  #BIGH{
    top: 8rem;
    z-index: 10;
    left: 2rem;
    color: #DEBABD ;
    position: absolute;
    opacity: 0.1;
    font-size: 14rem;
  }
</style>
