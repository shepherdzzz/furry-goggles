<template>
  <div id="resume" :style="BGimgs">
    <div class="wrap">
      <div class="header">
        <div class="name">
          <div class="nameT">
            <my-ipt :preName="'姓名'" v-model="resumeList.name"></my-ipt>
          </div>
          <div class="nameL"></div>
          <div class="nameB">
            <my-ipt :preName="'职位'" v-model="resumeList.position"></my-ipt>
          </div>
        </div>
      </div>
      <div class="resumeLeft">
        <div class="icon">
          <img src="@/assets/id.jpg" alt="">
        </div>
        <div class="resumeLeftCont">
          <div class="LCli">
            <my-left-li-disp
              :LCLi="{
                title: 'PROFILE',
                cont: 'asdqweq asdqwe asdqwe'
              }"
            ></my-left-li-disp>
            <my-left-li-disp
              :LCLi="{
                title: 'CONTACT',
                cont: 'asdqweq asdqwe asdqwe'
              }"
            ></my-left-li-disp>
            <my-left-li-disp
              :LCLi="{
                title: 'REFERENCES',
                cont: 'asdqweq asdqwe asdqwe'
              }"
            ></my-left-li-disp>
          </div>
        </div>
      </div>
      <div class="create-content"></div>
      <div class="bottom">
        <div class="resumeName">简历</div>
      </div>
    </div>
  </div>
</template>
<script>
import myIpt from '@/view/base/ipt.vue'
import Licreate from '@/view/base/LCLi_create.vue'
import LiDisp from '@/view/base/LCLi_disp.vue'
export default {
  data () {
    return {
      resumeList: {
        name: '',
        position: ''
      },
      BGimgs: {
        // background: `url(${require('@/assets/wallpaper.jpg')})`
      }
    }
  },
  components: {
    'my-ipt': myIpt,
    'my-left-li-create': Licreate,
    'my-left-li-disp': LiDisp
  }
}
</script>
<style scoped>
  .wrap{
    margin: 0 auto;
    position: relative;
    width: 88.125rem;
  }
  .wrap .header{
    position: relative;
    background: #57585c;
    height: 15rem;
  }
  .wrap .name{
    position: absolute;
    color: white;
    width: 30rem;
    height: 10rem;
    top: 3rem;
    right: 10rem;
  }
  .nameL{
    text-align: center;
    border-bottom: 3px solid white;
    margin:1rem 0;
  }
  .wrap .resumeLeft{
    padding: 1rem;
    position: absolute;
    top: 3rem;
    left: 2.5rem;
    width: 25rem;
    z-index: 10;
    background: #f3e9e0;
    color: black;
    height: auto;
  }
  #resume{
    padding-top: 5.5rem;
  }
  .bottom{
    position: relative;
    height: 2rem;
    background: #f3e9e0;
    line-height: 2rem;
    margin-top: 0.5rem;
  }
  .resumeName{
    background: #57585c;
    position: absolute;
    top: 0;
    border-left: 1px solid white;
    width: 10rem;
    text-align: center;
    right: 0;
    color: white;
  }
  .resumeLeft .icon{
    margin: 0 auto;
  }
  .resumeLeft .icon img{
    width: 10rem;
    display: block;
    margin: 0 auto;
    height: 10rem;
  }
  .LCli{
    margin-top: 2rem;
  }
  .li-disp{
    margin-top: 3rem;
  }
</style>
