<template>
  <div id="resume" :style="BGimgs">
    <div class="wrap">
      <my-ipt :preName="'姓名'"></my-ipt>
    </div>
  </div>
</template>
<script>
import myIpt from '@/view/base/ipt.vue'
export default {
  data() {
    return {
      BGimgs: {
        background: `url(${require('@/assets/wallpaper.jpg')})`
      }
    }
  },
  components: {
    'my-ipt': myIpt
  }
}
</script>
<style scoped>
  .wrap{
    margin: 0 auto;
    width: 88.125rem;
  }
  #resume{
    padding-top: 5.5rem;
  }
</style>
